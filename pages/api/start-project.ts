// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { emailHtmlTemplate } from "@/templates/project";
import type { NextApiRequest, NextApiResponse } from "next";
import _, { isEmpty } from "lodash";
import { withMiddleware } from "@/lib/upload";
import { mailOptions, transporter } from "@/config/nodemailer";

type Data = {
  message?: string;
  success?: boolean;
};

const messageFields = {
  subject: "Subject",
  fullName: "Full Name",
  email: "Email",
  company: "Company",
  phoneNumber: "Phone Number",
  teamMembers: "Team Members",
  skills: "Skills",
  hiringNeed: "Hiring Need",
  teamCount: "Team Count",
  devices: "Devices",
  projectName: "Project Name",
  projectDescription: "Project Description",
  documents: "Documents",
};

const generateEmailContent = (data: any) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `${
        messageFields[key as keyof typeof messageFields]
      }: \n${val} \n \n`),
    ""
  );

  const htmlData = Object.entries(data).reduce((str, [key, val]) => {
    if (key === "documents") {
      // Handle documents separately, if needed
    } else if (typeof val === "string") {
      str += `<h3 class="form-heading" align="left">${
        messageFields[key as keyof typeof messageFields]
      }</h3><p class="form-answer" align="left">${val}</p>`;
    } else if (Array.isArray(val)) {
      const values = val.map((item) => item.value).join(", ");
      str += `<h3 class="form-heading" align="left">${
        messageFields[key as keyof typeof messageFields]
      }</h3><p class="form-answer" align="left">${values}</p>`;
    } else if (key === "devices") {
      const devices = _.keys(
        _.pickBy(val as Record<string, boolean>, _.identity)
      ).join(", ");
      str += `<h3 class="form-heading" align="left">${
        messageFields[key as keyof typeof messageFields]
      }</h3><p class="form-answer" align="left">${devices}</p>`;
    } else if (typeof val === "object" && !isEmpty(val)) {
      str += `<h3 class="form-heading" align="left">${
        messageFields[key as keyof typeof messageFields]
      }</h3><p class="form-answer" align="left">${(val as any).value}</p>`;
    }
    return str;
  }, "");

  const html = emailHtmlTemplate(htmlData);
  return {
    text: stringData,
    html,
  };
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "POST") {
    const data = req.body;

    if (data && typeof data.devices === "string") {
      data.devices = JSON.parse(data?.devices);
    }
    if (data && typeof data.teamMembers === "string") {
      data.teamMembers = JSON.parse(data?.teamMembers);
    }
    if (data && typeof data.skills === "string") {
      data.skills = JSON.parse(data?.skills);
    }
    if (data && typeof data.hiringNeed === "string") {
      data.hiringNeed = JSON.parse(data?.hiringNeed);
    }
    try {
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContent(data),
        subject: data.subject,
        attachments: [
          {
            filename: "Uploaded Resume",
            // @ts-ignore
            path: req?.file?.path ? req?.file?.path : null,
          },
        ],
      });
      return res.status(200).json({ success: true });
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: "Bad Request" });
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default withMiddleware(handler);

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { emailHtmlTemplate } from "@/templates/project";
import type { NextApiRequest, NextApiResponse } from "next";
import { withMiddleware } from "@/lib/upload";
import { mailOptions, transporter } from "@/config/nodemailer";
import { CustomApiRequest } from "./start-project";

type Data = {
  message?: string;
  success?: boolean;
};

const messageFields = {
  subject: "Subject",
  fullName: "Full Name",
  email: "Email",
  linkedInUrl: "LinkedIn Url",
  resume: "Resume",
  message: "Message",
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
    if (key === "resume") {
      // Handle documents separately, if needed
    } else if (typeof val === "string") {
      str += `<h3 class="form-heading" align="left">${
        messageFields[key as keyof typeof messageFields]
      }</h3><p class="form-answer" align="left">${val}</p>`;
    }
    return str;
  }, "");

  const html = emailHtmlTemplate(htmlData);
  return {
    text: stringData,
    html,
  };
};

const handler = async (req: CustomApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "POST") {
    const data = req.body;

    try {
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContent(data),
        subject: data.subject,
        attachments: req?.file
          ? [
              {
                filename: req?.file?.originalname,
                path: req?.file?.path,
              },
            ]
          : undefined,
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

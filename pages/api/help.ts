// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { mailOptions, transporter } from "@/config/nodemailer";
import { emailHtmlTemplate } from "@/templates/project";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message?: string;
  success?: boolean;
};

const messageFields = {
  subject: "Subject",
  fullName: "Full Name",
  email: "Email",
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
    return (str += `<h3 class="form-heading" align="left">${
      messageFields[key as keyof typeof messageFields]
    }</h3><p class="form-answer" align="left">${val}</p>`);
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

    try {
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContent(data),
        subject: data.subject,
      });
      return res.status(200).json({ success: true });
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: "Bad Request" });
};

export default handler;

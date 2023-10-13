import type { NextApiRequest, NextApiResponse } from "next";
import client from "../../../config/sendgrid/sendgrid";
type Data = {
  status: string;
};
type Message = {
  email: string;
  full_name: string;
  message: string;
  phone_number: string;
};
type Body = {
  data: Message;
  token: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(405).send({ status: "only post allowd" });
  }
  const body: Body = req.body;
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${body.token}`,
    {
      method: "POST",
    }
  );
  const data = await response.json();
  if (!data.success) {
    return res.status(405).send({ status: "somthing went wrong..." });
  }
  const message = {
    to: ["saeid.savage@gmail.com", "saeid@step-agent.com"],
    from: {
      email: "saeid.noormohammad@gmail.com",
      name: "saeid noormohammad",
    },
    subject: "A message from 'mlb-flooring.com.au' contact page",
    html: `
      <h3>
   Information:
      </h3>
      <br>
     <p>Name : ${body.data.full_name}</p>
      <br>
     <p>Email : ${body.data.email}</p>
      <br>
     <p>Phone : ${body.data.phone_number}</p>
      <br>
     <p>Message : ${body.data.message}</p>
      `,
  };
  await client.send(message);
  res.status(200).json({ status: "done" });
}

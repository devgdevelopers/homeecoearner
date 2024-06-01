import nodemailer from 'nodemailer';
import { config } from 'dotenv';

config();

export default function handler(req, res) {
  // if (req.method !== 'POST') {
  //   return res.status(405).json({ message: 'Method Not Allowed' });
  // }

  // const transporter = nodemailer.createTransport({
  //   port: 465,
  //   host: 'smtp.gmail.com',
  //   auth: {
  //     user: process.env.GMAIL_USER,
  //     pass: process.env.GMAIL_PASS,
  //   },
  //   secure: true,
  // });

  // const mailData = {
  //   from: process.env.GMAIL_USER,
  //   to: process.env.GMAIL_USER,
  //   subject: `Message From ${req.body.name}`,
  //   text: `${req.body.message} | Sent from: ${req.body.email}`,
  //   html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`,
  // };

  // transporter.sendMail(mailData, (err, info) => {
  //   if (err) {
  //     console.error('Error sending email:', err);
  //     return res.status(500).json({ success: false, message: 'Internal Server Error' });
  //   } else {
  //     console.log('Email sent:', info);
  //     return res.status(200).json({ success: true });
  //   }
  // });
  res.json("dfsdkllk:klsef,sdnaf,")
}

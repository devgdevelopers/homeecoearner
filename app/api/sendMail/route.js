// pages/api/sendMail.js
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const mailOptions = {
      from: 'nehasharma@digranknow.com',
      to: `nehasharma@digranknow.com`, // Replace with the actual recipient's email
      subject: `Message from ${name}`,
      html: `<p>${message}</p>`,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info.response);
      res.status(200).json({ success: true, info });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, error: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

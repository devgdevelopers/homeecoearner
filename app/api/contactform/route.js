import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { name, email, message,phone } = await req.json();

  if (!email || !message|| !name|| !phone) {
    return NextResponse.json({ error: 'Email and message are required' }, { status: 400 });
  }

  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'info@homeecoearner.com', // Replace with your email or recipient's email
    subject: 'Message from Homeecoearner',
    text: `CONTACT PAGE FORM DETAILS: \n this message is sent by \n Username: ${name}\n Email: ${email}\n Phone: ${phone}\n Message: ${message}` ,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}

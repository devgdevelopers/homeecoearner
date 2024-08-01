import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
    const { name, email } = await req.json();

    if (!name || !email) {
        return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
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

    // Email options
    let mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'nehasharma@digranknow.com',
        subject: 'Sign Up Notification',
        text: `A new user has signed up.\n\nName: ${name}\nEmail: ${email}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Email sending error:', error);
        return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
    }
}

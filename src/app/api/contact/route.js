import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { name, email, message, botcheck } = await request.json();

        if (botcheck) {
            console.log("Bot Detected! Blocking submission.");
            return NextResponse.json({ success: true }, { status: 200 });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
        }

        if (!message || message.trim().length === 0) {
            return NextResponse.json({ error: 'Message cannot be empty' }, { status: 400 });
        }
        const ZEROBOUNCE_API_KEY = process.env.ZEROBOUNCE_API_KEY;

        if (ZEROBOUNCE_API_KEY) {
            const zeroBounceUrl = `https://api.zerobounce.net/v2/validate?api_key=${ZEROBOUNCE_API_KEY}&email=${email}&ip_address=`;
            const zbResponse = await fetch(zeroBounceUrl);
            const zbData = await zbResponse.json();

            if (zbData.status !== "valid") {
                console.log("Invalid Email Detected (Blocked):", email);
                return NextResponse.json({ error: 'Email does not exist' }, { status: 400 });
            }
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: process.env.GMAIL_USER,
            replyTo: email,
            subject: `New Portfolio Message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `
        <h3>New Contact Message</h3>
        <p><strong>Name: </strong> ${name}</p>
        <p><strong>Email: </strong> ${email}</p>
        <p><strong>Message: </strong><br/>${message}</p>
      `
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ success: true }, { status: 200 });

    } catch (error) {
        console.error("Email Error:", error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
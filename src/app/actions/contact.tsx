// app/actions/contact.ts
'use server';

import nodemailer from 'nodemailer';

export async function sendContactEmail(formData: {
  name: string;
  email: string;
  projectType: string;
  message: string;
}) {
  const { name, email, projectType, message } = formData;

  if (!name || !email || !message) {
    return { success: false, error: 'Missing required fields' };
  }

  // Create SMTP Transporter using cPanel details
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 465,
    secure: Number(process.env.SMTP_PORT) === 465, // true for port 465, false for 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    // Send email
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`, // Recommended by SMTP providers to avoid spam filters
      replyTo: email,
      to: 'hello@aishaas.com',
      subject: `New Inquiry from ${name} - ${projectType}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service Needed:</strong> ${projectType}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Email send error:', error);
    return { success: false, error: 'Failed to send message. Please try again later.' };
  }
}
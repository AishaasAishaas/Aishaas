'use server';

import nodemailer from 'nodemailer';

export async function sendContactEmail(formData: {
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  message: string;
}) {
  const { name, email, phone, projectType, message } = formData;

  if (!name || !email || !message) {
    return { success: false, error: 'Missing required fields' };
  }

  // Create SMTP Transporter with connection timeout limits
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'mail.aishaas.com',
    port: Number(process.env.SMTP_PORT) || 465,
    secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false, // Bypass self-signed cPanel SSL issues
    },
    connectionTimeout: 10000, // 10 seconds timeout limit
    socketTimeout: 10000,
  });

  try {
    await transporter.sendMail({
      from: `"AISHAAS Contact Form" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: 'hello@aishaas.com',
      subject: `New Inquiry from ${name} - ${projectType}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #4ade80;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone Number:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Service Needed:</strong> ${projectType}</p>
          <hr style="border: 0; border-top: 1px solid #ccc;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return { success: true };
  } catch (error: any) {
    console.error('Nodemailer SMTP Error:', error);
    return { success: false, error: `SMTP Error: ${error.message || 'Failed to send message.'}` };
  }
}
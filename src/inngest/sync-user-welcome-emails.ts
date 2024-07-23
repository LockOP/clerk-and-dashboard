import { inngest } from "./client";
import nodemailer, { Transporter } from 'nodemailer';

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Define the type for the email sending function parameters
interface SendEmailParams {
  to: string;
  subject: string;
  body: string;
}

// Define the type for the welcome email function parameters
interface WelcomeEmailParams {
  email: string;
  first_name: string;
}

// Define the type for the event data
interface ClerkUserCreatedEvent {
  data: {
    id: string;
    first_name: string;
    last_name: string;
    primary_email_address_id: string;
    email_addresses: { id: string; email_address: string }[];
  };
}


// Configure the transporter
const transporter: Transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GOOGLE_EMAIL,
    pass: process.env.GOOGLE_APP_KEY,
  },
});

// Send email function
const sendEmail = async ({ to, subject, body }: SendEmailParams): Promise<void> => {
  const mailOptions = {
    from: process.env.GOOGLE_EMAIL,
    to,
    subject,
    text: body,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error(`Failed to send email to ${to}:`, error);
  }
};

// Emails object with sendWelcomeEmail method
const emails = {
  sendWelcomeEmail: async ({ email, first_name }: WelcomeEmailParams): Promise<void> => {
    console.log(`Sending welcome email to ${email}...`);

    const subject = "Welcome to OmniSynkAI";
    const body = `
      Hi ${first_name},

      Welcome to OmniSynkAI! We're excited to have you on board.

      Best regards,
      OmniSynkAI
    `;

    await sendEmail({ to: email, subject, body });
  }
};

// Exported function to handle the Clerk user created event
export const sendWelcomeEmail = inngest.createFunction(
  { id: 'send-welcome-email' },
  { event: 'clerk/user.created' },
  async ({ event }: { event: ClerkUserCreatedEvent }) => {
    const user  = event.data;
    const { first_name }  = user;
    const email = user.email_addresses.find(e => e.id === user.primary_email_address_id)?.email_address;

    if (email) {
      await emails.sendWelcomeEmail({ email, first_name });
    } else {
      console.error("Primary email address not found");
    }
  }
);


interface ClerkUserSyncEvent {
  data: {
    id: string;
    first_name: string;
    last_name: string;
    primary_email_address_id: string;
    email_addresses: { id: string; email_address: string }[];
  };
}

const syncUser = inngest.createFunction(
  { id: 'sync-user-from-clerk' },
  { event: 'clerk/user.created' },
  async ({ event }: { event: ClerkUserSyncEvent }) => {
    const user = event.data;
    const { id, first_name, last_name } = user;
    const email = user.email_addresses.find(e => e.id === user.primary_email_address_id)?.email_address;

    if (!email) {
      throw new Error("Primary email address not found");
    }

    await prisma.user.create({
      data: {
        id,
        email,
        firstName: first_name,
        lastName: last_name
      }
    });

    await prisma.$disconnect();
  }
);

export { syncUser };

'use server'
import WelcomeEmail from '@/components/email';
import { FormSchem } from '@/components/sub/ContactUs';
import { Resend } from 'resend';
import { z } from 'zod';

type Inputs = z.infer<typeof FormSchem>;

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function sendEmailTest(Inputs: Inputs) {
  const { email, userFirstname, textarea } = Inputs;

  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: [email],
    subject: 'Thank you for contacting us!',
    react: WelcomeEmail({ userFirstname }),
  });
  

  if (error) {
    return { success: false, error: error };
  }

  return { success: true, data: data };
} 
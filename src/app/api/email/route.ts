import NewMessageEmail from "@/emails/NewMessageEmail";
import ThankYouEmail from "@/emails/ThankYouEmail";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Helper to wrap Resend's send call
async function sendEmail(options: {
  to: string | string[];
  subject: string;
  react: React.ReactElement;
  from?: string;
}) {
  // Note: `from` can default to verified address if omitted
  const payload = {
    from: options.from ?? "contact@jonathanmendoza.dev",
    to: options.to,
    subject: options.subject,
    react: options.react,
  };

  const { data, error } = await resend.emails.send(payload);
  if (error) {
    // Throw the error so Promise.all rejects immediately if one fails
    throw new Error(JSON.stringify(error));
  }

  return data;
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Prepare both email-send promises (thank you & new message email)
    const tyPromise = sendEmail({
      to: email,
      subject: "Thank you for reaching out!",
      react: ThankYouEmail(name),
    });

    const nmPromise = sendEmail({
      to: "contact@jonathanmendoza.dev",
      from: "onboarding@resend.dev",
      subject: "You have a new message",
      react: NewMessageEmail({ name, message }),
    });

    // Run both sends in parallel
    const [tyResult, nmResult] = await Promise.all([tyPromise, nmPromise]);

    return NextResponse.json({
      thankYou: tyResult,
      newMessage: nmResult,
    });
  } catch (error) {
    // Keep errors in one place
    console.error("Email send error:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Error sending emails",
      },
      { status: 500 }
    );
  }
}

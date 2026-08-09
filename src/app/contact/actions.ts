"use server";

import { Resend } from "resend";
import type { InquiryInput } from "./schema";
import { inquirySchema } from "./schema";

export type InquiryFormState =
  | { status: "idle" }
  | { status: "error"; message?: string; fieldErrors?: Partial<Record<keyof InquiryInput, string>> }
  | { status: "success" };

const FROM_EMAIL = "hello@thepoppyestate.com";
const VENUE_RECIPIENTS = ["hello@thepoppyestate.com", "rachel@thepoppyestate.com"];

function formatFieldErrors(
  fieldErrors: Partial<Record<keyof InquiryInput, string[]>>
): Partial<Record<keyof InquiryInput, string>> {
  const formatted: Partial<Record<keyof InquiryInput, string>> = {};
  for (const key of Object.keys(fieldErrors) as (keyof InquiryInput)[]) {
    const messages = fieldErrors[key];
    if (messages && messages.length > 0) {
      formatted[key] = messages[0];
    }
  }
  return formatted;
}

function venueNotificationHtml(data: InquiryInput): string {
  const rows: [string, string | undefined][] = [
    ["Name", `${data.firstName} ${data.lastName}`],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Event Name", data.eventName],
    ["Event Date", data.eventDate],
    ["Number of Guests", data.guestCount],
    ["How they heard about us", data.hearAboutUs],
    ["Message", data.message],
  ];
  const rowsHtml = rows
    .filter(([, value]) => value)
    .map(([label, value]) => `<p><strong>${label}:</strong> ${value}</p>`)
    .join("\n");
  return `<h2>New inquiry from ${data.firstName} ${data.lastName}</h2>\n${rowsHtml}`;
}

function guestConfirmationHtml(data: InquiryInput): string {
  return `
    <p>Hi ${data.firstName},</p>
    <p>Thank you for reaching out to The Poppy Estate. We've received your inquiry and will be in touch soon.</p>
    <p>Here's what you sent us:</p>
    <p><strong>Event Name:</strong> ${data.eventName || "—"}</p>
    <p><strong>Event Date:</strong> ${data.eventDate || "—"}</p>
    <p><strong>Number of Guests:</strong> ${data.guestCount || "—"}</p>
    <p><strong>Message:</strong> ${data.message || "—"}</p>
    <p>Talk soon,<br />The Poppy Estate</p>
  `;
}

export async function submitInquiry(
  _prevState: InquiryFormState,
  formData: FormData
): Promise<InquiryFormState> {
  const raw = Object.fromEntries(formData);
  const parsed = inquirySchema.safeParse(raw);

  if (!parsed.success) {
    return {
      status: "error",
      fieldErrors: formatFieldErrors(parsed.error.flatten().fieldErrors),
    };
  }

  const data = parsed.data;
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: VENUE_RECIPIENTS,
      subject: `New inquiry from ${data.firstName} ${data.lastName}`,
      html: venueNotificationHtml(data),
    });

    await resend.emails.send({
      from: FROM_EMAIL,
      to: data.email,
      subject: "We received your inquiry",
      html: guestConfirmationHtml(data),
    });
  } catch (error) {
    console.error("Failed to send inquiry emails:", error);
    return {
      status: "error",
      message: "Something went wrong sending your inquiry. Please try again or email us directly.",
    };
  }

  return { status: "success" };
}

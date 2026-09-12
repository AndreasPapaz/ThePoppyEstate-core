"use server";

import { Resend } from "resend";
import type { CareersInquiryInput } from "./schema";
import {
  careersInquirySchema,
  RESUME_ACCEPTED_TYPES,
  RESUME_MAX_SIZE_BYTES,
} from "./schema";

export type CareersFormState =
  | { status: "idle" }
  | {
      status: "error";
      message?: string;
      fieldErrors?: Partial<Record<keyof CareersInquiryInput | "resume", string>>;
    }
  | { status: "success" };

const FROM_EMAIL = "hello@thepoppyestate.com";
const VENUE_RECIPIENTS = ["hello@thepoppyestate.com", "rachel@thepoppyestate.com"];

function formatFieldErrors(
  fieldErrors: Partial<Record<keyof CareersInquiryInput, string[]>>
): Partial<Record<keyof CareersInquiryInput, string>> {
  const formatted: Partial<Record<keyof CareersInquiryInput, string>> = {};
  for (const key of Object.keys(fieldErrors) as (keyof CareersInquiryInput)[]) {
    const messages = fieldErrors[key];
    if (messages && messages.length > 0) {
      formatted[key] = messages[0];
    }
  }
  return formatted;
}

function venueNotificationHtml(data: CareersInquiryInput): string {
  const rows: [string, string | undefined][] = [
    ["Name", data.name],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Position", data.position],
    ["Availability", data.availability],
    ["LinkedIn", data.linkedin],
    ["X Profile", data.xProfile],
    ["Instagram", data.instagram],
    ["Personal Website", data.personalWebsite],
    ["Message", data.message],
  ];
  const rowsHtml = rows
    .filter(([, value]) => value)
    .map(([label, value]) => `<p><strong>${label}:</strong> ${value}</p>`)
    .join("\n");
  return `<h2>New team inquiry from ${data.name}</h2>\n${rowsHtml}`;
}

function applicantConfirmationHtml(data: CareersInquiryInput): string {
  return `
    <p>Hi ${data.name},</p>
    <p>Thank you for your interest in joining the team at The Poppy Estate. We've received your message and will be in touch soon.</p>
    <p>Here's what you sent us:</p>
    <p><strong>Position:</strong> ${data.position || "—"}</p>
    <p><strong>Availability:</strong> ${data.availability || "—"}</p>
    <p><strong>Message:</strong> ${data.message || "—"}</p>
    <p>Talk soon,<br />The Poppy Estate</p>
  `;
}

export async function submitCareersInquiry(
  _prevState: CareersFormState,
  formData: FormData
): Promise<CareersFormState> {
  const raw = Object.fromEntries(formData);
  const parsed = careersInquirySchema.safeParse(raw);

  const resumeEntry = formData.get("resume");
  const resume = resumeEntry instanceof File && resumeEntry.size > 0 ? resumeEntry : undefined;
  let resumeError: string | undefined;
  if (resume) {
    if (resume.size > RESUME_MAX_SIZE_BYTES) {
      resumeError = "Resume must be smaller than 10MB.";
    } else if (resume.type && !RESUME_ACCEPTED_TYPES.includes(resume.type)) {
      resumeError = "Resume must be a PDF or Word document.";
    }
  }

  if (!parsed.success || resumeError) {
    return {
      status: "error",
      fieldErrors: {
        ...(parsed.success ? {} : formatFieldErrors(parsed.error.flatten().fieldErrors)),
        ...(resumeError ? { resume: resumeError } : {}),
      },
    };
  }

  const data = parsed.data;
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const attachments = resume
      ? [
          {
            filename: resume.name,
            content: Buffer.from(await resume.arrayBuffer()),
          },
        ]
      : undefined;

    await resend.emails.send({
      from: FROM_EMAIL,
      to: VENUE_RECIPIENTS,
      subject: `New team inquiry from ${data.name}`,
      html: venueNotificationHtml(data),
      attachments,
    });

    await resend.emails.send({
      from: FROM_EMAIL,
      to: data.email,
      subject: "We received your message",
      html: applicantConfirmationHtml(data),
    });
  } catch (error) {
    console.error("Failed to send careers inquiry emails:", error);
    return {
      status: "error",
      message: "Something went wrong sending your message. Please try again or email us directly.",
    };
  }

  return { status: "success" };
}

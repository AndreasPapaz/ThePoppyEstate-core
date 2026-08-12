# Inquire (Contact) Form Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Wire `src/components/ContactView.tsx`'s inquire/contact form so a submission is validated, emails the venue (`hello@thepoppyestate.com`, `rachel@thepoppyestate.com`), emails a confirmation to the submitter, and shows pending/success/error UI — replacing today's no-op `preventDefault()`-only handler.

**Architecture:** A React Server Action (`'use server'`) in `src/app/contact/actions.ts` receives the form's `FormData`, validates it with `zod`, and sends two emails via the `resend` SDK. `ContactView.tsx` becomes a controlled consumer of that action via React's `useActionState`, rendering field errors, a pending state, and a success message.

**Tech Stack:** Next.js 16.2 App Router Server Actions, React 19 `useActionState`, `zod` (new dependency), `resend` (new dependency).

## Global Constraints

- From address for both emails: `hello@thepoppyestate.com`
- Venue notification recipients: `hello@thepoppyestate.com` and `rachel@thepoppyestate.com`
- Guest confirmation recipient: the email address submitted in the form
- `RESEND_API_KEY` is already present in `.env.local` (added by the user) — do not read, write, or otherwise touch any `.env*` file; local tooling permissions block it and it's out of scope
- No automated test framework exists in this repo (no jest/vitest configured) — verification is `tsc --noEmit` plus manual browser testing through the dev server, per the approved spec at `docs/superpowers/specs/2026-08-08-inquire-form-design.md`
- Out of scope: spam/bot protection, persisting submissions to Sanity or any DB

---

### Task 1: Install dependencies and define the validation schema

**Files:**
- Modify: `package.json`, `package-lock.json` (via `npm install`)
- Create: `src/app/contact/schema.ts`

**Interfaces:**
- Produces: `inquirySchema` (zod schema), `InquiryInput` (TS type inferred from it), `hearAboutUsOptions: readonly string[]` — all exported from `src/app/contact/schema.ts`. Task 2 and Task 3 both import from here (Task 3 currently has its own local copy of `hearAboutUsOptions` in `ContactView.tsx` that must be replaced with this one, so the options list has a single source of truth).

- [ ] **Step 1: Install `resend` and `zod`**

Run: `npm install resend zod`

- [ ] **Step 2: Verify install**

Run: `grep -E '"resend"|"zod"' package.json`
Expected: both lines present, e.g. `"resend": "^...",` and `"zod": "^...",`

- [ ] **Step 3: Create the shared schema file**

Create `src/app/contact/schema.ts`:

```ts
import { z } from "zod";

export const hearAboutUsOptions = [
  "Family/Friend",
  "Facebook",
  "Instagram",
  "Search Engine",
  "The Knot",
  "Here Comes the Guide",
  "Venue Report",
  "Wedding Wire",
] as const;

export const inquirySchema = z.object({
  firstName: z.string().trim().min(1, "First name is required."),
  lastName: z.string().trim().min(1, "Last name is required."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z.string().trim().optional(),
  eventName: z.string().trim().optional(),
  eventDate: z.string().trim().optional(),
  guestCount: z.string().trim().optional(),
  message: z.string().trim().optional(),
  hearAboutUs: z.enum(hearAboutUsOptions, {
    message: "Please select how you heard about us.",
  }),
});

export type InquiryInput = z.infer<typeof inquirySchema>;
```

- [ ] **Step 4: Type-check**

Run: `npx tsc --noEmit -p .`
Expected: no errors

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json src/app/contact/schema.ts
git commit -m "Add resend/zod deps and inquiry form validation schema"
```

---

### Task 2: Server Action that validates and sends both emails

**Files:**
- Create: `src/app/contact/actions.ts`

**Interfaces:**
- Consumes: `inquirySchema`, `InquiryInput` from `src/app/contact/schema.ts` (Task 1)
- Produces: `InquiryFormState` type and `submitInquiry(prevState: InquiryFormState, formData: FormData): Promise<InquiryFormState>`, both exported from `src/app/contact/actions.ts`. Task 3 imports both by these exact names.

`InquiryFormState` shape (used by Task 3 to render UI):
```ts
type InquiryFormState =
  | { status: "idle" }
  | { status: "error"; message?: string; fieldErrors?: Partial<Record<keyof InquiryInput, string>> }
  | { status: "success" };
```

- [ ] **Step 1: Write the server action**

Create `src/app/contact/actions.ts`:

```ts
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
```

- [ ] **Step 2: Type-check**

Run: `npx tsc --noEmit -p .`
Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add src/app/contact/actions.ts
git commit -m "Add server action to validate and send inquiry emails via Resend"
```

---

### Task 3: Wire `ContactView.tsx` to the server action

**Files:**
- Modify: `src/components/ContactView.tsx` (full rewrite of the file's logic; JSX field layout stays the same)

**Interfaces:**
- Consumes: `submitInquiry`, `InquiryFormState` from `src/app/contact/actions.ts` (Task 2); `hearAboutUsOptions` from `src/app/contact/schema.ts` (Task 1)

- [ ] **Step 1: Replace the component**

Replace the full contents of `src/components/ContactView.tsx`:

```tsx
"use client";

import { useActionState } from "react";
import { Container } from "./Container";
import { submitInquiry, type InquiryFormState } from "@/app/contact/actions";
import { hearAboutUsOptions } from "@/app/contact/schema";

const inputClassName =
  "w-full rounded-md border border-gray/30 bg-white px-4 py-3 text-body-small font-seriff text-ground focus:outline-none focus:border-burgundy transition-colors";

const initialState: InquiryFormState = { status: "idle" };

function Field({
  label,
  name,
  type = "text",
  required = false,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-label-medium font-dm-sans text-burgundy mb-2">
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      <input id={name} name={name} type={type} required={required} className={inputClassName} />
      {error && <p className="mt-1 text-label-small font-dm-sans text-burgundy">{error}</p>}
    </div>
  );
}

export function ContactView() {
  const [state, formAction, pending] = useActionState(submitInquiry, initialState);
  const fieldErrors = state.status === "error" ? state.fieldErrors : undefined;

  return (
    <section className="py-16 lg:py-24">
      <Container className="max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-display-2 font-seriff-condensed font-light text-burgundy mb-6">
            We are here to help.
          </h1>
          <p className="text-body font-seriff text-ground">
            Whether you&apos;re interested in booking an event or simply learning more, please
            fill out the contact form below and we&apos;ll reach out! We&apos;re also sure you
            have questions and we&apos;re here to help.
          </p>
        </div>

        {state.status === "success" ? (
          <p className="text-body font-seriff text-burgundy text-center">
            Thanks — we&apos;ve received your inquiry and will be in touch. A confirmation has
            been sent to your email.
          </p>
        ) : (
          <form action={formAction} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Field label="Name" name="firstName" required error={fieldErrors?.firstName} />
            <Field label="Last Name" name="lastName" required error={fieldErrors?.lastName} />
            <Field label="Email" name="email" type="email" required error={fieldErrors?.email} />
            <Field label="Phone" name="phone" type="tel" />
            <Field label="Event Name" name="eventName" />
            <Field label="Event Date" name="eventDate" type="date" />
            <Field label="Number of Guests" name="guestCount" type="number" />

            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-label-medium font-dm-sans text-burgundy mb-2">
                Message
              </label>
              <textarea id="message" name="message" rows={5} className={`${inputClassName} resize-none`} />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="hearAboutUs" className="block text-label-medium font-dm-sans text-burgundy mb-2">
                How did you hear about us <span aria-hidden="true">*</span>
              </label>
              <select
                id="hearAboutUs"
                name="hearAboutUs"
                required
                defaultValue=""
                className={inputClassName}
              >
                <option value="" disabled>
                  Select an option
                </option>
                {hearAboutUsOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {fieldErrors?.hearAboutUs && (
                <p className="mt-1 text-label-small font-dm-sans text-burgundy">
                  {fieldErrors.hearAboutUs}
                </p>
              )}
            </div>

            {state.status === "error" && state.message && (
              <p className="md:col-span-2 text-label-small font-dm-sans text-burgundy text-center">
                {state.message}
              </p>
            )}

            <div className="md:col-span-2 text-center mt-4">
              <button
                type="submit"
                disabled={pending}
                className="inline-block text-label-medium font-dm-sans text-white bg-burgundy hover:bg-pink rounded-full px-10 py-3 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {pending ? "Submitting…" : "Submit"}
              </button>
            </div>
          </form>
        )}
      </Container>
    </section>
  );
}
```

- [ ] **Step 2: Type-check**

Run: `npx tsc --noEmit -p .`
Expected: no errors

- [ ] **Step 3: Lint**

Run: `npm run lint`
Expected: no errors

- [ ] **Step 4: Commit**

```bash
git add src/components/ContactView.tsx
git commit -m "Wire ContactView to the inquiry server action with pending/success/error UI"
```

---

### Task 4: Manual end-to-end verification

**Files:** none (verification only)

- [ ] **Step 1: Start the dev server**

Run: `npm run dev`

- [ ] **Step 2: Test validation errors**

In a browser, go to `/contact`. Leave "Name" blank, fill "How did you hear about us", and submit.
Expected: Native HTML5 `required` blocks submission on `firstName` first (browser tooltip). Fill first/last name and email with an invalid value like `notanemail`, submit.
Expected: browser's native `type="email"` validation blocks submission with its own tooltip (this happens before the server action runs, since the `required`/`type` attributes are unchanged).

- [ ] **Step 3: Bypass native validation to confirm server-side validation works**

In the browser devtools, remove the `required` attribute from the `hearAboutUs` select (Elements panel), leave it unselected, fill in valid first name/last name/email, and submit.
Expected: page shows the general error area is not needed here — instead confirm the request completes and no email is sent (check Resend dashboard logs show no new email), and no unhandled exception appears in the terminal running `npm run dev`.

- [ ] **Step 4: Submit a fully valid inquiry with a real, checkable email address**

Fill out every field with valid data, using an email address you can check, and submit.
Expected:
- Button shows "Submitting…" and is disabled briefly
- Page replaces the form with the "Thanks — we've received your inquiry..." message
- Within a minute, `hello@thepoppyestate.com` and `rachel@thepoppyestate.com` each have a new email with subject `New inquiry from {firstName} {lastName}` and the submitted details
- The address used in the "Email" field receives a "We received your inquiry" confirmation email

- [ ] **Step 5: Check the Resend dashboard**

In the Resend dashboard's Logs/Emails view, confirm both sends from step 4 show status "Delivered" (or at least "Sent" if delivery lag).
Expected: no "Failed" or "Bounced" entries. If a send failed, read the error reason shown there (common causes: from-address domain not fully verified yet, or a typo in the recipient) and fix before considering this task done.

- [ ] **Step 6: Final full type-check**

Run: `npx tsc --noEmit -p .`
Expected: no errors

---

## Post-plan note

No commit for Task 4 — it's verification only. If Step 5 surfaces a delivery problem, fix it in a small follow-up commit (e.g., correcting the from-address) before considering this plan complete.

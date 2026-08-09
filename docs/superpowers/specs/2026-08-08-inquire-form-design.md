# Inquire (Contact) Form — Design

## Problem

The `/contact` page (`src/components/ContactView.tsx`), linked from the site's "Inquire" nav CTA, renders a full contact form but its submit handler is a no-op:

```tsx
function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
}
```

No data is collected, validated, or sent anywhere. Visitors filling it out get no confirmation and their inquiry is silently discarded.

## Goal

Wire the form so a submission:
1. Is validated (required fields, email format)
2. Sends an email notification to the venue
3. Sends a confirmation email to the person who submitted it
4. Shows the visitor clear pending / success / error states in the UI

## Delivery details (confirmed with stakeholder)

- **Email provider:** Resend (API key already provisioned by the user, added directly to `.env.local`, not touched by this design or committed to git — `.env*` is gitignored)
- **Sending domain:** `thepoppyestate.com`, verified in Resend by the user
- **From address:** `hello@thepoppyestate.com` for both emails
- **Venue notification recipients:** `hello@thepoppyestate.com`, `rachel@thepoppyestate.com`
- **Guest confirmation:** sent to the email address entered in the form
- **Out of scope (YAGNI):** spam/bot protection (honeypot, rate limiting), persisting submissions anywhere for record-keeping (e.g. Sanity) — email-only per stakeholder choice. Can be added later as a separate piece of work if needed.

## Architecture

This Next.js version's own docs (`node_modules/next/dist/docs/01-app/02-guides/forms.md`) recommend React Server Actions as the idiomatic way to handle form submissions — a `'use server'` function invoked directly via the `<form>`'s `action` prop, paired with `useActionState` for pending/result UI. This avoids a separate API route + manual `fetch`/JSON plumbing, works with progressive enhancement, and matches the pattern this codebase's reference docs point to.

**New dependencies:**
- `resend` — official Resend SDK
- `zod` — server-side validation, per the same Next.js docs guide's recommendation

**New file: `src/app/contact/actions.ts`**

```ts
'use server'
```

Exports `submitInquiry(prevState, formData)`:
1. Parses `formData` into a plain object (`Object.fromEntries`)
2. Validates with a zod schema matching the form fields (see below)
3. On validation failure: returns `{ status: 'error', fieldErrors }` (no email sent)
4. On success:
   - Sends venue notification email via Resend (`to: ["hello@thepoppyestate.com", "rachel@thepoppyestate.com"]`, subject `New inquiry from {firstName} {lastName}`, body listing all submitted fields)
   - Sends guest confirmation email via Resend (`to: [submitted email]`, subject like `We received your inquiry`, short thank-you body restating key details)
   - If the Resend call throws: catches it, returns `{ status: 'error', message: 'Something went wrong, please try again or email us directly.' }`, logs the error server-side with `console.error`
   - On success: returns `{ status: 'success' }`

**Validation schema (zod), matching current form fields:**

| Field | Rule |
|---|---|
| `firstName` | required, non-empty string |
| `lastName` | required, non-empty string |
| `email` | required, valid email |
| `phone` | optional string |
| `eventName` | optional string |
| `eventDate` | optional string |
| `guestCount` | optional, numeric string |
| `message` | optional string |
| `hearAboutUs` | required, one of the existing `hearAboutUsOptions` list |

**`ContactView.tsx` changes:**
- Replace the manual `handleSubmit`/`onSubmit` with `const [state, formAction] = useActionState(submitInquiry, initialState)` and `<form action={formAction}>`
- Add a `SubmitButton` (or inline `useFormStatus`) that disables and reads "Submitting…" while pending
- On `state.status === 'success'`: replace the form with a confirmation message ("Thanks — we've received your inquiry and will be in touch. A confirmation has been sent to your email.")
- On `state.status === 'error'`:
  - If `fieldErrors` present, show per-field messages under the relevant inputs
  - Otherwise show a general error message near the submit button
- Existing native HTML `required`/`type` attributes stay as first-line client-side validation (unchanged); zod is the authoritative server-side check

## Data flow

```
Visitor fills form → clicks Submit
  → Server Action `submitInquiry` runs on server with FormData
    → zod validates
      → invalid: return field errors → ContactView renders them, no email sent
      → valid:
        → Resend: send venue notification (2 recipients)
        → Resend: send guest confirmation (1 recipient)
        → success: return success → ContactView shows confirmation message
        → Resend error: return generic error → ContactView shows retry message, logged server-side
```

## Testing plan

- Type-check (`tsc --noEmit`) after implementation
- Manual test in dev server (`npm run dev`), in browser:
  - Submit with required fields missing → see field-level errors, no email sent
  - Submit with a valid, real email address → verify both emails actually arrive via Resend (venue notification at `hello@`/`rachel@`, confirmation at the test address used)
  - Confirm pending state shows while submitting and success message replaces the form afterward
- No automated test suite exists in this repo currently for components; not adding one here (out of scope, consistent with rest of the codebase)

## Env vars

- `RESEND_API_KEY` — already added to `.env.local` by the user, not touched by this work. Local tooling permissions block reading/writing any `.env*` file directly, so this implementation will not touch those files; the user manages them.

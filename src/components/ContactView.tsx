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
            <Field label="Phone" name="phone" type="tel" required error={fieldErrors?.phone} />
            <Field label="Event Name" name="eventName" required error={fieldErrors?.eventName} />
            <Field label="Event Date" name="eventDate" type="date" required error={fieldErrors?.eventDate} />
            <Field
              label="Number of Guests"
              name="guestCount"
              type="number"
              required
              error={fieldErrors?.guestCount}
            />

            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-label-medium font-dm-sans text-burgundy mb-2">
                Message <span aria-hidden="true">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className={`${inputClassName} resize-none`}
              />
              {fieldErrors?.message && (
                <p className="mt-1 text-label-small font-dm-sans text-burgundy">
                  {fieldErrors.message}
                </p>
              )}
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

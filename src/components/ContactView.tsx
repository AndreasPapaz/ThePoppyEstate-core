"use client";

import { useActionState, useRef, useSyncExternalStore } from "react";
import Image from "next/image";
import { Container } from "./Container";
import { submitInquiry, type InquiryFormState } from "@/app/contact/actions";
import { hearAboutUsOptions } from "@/app/contact/schema";
import {
  FORM_NAME_FIELD,
  HONEYPOT_FIELD,
  RENDERED_AT_FIELD,
} from "@/lib/bot-protection";

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

function emptySubscribe() {
  return () => {};
}

function useFormRenderedAt() {
  const valueRef = useRef("");
  return useSyncExternalStore(
    emptySubscribe,
    () => {
      if (!valueRef.current) {
        valueRef.current = String(Date.now());
      }
      return valueRef.current;
    },
    () => ""
  );
}

function HoneypotField() {
  return (
    <div className="hp-field" aria-hidden="true">
      <label htmlFor={HONEYPOT_FIELD}>Company website</label>
      <input
        id={HONEYPOT_FIELD}
        name={HONEYPOT_FIELD}
        type="text"
        tabIndex={-1}
        autoComplete="off"
        defaultValue=""
      />
    </div>
  );
}

export function ContactView({
  introNote,
  images,
  formName = "contact",
}: {
  introNote?: string;
  images?: { src: string; alt: string }[];
  formName?: string;
}) {
  const [state, formAction, pending] = useActionState(submitInquiry, initialState);
  const renderedAt = useFormRenderedAt();
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
          {introNote && (
            <p className="text-body font-seriff text-burgundy mt-4">{introNote}</p>
          )}
        </div>
      </Container>

      {images && images.length > 0 && (
        <Container className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {images.map((image) => (
              <div key={image.src} className="relative aspect-[4/3] rounded-md overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
            ))}
          </div>
        </Container>
      )}

      <Container className="max-w-3xl">
        {state.status === "success" ? (
          <p className="text-body font-seriff text-burgundy text-center">
            Thanks — we&apos;ve received your inquiry and will be in touch. A confirmation has
            been sent to your email.
          </p>
        ) : (
          <form action={formAction} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <HoneypotField />
            <input type="hidden" name={FORM_NAME_FIELD} value={formName} />
            <input type="hidden" name={RENDERED_AT_FIELD} value={renderedAt} />
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
            <Field label="Promo Code" name="promoCode" error={fieldErrors?.promoCode} />

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

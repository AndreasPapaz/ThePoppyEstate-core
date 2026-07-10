"use client";

import type { FormEvent } from "react";
import { Container } from "./Container";

const hearAboutUsOptions = [
  "Family/Friend",
  "Facebook",
  "Instagram",
  "Search Engine",
  "The Knot",
  "Here Comes the Guide",
  "Venue Report",
  "Wedding Wire",
];

const inputClassName =
  "w-full rounded-md border border-gray/30 bg-white px-4 py-3 text-body-small font-seriff text-ground focus:outline-none focus:border-burgundy transition-colors";

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-label-medium font-dm-sans text-burgundy mb-2">
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      <input id={name} name={name} type={type} required={required} className={inputClassName} />
    </div>
  );
}

export function ContactView() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

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

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field label="Name" name="firstName" required />
          <Field label="Last Name" name="lastName" required />
          <Field label="Email" name="email" type="email" required />
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
          </div>

          <div className="md:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="inline-block text-label-medium font-dm-sans text-white bg-burgundy hover:bg-gold rounded-full px-10 py-3 transition-colors cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
}

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
  phone: z.string().trim().min(1, "Phone is required."),
  eventName: z.string().trim().min(1, "Event name is required."),
  eventDate: z.string().trim().min(1, "Event date is required."),
  guestCount: z.string().trim().min(1, "Number of guests is required."),
  message: z.string().trim().min(1, "Message is required."),
  hearAboutUs: z.enum(hearAboutUsOptions, {
    message: "Please select how you heard about us.",
  }),
});

export type InquiryInput = z.infer<typeof inquirySchema>;

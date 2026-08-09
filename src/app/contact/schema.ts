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

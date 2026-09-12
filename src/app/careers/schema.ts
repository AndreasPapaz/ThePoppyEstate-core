import { z } from "zod";

export const careersInquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z.string().trim().min(1, "Phone is required."),
  position: z.string().trim().min(1, "Position is required."),
  availability: z.string().trim().min(1, "Availability is required."),
  message: z.string().trim().min(1, "Message is required."),
  linkedin: z.string().trim().optional(),
  xProfile: z.string().trim().optional(),
  instagram: z.string().trim().optional(),
  personalWebsite: z.string().trim().optional(),
});

export type CareersInquiryInput = z.infer<typeof careersInquirySchema>;

export const RESUME_MAX_SIZE_BYTES = 10 * 1024 * 1024;
export const RESUME_ACCEPTED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
export const RESUME_ACCEPT_ATTR = ".pdf,.doc,.docx";

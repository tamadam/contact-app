import { z } from "zod";

export const contactFormSchema = z.object({
    name: z.string().min(1, "Please provide your name"),
    phone: z.string().min(6, "Please provide a valid phone number"),
    email: z
      .string()
      .min(1, "Please provide your email address")
      .email("Please provide a valid email address"),
  });
  
export type ContactFormFields = z.infer<typeof contactFormSchema>;

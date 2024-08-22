import { z } from "zod";

const MEGABYTE_SIZE = 2;
const MAX_UPLOAD_SIZE = 1024 * 1024 * MEGABYTE_SIZE;
const ACCEPTED_FILE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const contactFormSchema = z.object({
    name: z.string().min(1, "Please provide your name"),
    phone: z.string().min(6, "Please provide a valid phone number"),
    email: z
      .string()
      .min(1, "Please provide your email address")
      .email("Please provide a valid email address"),
    imageUrl: typeof window === "undefined"
    ? z.string().optional().nullable()
    : z.instanceof(FileList).optional()
        .refine((file) => {
        if (file?.item?.(0)?.type === undefined) return true;
        const fileType = file.item?.(0)?.type || "";
        return ACCEPTED_FILE_TYPES.includes(fileType);
        }, "File must be .jpg, .jpeg, .png or .webp format")
        .refine((file) => {
        if (file?.item?.(0)?.type === undefined) return true;
        const fileSize = file.item?.(0)?.size || 0;
        return fileSize < MAX_UPLOAD_SIZE;
        }, `File size must be less than ${MEGABYTE_SIZE}MB`)
  });
  
export type ContactFormFields = z.infer<typeof contactFormSchema>;

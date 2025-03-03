import { z } from "zod";

export const formSchema = z.object({
  email: z
    .string({ message: "Email must be required" })
    .email({ message: "Invalid email address" }),
  password: z.string({ message: "Password must be required" }).min(6, {message: 'Password must be at least 6 characters long'}), 
});

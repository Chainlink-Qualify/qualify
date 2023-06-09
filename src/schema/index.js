import { z } from "zod";

export const signUpSchema = z.object({
    fullname: z
        .string()
        .min(3, { message: "Username should be atleast 3 characters" })
        .max(25, { message: "Username should not be more than 25 characters" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
        .string()
        .min(8, { message: "Password should atleast be 8 letters" }),
})
    


export const signInSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z
        .string()
        .min(6, { message: "Password should atleast be 6 letters" }),
});

export const forgotPasswordEmailSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
});

export const restPasswordSchema = z.object({
    password: z
        .string()
        .min(8, { message: "Password should atleast be 8 letters" }),
    confirmPassword: z
        .string()
        .min(8, { message: "Password should atleast be 8 letters" }),
});

export const emailOtpSchema = z.object({
    otp: z.string().min(4)
})







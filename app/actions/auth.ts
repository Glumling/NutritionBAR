"use server"

import { z } from "zod"

const userSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  preferences: z.object({
    dailyVerses: z.boolean().default(false),
    promotions: z.boolean().default(false),
    orderUpdates: z.boolean().default(false),
  }),
})

export async function createAccount(prevState: any, formData: FormData) {
  try {
    const validatedFields = userSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      password: formData.get("password"),
      preferences: {
        dailyVerses: formData.get("dailyVerses") === "true",
        promotions: formData.get("promotions") === "true",
        orderUpdates: formData.get("orderUpdates") === "true",
      },
    })

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Here you would typically:
    // 1. Hash the password
    // 2. Save to your database
    // 3. Send welcome email
    // 4. Create session

    return {
      success: true,
      message: "Account created successfully!",
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: error.errors[0].message,
      }
    }

    return {
      success: false,
      message: "Something went wrong. Please try again.",
    }
  }
}


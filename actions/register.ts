"use server";

import * as z from "zod";
import bycrpt from "bcryptjs";

import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid input" };
  };

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bycrpt.hash(password, 10);


  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email is taken" };
  };

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    }
  });

  const verificationToken = await generateVerificationToken(email);

  // TODO: Send a verification email here

  return { success: "Confirmation email sent." };
};
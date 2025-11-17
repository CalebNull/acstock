"use server";

import * as z from "zod";
import bycrpt from "bcryptjs";

import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";

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

  // TODO: Send a varification email here

  return { success: "User created!" };
};
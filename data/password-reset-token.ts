import { db } from "@/lib/db";

export const getPasswordResetTokenByToken = async (token: string) => {
  try {
    const passwordToken = await db.passwordResetToken
  } catch {
    return null;
  }
};
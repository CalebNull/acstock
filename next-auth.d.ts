import { UserRole } from "./lib/generated/prisma";
import NextAuth, { type DefaultSession } from "next-auth";

/**
 * Extends interface to include role
 */
export type ExtendedUser = DefaultSession["user"] & {
  role: UserRole;
  emailVerified: Date | null;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}

import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    role?: UserRole;
    emailVerified?: Date | null;
  }
}
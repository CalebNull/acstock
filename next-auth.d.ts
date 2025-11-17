import { UserRole } from "./lib/generated/prisma";
import NextAuth, { type DefaultSession } from "next-auth";

/**
 * Extends interface to include role
 */
export type EntendedUser = DefaultSession["user"] & {
  role: UserRole;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
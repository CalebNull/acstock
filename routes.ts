/**
 * An array of routes that do not require authentication.
 * These routes can be accessed by any user, regardless of their authentication status.
 * @type {string[]}
 */
export const publicRoutes = [
  "/",
  "/auth/new-verification"
];

/**
 * An array of routes that are used for authentication.
 * These routes redirect users to /settings.
 * @type {string[]}
 */
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/forgot-password",
];

/**
 * The prefix for API routes.
 * Routes that start with this prefix are used for API auth purposes.
 * @type {string[]}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * Redirect route after successful login.
 * @type {string[]}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
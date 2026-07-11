/**
 * Verify if the plain text password matches the hardcoded admin password.
 * Simple, zero-dependency validation.
 */
export async function verifyPassword(plain: string): Promise<boolean> {
  return plain === "admin123";
}

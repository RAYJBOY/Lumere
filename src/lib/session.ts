import { prisma } from "./prisma";
import crypto from "crypto";

export async function createUserSession(userId: string, ttlDays = 7) {
  // Generate random token (256 bits)
  const token = crypto.randomBytes(32).toString("hex");

  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + ttlDays);

  // Store in DB
  await prisma.session.create({
    data: {
      userId,
      token,
      expiresAt,
    },
  });

  return { token, expiresAt };
}

export async function getUserFromSession(token: string) {
  const session = await prisma.session.findUnique({
    where: { token },
    include: { user: true },
  });

  if (!session || session.expiresAt < new Date()) {
    return null;
  }

  // Hide password hash before returning
  const { password, ...safeUser } = session.user;
  return safeUser;
}

export async function deleteSession(token: string) {
  await prisma.session.delete({ where: { token } }).catch(() => {});
}

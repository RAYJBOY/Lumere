import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { transporter } from "@/lib/mailer";
import crypto from "crypto";

export const POST = async (req: NextRequest) => {
  const { email } = await req.json();
  const userInDb = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!userInDb) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  // Generate a reset token
  const token = crypto.randomBytes(32).toString("hex");

  // Hash it before storing
  const tokenHash = crypto.createHash("sha256").update(token).digest("hex");

  // Expiry 1 hour from now
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000);

  const resetUrl = `${process.env.PUBLIC_APP_URL}/reset-password?token=${token}`;

  try {
    await prisma.passwordResetToken.create({
      data: {
        userId: userInDb.id,
        tokenHash,
        expiresAt,
      },
    });

    await transporter.sendMail({
      from: `"Support" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Password Reset Request",
      text: `Click the following link to reset your password: ${resetUrl}`,
      html: `<p>You requested a password reset.</p>
             <p><a href="${resetUrl}">Click here to reset your password</a></p>`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Forgot password email error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
};

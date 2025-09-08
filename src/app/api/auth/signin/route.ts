import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { createUserSession } from "@/lib/session";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // Create session in DB
    const { token, expiresAt } = await createUserSession(user.id);

    // Store token in secure HTTP-only cookie
    const response = NextResponse.json({ message: "Signed in successfully" });
    response.cookies.set("session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      expires: expiresAt,
    });

    return response;
  } catch (error) {
    console.error("Sign-in error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

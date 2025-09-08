import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { createUserSession } from "@/lib/session";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    // Check if email and password are provided
    if (!email || !password) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Check if user already exists
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Save user
    const newUser = await prisma.user.create({
      data: { email, password: hashedPassword },
    });

    // Create user session
    const { token, expiresAt } = await createUserSession(newUser.id);

    const res = NextResponse.json({ message: "User created" }, { status: 201 });
    res.cookies.set("session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      expires: expiresAt,
    });

    return res;
  } catch (err) {
    console.error("SignUp error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    // Basic validation (you should also hash passwords!)
    if (!email || !password) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Example: check if user exists
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    console.log("Creating user", email);

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Save user
    const newUser = await prisma.user.create({
      data: { email, password: hashedPassword },
    });

    return NextResponse.json({ user: newUser }, { status: 201 });
  } catch (err) {
    console.error("SignUp error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

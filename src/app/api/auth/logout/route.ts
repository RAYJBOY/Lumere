import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    // Extract token from cookies
    const cookieHeader = req.headers.get("cookie");
    const token = cookieHeader
      ?.split(";")
      .map((c) => c.trim())
      .find((c) => c.startsWith("session="))
      ?.split("=")[1];

    if (token) {
      // Delete the session from DB (ignore if not found)
      await prisma.session.delete({ where: { token } }).catch(() => {
        console.warn("Session not found for token:", token);
      });
    }

    // Clear the cookie
    const res = NextResponse.json({ message: "Logged out successfully" });
    res.cookies.set("session", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      expires: new Date(0), // expire immediately
    });

    return res;
  } catch (err) {
    console.error("Logout error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

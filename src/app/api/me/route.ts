import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getUserFromSession } from "@/lib/session";

export async function GET() {
  const token = (await cookies()).get("session")?.value;
  if (!token) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  const user = await getUserFromSession(token);
  if (!user) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  return NextResponse.json({ user });
}

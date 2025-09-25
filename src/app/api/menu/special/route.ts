import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET all special items from the menu
export async function GET() {
  try {
    const specials = await prisma.menu.findMany({
      where: { isSpecial: true },
    });

    return NextResponse.json(specials, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch special items:", error);
    return NextResponse.json(
      { error: "Failed to fetch special items" },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // adjust import if needed

// GET all menu items
export async function GET() {
  const menuItems = await prisma.menu.findMany();
  return NextResponse.json(menuItems);
}

// PATCH to toggle isSpecial and change price
export async function PATCH(req: NextRequest) {
  const { id, price, isSpecial } = await req.json();

  if (!id) {
    return NextResponse.json(
      { error: "Missing menu item ID" },
      { status: 400 }
    );
  }

  const dataToUpdate: { price?: number; isSpecial?: boolean } = {};

  if (price !== undefined) dataToUpdate.price = Number(price);
  if (typeof isSpecial === "boolean") dataToUpdate.isSpecial = isSpecial;

  if (Object.keys(dataToUpdate).length === 0) {
    return NextResponse.json({ error: "Nothing to update" }, { status: 400 });
  }

  try {
    const updated = await prisma.menu.update({
      where: { id },
      data: dataToUpdate,
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("Failed to update menu item:", error);
    return NextResponse.json(
      { error: "Failed to update menu item" },
      { status: 500 }
    );
  }
}

// POST to add new items
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, price, category, imageUrl, description } = body;

    if (!name || price === undefined || !category || !imageUrl) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const newItem = await prisma.menu.create({
      data: {
        name,
        price: Number(price),
        category,
        isSpecial: false, // default to not special
        imageUrl,
        description,
      },
    });

    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    console.error("Failed to create menu item:", error);
    return NextResponse.json(
      { error: "Failed to create menu item" },
      { status: 500 }
    );
  }
}

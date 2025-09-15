import { prisma } from "@/lib/prisma";

export const getMenuItems = async () => {
  try {
    return await prisma.menu.findMany();
  } catch (e) {
    console.error("Error fetching menu items:", e);
    return [];
  }
};

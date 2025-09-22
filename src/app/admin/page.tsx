"use client";

import { MenuItemCategory } from "@/types/menu";
import { useEffect, useState } from "react";
import MenuItemRow from "./MenuItemRow";
import AddMenuItemForm from "./AddMenuItemForm";

interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: MenuItemCategory;
  isSpecial: boolean;
}

export default function AdminDashboard() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch menu items on mount
  useEffect(() => {
    fetch("/api/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenuItems(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="p-4">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 pt-20">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard – Manage Menu</h1>

      {/* Add New Item */}
      <AddMenuItemForm setMenuItems={setMenuItems} />

      {/* Menu Items */}
      <ul className="space-y-4 mt-6">
        {menuItems.map((item) => (
          <MenuItemRow
            key={item.id}
            item={item}
            menuItems={menuItems}
            setMenuItems={setMenuItems}
          />
        ))}
      </ul>
    </div>
  );
}

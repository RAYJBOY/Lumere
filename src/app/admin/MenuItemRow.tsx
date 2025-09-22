"use client";

import { MenuItemCategory } from "@/types/menu";

interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: MenuItemCategory;
  isSpecial: boolean;
}

interface MenuItemRowProps {
  item: MenuItem;
  menuItems: MenuItem[];
  setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>>;
}

export default function MenuItemRow({
  item,
  menuItems,
  setMenuItems,
}: MenuItemRowProps) {
  // Toggle isSpecial
  const handleToggleSpecial = async () => {
    const updated = { ...item, isSpecial: !item.isSpecial };
    setMenuItems(menuItems.map((m) => (m.id === item.id ? updated : m)));

    await fetch("/api/menu", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: item.id, isSpecial: updated.isSpecial }),
    });
  };

  // Change price
  const handlePriceChange = async (newPrice: number) => {
    const updated = { ...item, price: newPrice };
    setMenuItems(menuItems.map((m) => (m.id === item.id ? updated : m)));

    await fetch("/api/menu", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: item.id, price: newPrice }),
    });
  };

  // Remove item
  const handleRemoveItem = async () => {
    setMenuItems(menuItems.filter((m) => m.id !== item.id));
    await fetch(`/api/menu/${item.id}`, { method: "DELETE" });
  };

  return (
    <li className="flex flex-col md:flex-row justify-between md:items-center border rounded-lg p-4 shadow-sm gap-2">
      {/* Name column */}
      <span className="font-medium truncate md:flex-1">{item.name}</span>

      {/* Controls container */}
      <div className="flex flex-wrap md:flex-nowrap items-center gap-2 md:gap-4 w-full md:w-auto">
        {/* Price input - responsive width */}
        <input
          type="number"
          value={item.price === 0 ? "" : item.price}
          min={0}
          onChange={(e) => {
            const value = e.target.value;
            if (value === "") {
              handlePriceChange(0);
            } else {
              const numberValue = Number(value);
              if (numberValue >= 0) handlePriceChange(numberValue);
            }
          }}
          className="border p-1 rounded w-24 md:w-20 text-right flex-shrink-0"
        />

        {/* Toggle isSpecial with fixed label width on desktop */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={handleToggleSpecial}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none ${
              item.isSpecial ? "bg-[var(--hover-color)]" : "bg-gray-300"
            }`}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform duration-300 ${
                item.isSpecial ? "translate-x-5" : "translate-x-1"
              }`}
            />
          </button>
          <span className="text-sm font-medium whitespace-nowrap w-20 md:w-20">
            {item.isSpecial ? "Special" : "Not Special"}
          </span>
        </div>

        {/* Remove button */}
        <button
          onClick={handleRemoveItem}
          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 flex-shrink-0"
        >
          Remove
        </button>
      </div>
    </li>
  );
}

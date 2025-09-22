"use client";

import { MenuItemCategory } from "@/types/menu";
import { useState } from "react";

interface AddMenuItemFormProps {
  setMenuItems: React.Dispatch<React.SetStateAction<any[]>>;
}

export default function AddMenuItemForm({
  setMenuItems,
}: AddMenuItemFormProps) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [category, setCategory] = useState<MenuItemCategory>(
    MenuItemCategory.BREAKFAST
  );
  const [description, setDescription] = useState(""); // new description field
  const [imageUrl, setImageUrl] = useState(""); // new image URL field

  const handleAddItem = async () => {
    const res = await fetch("/api/menu", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, price, category, description, imageUrl }),
    });

    if (res.ok) {
      const newItem = await res.json();
      setMenuItems((prev) => [...prev, newItem]);
      setName("");
      setPrice(0);
      setDescription("");
      setImageUrl("");
    }
  };

  return (
    <div className="mb-6 border p-4 rounded-lg shadow-sm flex flex-col gap-2">
      <h2 className="font-semibold">Add New Item</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded"
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        className="border p-2 rounded"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value as MenuItemCategory)}
        className="border p-2 rounded"
      >
        <option value={MenuItemCategory.BREAKFAST}>
          {MenuItemCategory.BREAKFAST}
        </option>
        <option value={MenuItemCategory.LUNCH}>{MenuItemCategory.LUNCH}</option>
        <option value={MenuItemCategory.HOT_BEVERAGE}>
          {MenuItemCategory.HOT_BEVERAGE}
        </option>
        <option value={MenuItemCategory.COLD_BEVERAGE}>
          {MenuItemCategory.COLD_BEVERAGE}
        </option>
        <option value={MenuItemCategory.DESSERT}>
          {MenuItemCategory.DESSERT}
        </option>
        <option value={MenuItemCategory.DRINK}>{MenuItemCategory.DRINK}</option>
        <option value={MenuItemCategory.EXTRA}>{MenuItemCategory.EXTRA}</option>
        <option value={MenuItemCategory.LUMERE_SPECIAL}>
          {MenuItemCategory.LUMERE_SPECIAL}
        </option>
        <option value={MenuItemCategory.LUMERE_FLORAL_SPECIALS}>
          {MenuItemCategory.LUMERE_FLORAL_SPECIALS}
        </option>
      </select>

      {/* New description field */}
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 rounded resize-none"
      />

      {/* New image URL field */}
      <input
        type="text"
        placeholder="/images/NAME_OF_IMAGE.png"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        className="border p-2 rounded"
      />

      <button
        onClick={handleAddItem}
        className="bg-[var(--hover-color)] text-white px-4 py-2 rounded hover:opacity-90"
      >
        Add Item
      </button>
    </div>
  );
}

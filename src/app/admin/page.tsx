"use client";

import { MenuItemCategory } from "@/types/menu";
import { useEffect, useState, useMemo } from "react";
import MenuItemRow from "./MenuItemRow";
import AddMenuItemForm from "./AddMenuItemForm";

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: MenuItemCategory;
  isSpecial: boolean;
  description?: string;
  imageUrl?: string;
  deleted?: boolean;
}

export default function AdminDashboard() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [draftMenuItems, setDraftMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch menu items on mount
  useEffect(() => {
    fetch("/api/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenuItems(data);
        setDraftMenuItems(data); // start draft from original
        setLoading(false);
      });
  }, []);

  // Compare arrays deeply
  const isDirty = useMemo(() => {
    return JSON.stringify(menuItems) !== JSON.stringify(draftMenuItems);
  }, [menuItems, draftMenuItems]);

  const handleSaveChanges = async () => {
    const changes: Promise<any>[] = [];

    // Handle updates
    draftMenuItems.forEach((draft, idx) => {
      const original = menuItems[idx];

      if (draft.deleted) {
        // Send DELETE
        changes.push(
          fetch("/api/menu", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: draft.id }),
          })
        );
      } else if (
        !original ||
        JSON.stringify(draft) !== JSON.stringify(original)
      ) {
        // Send PATCH
        changes.push(
          fetch("/api/menu", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(draft),
          })
        );
      }
    });

    if (changes.length === 0) return;

    await Promise.all(changes);

    // Refresh state from server or filter out deleted
    setMenuItems(draftMenuItems.filter((i) => !i.deleted));
    setDraftMenuItems(draftMenuItems.filter((i) => !i.deleted));

    alert("Changes saved!");
  };

  const handleCancelChanges = () => {
    setDraftMenuItems(menuItems); // revert edits
  };

  if (loading) return <p className="p-4">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 pt-20">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard – Manage Menu</h1>

      <AddMenuItemForm setMenuItems={setDraftMenuItems} />

      <ul className="space-y-4 mt-6">
        {draftMenuItems
          .filter((item) => !item.deleted)
          .map((item) => (
            <MenuItemRow
              key={item.id}
              item={item}
              menuItems={draftMenuItems}
              setMenuItems={setDraftMenuItems}
            />
          ))}
      </ul>

      {/* Save / Cancel controls */}
      <div className="mt-6 flex justify-end gap-4">
        <button
          onClick={handleCancelChanges}
          disabled={!isDirty}
          className={`px-4 py-2 rounded border ${
            isDirty
              ? "bg-gray-100 hover:bg-gray-200"
              : "bg-gray-50 text-gray-400 cursor-not-allowed"
          }`}
        >
          Cancel
        </button>

        <button
          onClick={handleSaveChanges}
          disabled={!isDirty}
          className={`px-4 py-2 rounded text-white ${
            isDirty
              ? "bg-[var(--hover-color)] hover:opacity-90"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Save Changes
        </button>
      </div>

      {isDirty && (
        <p className="mt-2 text-sm text-yellow-600 float-right">
          You have unsaved changes
        </p>
      )}
    </div>
  );
}

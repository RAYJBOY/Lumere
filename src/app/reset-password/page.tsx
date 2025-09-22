"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ResetPasswordDialog } from "@/components/layout/ResetPasswordDialog";

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token"); // get token from URL

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (token) {
      setOpen(true); // open the dialog automatically if token exists
    }
  }, [token]);

  return (
    <div className="relative min-h-screen bg-black">
      {/* Optionally, show some fallback content */}
      {!token && (
        <p className="text-center mt-20">Invalid or missing reset link.</p>
      )}

      {/* Reset password modal */}
      <ResetPasswordDialog open={open} onOpenChange={setOpen} token={token} />
    </div>
  );
}

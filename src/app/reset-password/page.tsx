"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ResetPasswordDialog } from "@/components/layout/ResetPasswordDialog";

function ResetPasswordContent() {
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
      {!token && (
        <p className="text-center mt-20">Invalid or missing reset link.</p>
      )}

      <ResetPasswordDialog open={open} onOpenChange={setOpen} token={token} />
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ResetPasswordContent />
    </Suspense>
  );
}

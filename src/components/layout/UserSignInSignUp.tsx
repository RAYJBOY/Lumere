import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export function UserSignInSignUpDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [showError, setShowError] = useState<string | null>(null);

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    const email = (form.elements.namedItem("signin-email") as HTMLInputElement)
      .value;
    const password = (
      form.elements.namedItem("signin-password") as HTMLInputElement
    ).value;
    event.preventDefault(); // prevent full page reload
    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setShowError(data.error || "Sign in failed");
        return;
      }
      window.location.reload();
    } catch (err) {
      console.error("Sign In request failed", err);
      setShowError("Something went wrong");
    }
  };

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // prevent full page reload

    const form = event.currentTarget;
    const email = (form.elements.namedItem("signup-email") as HTMLInputElement)
      .value;
    const password = (
      form.elements.namedItem("signup-password") as HTMLInputElement
    ).value;
    const confirmPassword = (
      form.elements.namedItem("signup-confirm-password") as HTMLInputElement
    ).value;

    if (password !== confirmPassword) {
      setShowError("Passwords do not match");
      return;
    }
    if (password.length < 6) {
      setShowError("Password must be at least 6 characters long");
      return;
    }

    setShowError(null);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setShowError(data.error || "Sign up failed");
        return;
      }

      console.log("Signed up:", data.user);
      // TODO: maybe redirect or auto-login user here
    } catch (err) {
      console.error("SignUp request failed", err);
      setShowError("Something went wrong");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>User Authentication</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="sign-in" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="sign-in">Sign In</TabsTrigger>
            <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="sign-in">
            <form className="space-y-4" onSubmit={handleSignIn}>
              <div>
                <Label htmlFor="signin-email" className="mb-2">
                  Email
                </Label>
                <Input
                  id="signin-email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <Label htmlFor="signin-password" className="mb-2">
                  Password
                </Label>
                <Input
                  id="signin-password"
                  type="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  className="bg-[#A58958] hover:bg-[#A58958] hover:opacity-90"
                >
                  Sign In
                </Button>
                <DialogClose asChild>
                  <Button variant="ghost" type="button">
                    Cancel
                  </Button>
                </DialogClose>
              </DialogFooter>
            </form>
          </TabsContent>
          <TabsContent value="sign-up">
            <form className="space-y-4" onSubmit={handleSignUp}>
              <div>
                <Label htmlFor="signup-email" className="mb-2">
                  Email
                </Label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <Label htmlFor="signup-password" className="mb-2">
                  Password
                </Label>
                <Input
                  id="signup-password"
                  type="password"
                  placeholder="Create a password"
                  required
                />
              </div>
              <div>
                <Label htmlFor="signup-confirm-password" className="mb-2">
                  Confirm Password
                </Label>
                <Input
                  id="signup-confirm-password"
                  type="password"
                  placeholder="Confirm your password"
                  required
                />
              </div>
              {showError && <p className="text-sm text-red-600">{showError}</p>}
              <DialogFooter>
                <Button
                  type="submit"
                  className="bg-[#A58958] hover:bg-[#A58958] hover:opacity-90"
                >
                  Sign Up
                </Button>
                <DialogClose asChild>
                  <Button variant="ghost" type="button">
                    Cancel
                  </Button>
                </DialogClose>
              </DialogFooter>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

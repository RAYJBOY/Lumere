import * as React from "react";
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
            <form className="space-y-4">
              <div>
                <Label htmlFor="signin-email" className="mb-2">Email</Label>
                <Input
                  id="signin-email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <Label htmlFor="signin-password" className="mb-2">Password</Label>
                <Input
                  id="signin-password"
                  type="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <DialogFooter>
                <Button type="submit" className="bg-[#A58958] hover:bg-[#A58958] hover:opacity-90">Sign In</Button>
                <DialogClose asChild>
                  <Button variant="ghost" type="button">
                    Cancel
                  </Button>
                </DialogClose>
              </DialogFooter>
            </form>
          </TabsContent>
          <TabsContent value="sign-up">
            <form className="space-y-4">
              <div>
                <Label htmlFor="signup-email" className="mb-2">Email</Label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <Label htmlFor="signup-password" className="mb-2">Password</Label>
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
              <DialogFooter>
                <Button type="submit" className="bg-[#A58958] hover:bg-[#A58958] hover:opacity-90">Sign Up</Button>
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

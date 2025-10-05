"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "./button";
import { ThemeToggle } from "../ThemeToggle";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between border-b p-4">
      <div className="flex items-center gap-3">
        <SidebarTrigger />
        <div className="text-xl font-bold border rounded-lg border-b-4 border-black px-2 transition-all hover:-translate-y-[2px] ">
          VWallet
        </div>
      </div>

      <div className="flex items-center gap-3">
        <ThemeToggle />
        <Button variant="outline" className="font-bold">
          Create Wallet
        </Button>
      </div>
    </div>
  );
};

export default Navbar;

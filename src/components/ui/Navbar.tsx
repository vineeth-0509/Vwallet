"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "./button";
import { ThemeToggle } from "../ThemeToggle";
import { useState } from "react";
import NetworksList from "../NetworksList";

const Navbar = () => {
  const [showNetworks, setShowNetworks] = useState(false);
  const [loading,setLoading] = useState(true);
  return (
    <>
    <div className="flex flex-row items-center justify-between border-b p-4">
      <div className="flex items-center gap-3">
        <SidebarTrigger />
        <div className="text-xl font-bold border rounded-lg border-b-4 border-black px-2 transition-all hover:-translate-y-[2px] ">
          VWallet
        </div>
      </div>

      <div className="flex items-center gap-3">
        <ThemeToggle />
        <Button
          variant="outline"
          className="font-bold"
          onClick={()=> {
            setShowNetworks(!showNetworks)
          }}
        
        >
          {loading !== true ? "Create Wallet" : "Add Wallet"}
        </Button>
        
      </div>
    </div>

    <main>
          {showNetworks ? (
            <NetworksList/>
          ): (
            "nothing"
          )}
    </main>
    </>
  );
};

export default Navbar;

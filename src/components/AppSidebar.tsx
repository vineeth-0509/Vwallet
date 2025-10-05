"use client";

import { useState } from "react";
import { Delete, Plus } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";

export function AppSidebar() {
  const [accounts, setAccounts] = useState(["A1"]);

  const handleAddAccount = () => {
    const next = `A${accounts.length + 1}`;
    setAccounts([...accounts, next]);
  };

  const handleDeleteAccount = (acc: string) => {
    setAccounts(accounts.filter((a) => a !== acc));
  };

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex justify-between items-center text-2xl font-bold ">
            Accounts
            <button
              onClick={handleAddAccount}
              className="p-1 rounded-md border hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              <Plus className="h-4 w-4" />
            </button>
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {accounts.map((acc) => (
                <SidebarMenuItem key={acc}>
                  <SidebarMenuButton asChild>
                    <div className="cursor-pointer flex justify-between items-center gap-2 px-2 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800">
                      <span className="font-medium">{acc}</span>
                      <span>
                        <Button
                          variant="destructive"
                          onClick={() => handleDeleteAccount(acc)}
                        >
                          <Delete className="w-4 h-4" />
                        </Button>
                      </span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

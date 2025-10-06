// "use client";

import { useEffect } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { Button } from "./ui/button";
import { Plus, Trash2 } from "lucide-react";

// import { useState } from "react";
// import { Delete, Plus } from "lucide-react";
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupLabel,
//   SidebarGroupContent,
//   SidebarMenu,
//   SidebarMenuItem,
//   SidebarMenuButton,
// } from "@/components/ui/sidebar";
// import { Button } from "./ui/button";

// export function handleAccount(accounts: string[], setAccounts: React.Dispatch<React.SetStateAction<string[]>>) {
//   const next = `A${accounts.length + 1}`;
//   setAccounts([...accounts, next]);
// }

// export function AppSidebar() {
//   const [accounts, setAccounts] = useState([""]);

//   const handleDeleteAccount = (acc: string) => {
//     setAccounts(accounts.filter((a) => a !== acc));
//   };
// const [loading, setLoading] = useState(false);
//   return (
//     <Sidebar>
//       <SidebarContent>
//         <SidebarGroup>
//           <SidebarGroupLabel className="flex justify-between items-center text-2xl font-bold ">
//             Accounts
//             <button
//               onClick={() => {
//                 handleAccount(accounts, setAccounts);
//                 setLoading(true);
//               }}
//               className="p-1 rounded-md border hover:bg-gray-200 dark:hover:bg-gray-800"
//             >
//               <Plus className="h-4 w-4" />
//             </button>
//           </SidebarGroupLabel>

//           <SidebarGroupContent>
//             <SidebarMenu>

//               {loading && accounts.map((acc) => (
//                 <SidebarMenuItem key={acc}>
//                   <SidebarMenuButton asChild>
//                     <div className="cursor-pointer flex justify-between items-center gap-2 px-2 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800">
//                       <span className="font-medium">{acc}</span>
//                       <span>
//                         <Button
//                           variant="destructive"
//                           onClick={() => handleDeleteAccount(acc)}
//                         >
//                           <Delete className="w-4 h-4" />
//                         </Button>
//                       </span>
//                     </div>
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//               ))}
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>
//       </SidebarContent>
//     </Sidebar>
//   );
// }

interface AppSidebarProps {
  accounts: string[];
  activeAccount: string | null;
  onSelectAccount: (acc: string) => void;
  onAddAccount: () => void;
  onDeleteAccount: (acc: string) => void;
}

export function AppSidebar({
  accounts,
  onAddAccount,
  activeAccount,
  onDeleteAccount,
  onSelectAccount,
}: AppSidebarProps) {
  useEffect(() => {
    localStorage.setItem("wallet_accounts", JSON.stringify(accounts));
  }, [accounts]);

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex justify-between items-center">
            <span className="text-2xl font-bold">Accounts</span>
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-green-600"
              onClick={onAddAccount}
            >
              <Plus className="w-4 h-4" />
            </Button>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {accounts.map((acc) => (
                <SidebarMenuItem key={acc}>
                  <div
                    className={`flex justify-between items-center px-2 py-1 rounded-md cursor-pointer ${activeAccount === acc ? "bg-blue-500 text-white" : "hover:bg-gray-200 dark:hover:bg-gray-800"}`}
                    onClick={() => onSelectAccount(acc)}
                  >
                    <span className="text-xl font-bold">{acc}</span>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        onDeleteAccount(acc);
                      }}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

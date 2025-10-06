// "use client";
// import { SidebarTrigger } from "@/components/ui/sidebar";
// import { Button } from "./button";
// import { ThemeToggle } from "../ThemeToggle";
// import { useState } from "react";
// import NetworksList from "../NetworksList";
// import { handleAccount } from "../AppSidebar";

// const Navbar = () => {
//   const [showNetworks, setShowNetworks] = useState(false);
//   const [accounts, setAccounts] = useState([""]);
//   const [loading, setLoading] = useState(true);

//   return (
//     <>
//       <div className="flex flex-row items-center justify-between border-b p-4">
//         <div className="flex items-center gap-3">
//           <SidebarTrigger />
//           <div className="text-xl font-bold border rounded-lg border-b-4 border-black px-2 transition-all hover:-translate-y-[2px] ">
//             VWallet
//           </div>
//         </div>

//         <div className="flex items-center gap-3">
//           <ThemeToggle />
//           <Button
//             variant="outline"
//             className="font-bold"
//             onClick={() => {
//               handleAccount(accounts, setAccounts);
//               setShowNetworks(!showNetworks);
//               setLoading(false);
//             }}
//           >
//             {loading !== true ? "Create Wallet" : "Add Wallet"}
//           </Button>
//         </div>
//       </div>

//       <main>{showNetworks ? <NetworksList /> : "nothing"}</main>
//     </>
//   );
// };

// export default Navbar;

"use client";

import { ThemeToggle } from "../ThemeToggle";
import { Button } from "./button";
import { SidebarTrigger } from "./sidebar";

interface NavbarProps {
  hasAccounts: boolean;
  onCreateorAddWallet: () => void;
}

const Navbar = ({ hasAccounts, onCreateorAddWallet }: NavbarProps) => {
  return (
    <div className="flex flex-row items-center justify-between border-b p-4 ">
      <div className="flex items-center gap-3">
        <SidebarTrigger />
        <div className="text-xl font-bold border rounded-lg border-b-4 border-black transition-all hover:-translate-y-[2px] px-2">
          VWallet
        </div>
      </div>
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <Button
          variant="outline"
          className="font-bold"
          onClick={onCreateorAddWallet}
        >
          {hasAccounts ? "Add Wallet" : "Create Wallet"}
        </Button>
      </div>
    </div>
  );
};

export default Navbar;

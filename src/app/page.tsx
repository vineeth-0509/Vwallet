"use client";
import { AppSidebar } from "@/components/AppSidebar";
import Navbar from "@/components/ui/Navbar";
import { act, useEffect, useState } from "react";

export default function Home() {
  const [accounts, setAccounts] = useState<string[]>([]);
  const [activeAccount, setActiveAccount] = useState<string | null>(null);
  const [showNetworks, setShowNetworks] = useState<boolean>(false);
  const [step, setStep] = useState<1 | 2 | 3>(1);

  useEffect(() => {
    const stored = localStorage.getItem("wallet_accounts");
    if (stored) {
      const parsed = JSON.parse(stored);
      setAccounts(parsed);
      if (parsed.length > 0) {
        setActiveAccount(parsed[0]);
      }
    }
  }, []);

  const handleAddAccount = () => {
    const next = `A${accounts.length + 1}`;
    const updated = [...accounts, next];
    setAccounts([...accounts, next]);
    setActiveAccount(next);
    localStorage.setItem("wallet_accounts", JSON.stringify(updated));
    setShowNetworks(true);
    setStep(1);
  };

  const handleDeleteAccount = (acc: string) => {
    const updated = accounts.filter((a) => a != acc);
    setAccounts(updated);
    if (activeAccount === acc) {
      setActiveAccount(null);
      localStorage.setItem("wallet_accounts", JSON.stringify(updated));
    }
  };
  return (
    <div className="border w-[90%] h-screen mx-auto my-2 flex">
      <AppSidebar
        accounts={accounts}
        onAddAccount={handleAddAccount}
        activeAccount={activeAccount}
        onDeleteAccount={handleDeleteAccount}
        onSelectAccount={setActiveAccount}
      />

      <div className="flex-1 flex flex-col">
        <Navbar
          hasAccounts={accounts.length > 0}
          onCreateorAddWallet={handleAddAccount}
        />
        <div className="p-6"></div>
      </div>
    </div>
  );
}

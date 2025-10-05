import type { Metadata } from "next";
import "./globals.css";
import Providers from "./Providers";
import { SidebarProvider } from "@/components/ui/sidebar";

export const metadata: Metadata = {
  title: "VWallet",
  description: "Wallet app built with Next.js + shadcn/ui",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Providers>
          <SidebarProvider>
            {children}
          </SidebarProvider>
        </Providers>
      </body>
    </html>
  );
}

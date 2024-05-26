import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WhoScore",
  description: "+",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.className, "bg-black text-white")}>
        <Header />
        <main className="flex-1 pb-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

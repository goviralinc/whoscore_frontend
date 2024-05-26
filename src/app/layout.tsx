import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

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
      <body
        className={twMerge(
          inter.className,
          "bg-black text-white max-w-2xl mx-auto"
        )}
      >
        <Header />
        <main className="flex-1 pb-28">{children}</main>
        <Footer />
        <ToastContainer hideProgressBar autoClose={3000} />
      </body>
    </html>
  );
}

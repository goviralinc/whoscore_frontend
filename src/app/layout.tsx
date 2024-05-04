import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/shared/Footer";

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
        <header className="bg-dark py-4 px-5 rounded-bl-[40px] rounded-br-[40px]">
          <div>
            <Image
              src="/logo.png"
              alt="WhoScore logo"
              width={118}
              height={100}
            />
          </div>

          <div className="flex justify-between gap-4 mt-8 text-xs">
            <div className="flex items-center gap-4">
              <div className="rounded-full w-12 h-12 bg-[#0E0E0E] shrink-0"></div>
              <p>
                Sign in to enjoy the full <br /> experience of WhoScore
              </p>
            </div>

            <Link
              href="/"
              className="font-bold underline text-primary hover:opacity-90 shrink-0"
            >
              Sign in
            </Link>
          </div>
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { twMerge } from "tailwind-merge";
import { sbt } from "@/lib/utils/fonts";
import Providers from "@/lib/providers";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Whoscore",
    template: `%s | Whoscore`,
  },
  description: "+",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={twMerge(sbt.className, "bg-black text-white max-w-2xl mx-auto")}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

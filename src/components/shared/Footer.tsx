"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

const Footer = () => {
  const NAV = [
    {
      name: "Livescores",
      href: "/livescores",
      logo: "/flag.svg",
    },
    {
      name: "TicketID",
      href: "/",
      logo: "/ticket.svg",
    },
    {
      name: "Profile",
      href: "#",
      logo: "/user-square.svg",
    },
  ];

  const pathname = usePathname();

  return (
    <footer className="bg-dark max-w-2xl mx-auto py-3 fixed bottom-4 rounded-full w-full px-5">
      <div className="flex gap-4 justify-evenly w-full">
        {NAV.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className={twMerge(
              "flex flex-col items-center gap-2 text-dark-200 text-sm",
              pathname === item.href && "text-primary"
            )}
          >
            <Image src={item.logo} alt="" width={24} height={24} />
            {item.name}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;

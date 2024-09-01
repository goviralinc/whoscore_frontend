"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import FlagIcon from "@/components/Common/Icons/flag";
import UserProfIcon from "@/components/Common/Icons/user-profile";
import TicketIcon from "@/components/Common/Icons/ticket";
import { cloneElement as c } from "react";

type FLink = { name: string; path: string; icon: JSX.Element };

const footerLinks: FLink[] = [
  {
    name: "Livescores",
    path: "/livescores",
    icon: <FlagIcon className="text-primary" />,
  },
  {
    name: "TicketID",
    path: "/",
    icon: <TicketIcon />,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <UserProfIcon />,
  },
];

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="bg-black w-full mx-auto py-3 max-w-2xl fixed bottom-4 rounded-full px-5">
      <div className="flex gap-4 justify-evenly w-full">
        {footerLinks.map((item, i) => (
          <Link
            key={i}
            href={item.path}
            className={twMerge(
              "flex flex-col items-center gap-2 text-dark-200 duration-300 text-sm",
              pathname === item.path && "text-primary"
            )}
          >
            {c(item.icon, { color: pathname === item.path ? "#67E59A" : "#424242" })}
            {item.name}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;

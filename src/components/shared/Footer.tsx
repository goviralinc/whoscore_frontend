import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-dark py-3 fixed bottom-4 rounded-full w-full px-5">
      <div className="flex gap-4 justify-evenly w-full">
        <Link
          href="#"
          className="flex flex-col items-center gap-2 text-dark-200 text-sm"
        >
          <Image src="/flag.svg" alt="" width={24} height={24} />
          Livescores
        </Link>

        <Link
          href="#"
          className="flex flex-col items-center gap-2 text-dark-200 text-sm"
        >
          <Image src="/ticket.svg" alt="" width={24} height={24} />
          Ticket ID
        </Link>

        <Link
          href="#"
          className="flex flex-col items-center gap-2 text-dark-200 text-sm"
        >
          <Image src="/user-square.svg" alt="" width={24} height={24} />
          Profile
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

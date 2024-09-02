import Image from "next/image";
import Link from "next/link";
import React from "react";

const Ticket = () => {
  return (
    <Link
      href="/ticket/details"
      className="flex items-center justify-between gap-4 py-2 border-b border-b-dark-200 text-xs"
    >
      <div className="flex items-center gap-2">
        <Image src="/platforms/SportyBet.png" alt="sportybet logo" width={30} height={30} />
        <div>
          <strong>64525378</strong>
          <span className="text-dark-200 text-xs block">30/08/2023 10:24AM</span>
        </div>
      </div>

      <div className="bg-black rounded-full py-1 px-3">N100,000.43</div>
    </Link>
  );
};

export default Ticket;

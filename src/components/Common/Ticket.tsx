import { RecentTicketsItem } from "@/lib/store/ticket.store";
import { Platform } from "@/lib/types";
import { getPlatformLogo } from "@/lib/utils/get-logo";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { format } from "date-fns";

const Ticket = (ticketItem: RecentTicketsItem) => {
  const {
    platform,
    date,
    ticketID,
    info: { potentialWin },
  } = ticketItem;

  return (
    <Link href="/ticket/details" className="flex items-center justify-between gap-4 py-2 text-xs">
      <div className="flex items-center gap-2">
        <div className="size-12 rounded-full overflow-hidden relative">
          <Image
            src={getPlatformLogo(platform.value as Platform)}
            alt={platform.name}
            className="absolute top-0 left-0 w-full h-full object-cover"
            height={50}
            width={50}
          />
        </div>
        <div className="space-y-1">
          <span className="font-semibold">{ticketID}</span>
          <span className="text-dark-200 text-xs block">{format(date, "dd/M/y k:m a")}</span>
        </div>
      </div>

      <div className="bg-[#0e0e0e] rounded-full p-3 text-sm">{potentialWin}</div>
    </Link>
  );
};

export default Ticket;

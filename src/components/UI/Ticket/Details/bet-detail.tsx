"use client";

import { Bet, Platform, UseTicketInfo } from "@/lib/types";
import { getPlatformLogo } from "@/lib/utils/get-logo";
import Image from "next/image";
import { FaCaretDown } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";

type Props = {
  bet: Bet;
  ticketInfo: UseTicketInfo;
};

const BetDetail = ({ bet, ticketInfo: t }: Props) => {
  return (
    <div className="bg-[#1B1B1B] rounded-2xl mb-5 pt-3 pb-5 px-1">
      <div className="bg-[#252525]  w-full flex justify-between items-center gap-3 p-3 text-dark-200 font-semibold rounded-full text-xs">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-full overflow-hidden relative">
            <Image
              src={getPlatformLogo(t.platform.value as Platform)}
              alt={t.platform.name}
              className="absolute top-0 left-0 w-full h-full object-cover"
              height={50}
              width={50}
            />
          </div>
          <h2>{t.platform.name}</h2>
        </div>
        <span className="text-sm flex items-center gap-1">
          <FaCaretDown className="text-[#67E59A]" />
          {bet.odds}
        </span>
      </div>

      <div>
        <div className="text-sm px-1 pt-2">
          <div className="flex justify-between gap-4 mb-2">
            <span className="text-dark-200">{bet.oddType}</span>
            <div className="flex items-center gap-1">
              <span className="text-grey">Status:</span>
              <div className={`flex items-center gap-1 ${bet.bet_status === "Won" ? "text-primary" : "text-red-300"}`}>
                {bet.bet_status === "Won" ? (
                  <FaCheckCircle size={12} className="" />
                ) : (
                  <IoIosCloseCircle size={14} className="" />
                )}
                <span>{bet.bet_status}</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between gap-4 mb-2">
            <div>
              <span>
                {bet.hometeam} vs {bet.awayteam}
              </span>
              {bet.time !== "Event Ended" && <strong className="text-[#67E59A] block mt-2">2 : 0 H2 | 56'</strong>}
            </div>
            <span className="text-dark-200 self-end text-xs flex-shrink-0">{bet.time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetDetail;

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoCaretBack } from "react-icons/io5";
import useTicket from "@/lib/store/ticket.store";
import { useRouter } from "next/navigation";
import { toastError } from "@/lib/utils/toast";
import { getPlatformLogo } from "@/lib/utils/get-logo";
import { Platform } from "@/lib/types";
import BetDetail from "./bet-detail";

function TicketDetails() {
  const { item, ticketInfo } = useTicket();

  const router = useRouter();

  if (!item || !ticketInfo) {
    toastError("No ticket found");
    router.replace("/");
    return null;
  } else {
    const { bets, info } = item;
    const { platform, ticketID } = ticketInfo;

    return (
      <div>
        <div className="fixed top-0 left-0 w-full z-50">
          <div className="flex items-center justify-between px-5 gap-4 bg-dark h-12">
            <button onClick={() => router.back()} className="flex gap-2 items-center">
              <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                <IoCaretBack />
              </div>
              <strong>Ticket Details</strong>
            </button>

            <div>
              <Image src="/whoscoreFlag.svg" alt="WhoScore logo" width={24} height={24} />
            </div>
          </div>
        </div>

        <div className="px-5 pt-20">
          <div className="bg-dark rounded-2xl mb-5 pt-3 pb-5 px-1">
            <div className="bg-black flex justify-between items-center gap-3 p-3 text-dark-200 font-semibold rounded-full text-xs">
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-full overflow-hidden relative">
                  <Image
                    src={getPlatformLogo(platform.value as Platform)}
                    alt={platform.name}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    height={50}
                    width={50}
                  />
                </div>
                <h2>{platform.name}</h2>
              </div>
              <span className="text-[#67E59A] text-sm">Live</span>
            </div>

            <div className="text-sm px-1 pt-2">
              <span className="text-xs text-dark-200 mb-2 block">{info.date}</span>
              <div className="flex justify-between gap-4 mb-2">
                <span className="text-dark-200">Ticket ID</span>
                <span>{ticketID}</span>
              </div>
              <div className="flex justify-between gap-4 mb-2">
                <span className="text-dark-200">Type</span>
                <span>{info.type}</span>
              </div>
              <div className="flex justify-between gap-4 mb-2">
                <span className="text-dark-200">Total stake</span>
                <span>{info.totalStake}</span>
              </div>
              <div className="flex justify-between gap-4 mb-2">
                <span className="text-dark-200">Total odds</span>
                <span>{info.totalOdds}</span>
              </div>
              <div className="flex justify-between gap-4 mb-2">
                <span className="text-dark-200">Potential winnings</span>
                <span>{info.potentialWin}</span>
              </div>
            </div>
          </div>

          {bets?.length > 0 ? (
            <div>
              {bets.map((bet, id) => (
                <BetDetail bet={bet} key={id} info={info} ticketInfo={ticketInfo} />
              ))}
            </div>
          ) : (
            <div className="py-2 text-center text-sm">
              <p>No bets found </p>
            </div>
          )}

          <div className="bg-black rounded-full px-4 py-2">
            <div className="flex justify-between gap-4 items-str">
              <div>
                <span className="text-xs text-dark-200">Potential winnings</span>
                <p className="text-xl">{info.potentialWin}</p>
              </div>
              <Link
                href="/cashout"
                className="bg-[#67E59A] flex items-center justify-center w-32 rounded-full text-dark"
              >
                Cash Out
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TicketDetails;

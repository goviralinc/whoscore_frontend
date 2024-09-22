"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoCaretBack } from "react-icons/io5";
import useTicket, { useRecentTickets } from "@/lib/store/ticket.store";
import { useRouter, useSearchParams } from "next/navigation";
import { toastError, toastLoading } from "@/lib/utils/toast";
import { getPlatformLogo } from "@/lib/utils/get-logo";
import { Platform } from "@/lib/types";
import BetDetail from "./bet-detail";
import { useQuery } from "@tanstack/react-query";
import { getTicketInfo } from "@/lib/services/ticket.service";
import { getPlatformName } from "@/lib/utils/helpers";
import { toast } from "sonner";
import Spinner from "@/components/Common/Loaders/spinner";

type Props = {
  searchParams: { "ticket-id": string; platform: Platform };
};

const TicketDetails = ({ searchParams: { "ticket-id": ticketId, platform } }: Props) => {
  const { item, ticketInfo, updateItem, updateTicketInfo } = useTicket();

  const router = useRouter();

  const { data: ticket, isPending } = useQuery({
    queryFn: () => getTicketInfo({ ticketId, betPlatform: platform }),
    queryKey: ["ticket-details", ticketId],
  });

  const platformData = { value: platform, name: getPlatformName(platform ?? "") };

  useEffect(() => {
    if (ticket && !isPending) {
      updateItem(ticket);
      updateTicketInfo({
        platform: platformData,
        ticketID: ticketId,
      });
      toast.dismiss("getting-details");
    }
  }, [ticket, isPending]);

  if (!ticketId || !platform) {
    toastError("No ticket found", { id: "no-ticket-found" });
    router.replace("/");
    return null;
  }

  // const renderContent = () => {
  //   if (isRecent) {
  //     return <></>;
  //   }

  //   if (ticketInfo && item) {
  //     const { bets, info } = item;
  //     return (
  //       <div className="px-5 pt-20">
  //         <div className="bg-dark rounded-2xl mb-5 pt-3 pb-5 px-1">
  //           <div className="bg-black flex justify-between items-center gap-3 p-3 text-dark-200 font-semibold rounded-full text-xs">
  //             <div className="flex items-center gap-2">
  //               <div className="size-8 rounded-full overflow-hidden relative">
  //                 <Image
  //                   src={getPlatformLogo(platform as Platform)}
  //                   alt={platform}
  //                   className="absolute top-0 left-0 w-full h-full object-cover"
  //                   height={50}
  //                   width={50}
  //                 />
  //               </div>
  //               <h2>{platform}</h2>
  //             </div>
  //             <span className="text-[#67E59A] text-sm">Live</span>
  //           </div>

  //           <div className="text-sm px-1 pt-2">
  //             <span className="text-xs text-dark-200 mb-2 block">{info.date}</span>
  //             <div className="flex justify-between gap-4 mb-2">
  //               <span className="text-dark-200">Ticket ID</span>
  //               <span>{ticketId}</span>
  //             </div>
  //             <div className="flex justify-between gap-4 mb-2">
  //               <span className="text-dark-200">Type</span>
  //               <span>{info.type}</span>
  //             </div>
  //             <div className="flex justify-between gap-4 mb-2">
  //               <span className="text-dark-200">Total stake</span>
  //               <span>{info.totalStake}</span>
  //             </div>
  //             <div className="flex justify-between gap-4 mb-2">
  //               <span className="text-dark-200">Total odds</span>
  //               <span>{info.totalOdds}</span>
  //             </div>
  //             <div className="flex justify-between gap-4 mb-2">
  //               <span className="text-dark-200">Potential winnings</span>
  //               <span>{info.potentialWin}</span>
  //             </div>
  //           </div>
  //         </div>

  //         {bets?.length > 0 ? (
  //           <div>
  //             {bets.map((bet, id) => (
  //               <BetDetail bet={bet} key={id} ticketInfo={ticketInfo} />
  //             ))}
  //           </div>
  //         ) : (
  //           <div className="py-2 text-center text-sm">
  //             <p>No bets found </p>
  //           </div>
  //         )}

  //         <div className="bg-black rounded-full px-4 py-2">
  //           <div className="flex justify-between gap-4 items-str">
  //             <div>
  //               <span className="text-xs text-dark-200">Potential winnings</span>
  //               <p className="text-xl">{info.potentialWin}</p>
  //             </div>
  //             <Link
  //               href="/cashout"
  //               className="bg-[#67E59A] flex items-center justify-center w-32 rounded-full text-dark"
  //             >
  //               Cash Out
  //             </Link>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   }
  // };

  if (!item || !ticketInfo) {
    toastLoading("Getting Ticket Info", { id: "getting-details" });

    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="space-y-1 text-center">
          <div className="grid place-content-center animate-pulse">
            <Spinner />
          </div>
          <p className="opacity-50 text-xs">Loading...</p>
        </div>
      </div>
    );
  } else {
    const { bets, info } = item;

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
                    src={getPlatformLogo(platform as Platform)}
                    alt={platform}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    height={50}
                    width={50}
                  />
                </div>
                <h2>{platform}</h2>
              </div>
              <span className="text-[#67E59A] text-sm">Live</span>
            </div>

            <div className="text-sm px-1 pt-2">
              <span className="text-xs text-dark-200 mb-2 block">{info.date}</span>
              <div className="flex justify-between gap-4 mb-2">
                <span className="text-dark-200">Ticket ID</span>
                <span>{ticketId}</span>
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
              {isPending ? (
                <div className="min-h-[15rem] relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <div className="space-y-1 text-center">
                      <div className="grid place-content-center animate-pulse">
                        <Spinner />
                      </div>
                      <p className="opacity-50 text-xs">Loading...</p>
                    </div>
                  </div>
                </div>
              ) : (
                bets.map((bet, id) => <BetDetail bet={bet} key={id} ticketInfo={ticketInfo} />)
              )}
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
};

export default TicketDetails;

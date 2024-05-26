"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as Accordion from "@radix-ui/react-accordion";
import { IoCaretBack } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa6";

function TicketDetails() {
  return (
    <div>
      <div className="flex items-center justify-between px-5 gap-4 bg-dark h-12">
        <Link href="/" className="flex gap-2 items-center">
          <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
            <IoCaretBack />
          </div>
          <strong>Ticket Details</strong>
        </Link>

        <div>
          <Image
            src="/whoscoreFlag.svg"
            alt="WhoScore logo"
            width={24}
            height={24}
          />
        </div>
      </div>

      <div className="px-5 pt-5">
        <div className="bg-dark rounded-2xl mb-5 pt-3 pb-5 px-1">
          <div className="bg-black flex justify-between items-center gap-3 p-3 text-dark-200 font-semibold rounded-full text-xs">
            <div className="flex items-center gap-2">
              <Image
                src="/SportyBet.png"
                alt="Sportbet logo"
                height={22}
                width={22}
              />
              <h2>Sport Bet</h2>
            </div>
            <span className="text-[#67E59A] text-sm">Live</span>
          </div>

          <div className="text-sm px-1 pt-2">
            <span className="text-xs text-dark-200 mb-2 block">
              30/08/2023 10:24AM
            </span>
            <div className="flex justify-between gap-4 mb-2">
              <span className="text-dark-200">Ticket ID</span>
              <span>645271882</span>
            </div>
            <div className="flex justify-between gap-4 mb-2">
              <span className="text-dark-200">Type</span>
              <span>Mulitple</span>
            </div>
            <div className="flex justify-between gap-4 mb-2">
              <span className="text-dark-200">Total stake</span>
              <span>N10,000</span>
            </div>
            <div className="flex justify-between gap-4 mb-2">
              <span className="text-dark-200">Total odds</span>
              <span>10292.26</span>
            </div>
            <div className="flex justify-between gap-4 mb-2">
              <span className="text-dark-200">Potential winnings</span>
              <span>N3,504,010.80</span>
            </div>
          </div>
        </div>

        <Accordion.Root type="single" defaultValue="item-1">
          <Accordion.Item
            value="item-1"
            className="bg-[#1B1B1B] rounded-2xl mb-5 pt-3 pb-5 px-1"
          >
            <Accordion.Trigger className="bg-[#252525]  w-full flex justify-between items-center gap-3 p-3 text-dark-200 font-semibold rounded-full text-xs">
              <div className="flex items-center gap-2">
                <Image
                  src="/SportyBet.png"
                  alt="Sportbet logo"
                  height={22}
                  width={22}
                />
                <h2>Premier League</h2>
              </div>
              <span className="text-sm flex items-center gap-1">
                <FaCaretDown className="text-[#67E59A]" />
                1.20
              </span>
            </Accordion.Trigger>

            <Accordion.Content>
              <div className="text-sm px-1 pt-2">
                <div className="flex justify-between gap-4 mb-2">
                  <span className="text-dark-200">1X2</span>
                  <div className="flex items-center gap-1">
                    <span>status:</span>
                    <span className="text-[#67E59A]">Won</span>
                  </div>
                </div>

                <div className="flex justify-between gap-4 mb-2">
                  <div>
                    <span>Man City vs Arsenal</span>
                    <strong className="text-[#67E59A] block mt-2">
                      2 : 0 H2 | 56'
                    </strong>
                  </div>
                  <span className="text-dark-200 self-end">
                    30/08/2023 10:24AM
                  </span>
                </div>
              </div>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item
            value="item-2"
            className="bg-[#1B1B1B] rounded-2xl mb-5 pt-3 pb-5 px-1"
          >
            <Accordion.Trigger className="bg-[#252525]  w-full flex justify-between items-center gap-3 p-3 text-dark-200 font-semibold rounded-full text-xs">
              <div className="flex items-center gap-2">
                <Image
                  src="/SportyBet.png"
                  alt="Sportbet logo"
                  height={22}
                  width={22}
                />
                <h2>Premier League</h2>
              </div>
              <span className="text-sm flex items-center gap-1">
                <FaCaretDown className="text-[#67E59A]" />
                1.20
              </span>
            </Accordion.Trigger>

            <Accordion.Content>
              <div className="text-sm px-1 pt-2">
                <div className="flex justify-between gap-4 mb-2">
                  <span className="text-dark-200">1X2</span>
                  <div className="flex items-center gap-1">
                    <span>status:</span>
                    <span className="text-[#67E59A]">Won</span>
                  </div>
                </div>

                <div className="flex justify-between gap-4 mb-2">
                  <div>
                    <span>Man City vs Arsenal</span>
                    <strong className="text-[#67E59A] block mt-2">
                      2 : 0 H2 | 56'
                    </strong>
                  </div>
                  <span className="text-dark-200 self-end">
                    30/08/2023 10:24AM
                  </span>
                </div>
              </div>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>

        <div className="bg-black rounded-full px-4 py-2">
          <div className="flex justify-between gap-4 items-str">
            <div>
              <span className="text-xs text-dark-200">Potential winnings</span>
              <p className="text-xl">N100,000</p>
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

export default TicketDetails;

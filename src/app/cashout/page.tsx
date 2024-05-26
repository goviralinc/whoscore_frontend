import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCaretBack } from "react-icons/io5";

function Cashout() {
  return (
    <div>
      <div className="flex items-center justify-between px-5 gap-4 bg-dark h-12">
        <div className="flex gap-2 items-center">
          <Link
            href="/ticket/details"
            className="w-6 h-6 bg-black rounded-full flex items-center justify-center"
          >
            <IoCaretBack />
          </Link>
          <strong>Cash Out</strong>
        </div>

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
        <div className="bg-[#1B1B1B] rounded-2xl mb-5 pt-3 pb-5 px-1">
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

        <div className="bg-[#1B1B1B] rounded-2xl mb-5 py-3 px-1">
          <label
            htmlFor="partialCashout"
            className="bg-[#252525] block mb-3 p-3 font-semibold rounded-full text-xs"
          >
            <input
              type="radio"
              name="checkoutType"
              id="partialCashout"
              className="mt-1 mr-2"
            />

            <span>Partial Cashout</span>
          </label>

          <label
            htmlFor="fullCashout"
            className="bg-[#252525] block p-3 font-semibold rounded-full text-xs"
          >
            <input
              type="radio"
              name="checkoutType"
              id="fullCashout"
              className="mt-1 mr-2"
            />

            <span>Full Cashout</span>
          </label>
        </div>

        <div className="bg-black rounded-full px-4 py-2">
          <div className="flex justify-between gap-4 items-center">
            <p className="text-xl">N100,000</p>

            <button className="bg-[#67E59A] py-2 flex items-center justify-center w-32 rounded-full text-dark">
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cashout;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoCaretBack } from "react-icons/io5";
import { FaCircle } from "react-icons/fa6";
import DetailTabs from "@/components/MatchDetails/DetailTabs";

function MatchDetails() {
  return (
    <div className="text-sm">
      <div className="flex items-center justify-between px-5 gap-4 bg-dark h-12">
        <div className="flex gap-2 items-center">
          <Link href="/livescores" className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
            <IoCaretBack />
          </Link>
          <strong>Match Details</strong>
        </div>

        <div>
          <Image src="/whoscoreFlag.svg" alt="WhoScore logo" width={24} height={24} />
        </div>
      </div>

      <div className="pt-7">
        <div className="flex justify-evenly items-center text-sm mb-2">
          <div className="flex flex-col gap-2 items-center">
            <Image src="/clubs/manCity.png" alt="Man City logo" width={40} height={40} />
            <span>Man City</span>
          </div>

          <div className="text-center">
            <h3 className="text-sm text-dark-200">Premier League</h3>
            <strong className="text-3xl my-2 inline-block">4 : 0</strong>
            <div className="flex justify-center items-center text-xs">
              <FaCircle className="text-[#67E59A]" size={8} />
              80
            </div>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <Image src="/clubs/chelsea.png" alt="Man City logo" width={40} height={40} />
            <span>Chelsea</span>
          </div>
        </div>

        <DetailTabs />
      </div>
    </div>
  );
}

export default MatchDetails;

import { IMatch as IMatch } from "@/lib/types";
import { scnBold } from "@/lib/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Match = ({ team1, team2 }: IMatch) => {
  return (
    <Link href="/livescores/details">
      <div className="border-b border-b-[#252525] py-3 flex justify-evenly items-center text-sm">
        <div className="flex gap-6 items-center">
          <Image src={team1.logo} alt={`${team1.name} logo`} width={34} height={34} />
          <span className="font-[400]">{team1.name}</span>
        </div>

        <strong className={`text-2xl ${scnBold.className}`}>4 : 0</strong>

        <div className="flex gap-6 items-center">
          <span className="font-[400]">{team2.name}</span>
          <Image src={team2.logo} alt={`${team2.name} logo`} width={34} height={34} />
        </div>
      </div>
    </Link>
  );
};

export default Match;

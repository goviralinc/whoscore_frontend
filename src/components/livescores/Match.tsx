import Image from "next/image";
import Link from "next/link";
import React from "react";

const Match = () => {
  return (
    <Link href="/livescores/details">
      <div className="border-b border-b-[#252525] py-2 flex justify-evenly items-center text-sm">
        <div className="flex gap-2 items-center">
          <Image
            src="/manCity.png"
            alt="Man City logo"
            width={30}
            height={30}
          />
          <span>Man City</span>
        </div>

        <strong className="text-base">4 : 0</strong>

        <div className="flex gap-2 items-center">
          <span>Chelsea</span>
          <Image
            src="/chelsea.png"
            alt="Man City logo"
            width={30}
            height={30}
          />
        </div>
      </div>
    </Link>
  );
};

export default Match;

import Image from "next/image";
import React from "react";

function Lineup() {
  return (
    <div>
      <Image
        src="/lineup.png"
        alt="lineup"
        width={500}
        height={500}
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export default Lineup;

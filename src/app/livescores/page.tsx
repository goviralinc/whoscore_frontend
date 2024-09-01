import Match from "@/components/livescores/Match";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Navbar";
import Image from "next/image";
import React from "react";
import { scn } from "@/lib/utils/fonts";
import { calender } from "@/lib/data/dummy";

const matches1 = Array.from({ length: 6 }).map(() => ({
  team1: {
    name: "Man City",
    logo: "/clubs/manCity.png",
    score: 4,
  },
  team2: {
    name: "Chelsea",
    logo: "/clubs/chelsea.png",
    score: 0,
  },
}));

const matches2 = Array.from({ length: 6 }).map(() => ({
  team1: {
    name: "Ac Milan",
    logo: "/clubs/ac-milan.png",
    score: 4,
  },
  team2: {
    name: "As Roma",
    logo: "/clubs/as-roma.png",
    score: 0,
  },
}));

const LiveScores = () => {
  return (
    <>
      <Header />
      <div className="pt-4 pb-28">
        <div className="text-dark-200">
          <div className="border-b border-b-[#252525] p-2">
            <div className="flex overflow-auto gap-3 text-sm">
              <div className="border border-primary/50 text-white/90 rounded-full py-2 px-4">Soccer</div>
              <div className="p-2">Basketball</div>
              <div className="p-2">Cricket</div>
              <div className="p-2">Volleyball</div>
              <div className="p-2">Tennis</div>
              <div className="p-2">Baseball</div>
            </div>
          </div>

          <div className="border-b border-b-[#252525] p-2 text-center">Calendar here</div>
        </div>

        <section className="px-5 mt-4">
          {calender.map(({ logo, matches, name }, id) => (
            <div key={id} className="bg-dark rounded-2xl mb-5 pt-3 pb-5 px-1">
              <div
                className={`bg-black flex justify-between items-center gap-3 p-3 text-dark-200 font-semibold rounded-full text-sm ${scn.className}`}
              >
                <div className="flex items-center gap-2">
                  <Image src={logo} alt={`${name} logo`} height={30} width={30} />
                  <h2>{name}</h2>
                </div>
                <span>All Matches</span>
              </div>

              {matches.map((data, id) => (
                <Match key={id} {...data} />
              ))}
            </div>
          ))}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default LiveScores;

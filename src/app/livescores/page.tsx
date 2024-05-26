import Match from "@/components/livescores/Match";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import React from "react";

const Livescores = () => {
  return (
    <div className="pt-4">
      <div className="text-dark-200">
        <div className="border-b border-b-[#252525] p-2">
          <div className="flex overflow-auto gap-3 text-sm">
            <div className="border border-primary/50 text-white/90 rounded-full py-2 px-4">
              Soccer
            </div>
            <div className="p-2">Basketball</div>
            <div className="p-2">Cricket</div>
            <div className="p-2">Volleyball</div>
            <div className="p-2">Tennis</div>
            <div className="p-2">Baseball</div>
          </div>
        </div>

        <div className="border-b border-b-[#252525] p-2 text-center">
          Calendar here
        </div>
      </div>

      <section className="px-5 mt-4">
        <div className="bg-dark rounded-2xl mb-5 pt-3 pb-5 px-1">
          <div className="bg-black flex justify-between items-center gap-3 p-3 text-dark-200 font-semibold rounded-full text-xs">
            <h2>Premier League</h2>
            <span>All Matches</span>
          </div>

          <Match />
          <Match />
          <Match />
        </div>

        <div className="bg-dark rounded-2xl mb-5 pt-3 pb-5 px-1">
          <div className="bg-black flex justify-between items-center gap-3 p-3 text-dark-200 font-semibold rounded-full text-xs">
            <h2>Premier League</h2>
            <span>All Matches</span>
          </div>

          <Match />
          <Match />
          <Match />
        </div>

        <div className="bg-dark rounded-2xl mb-5 pt-3 pb-5 px-1">
          <div className="bg-black flex justify-between items-center gap-3 p-3 text-dark-200 font-semibold rounded-full text-xs">
            <h2>Premier League</h2>
            <span>All Matches</span>
          </div>

          <Match />
          <Match />
          <Match />
        </div>
      </section>
    </div>
  );
};

export default Livescores;

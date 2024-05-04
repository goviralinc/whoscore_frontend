import Match from "@/components/livescores/Match";
import React from "react";

const Livescores = () => {
  return (
    <div className="pt-4">
      <section className="px-5">
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

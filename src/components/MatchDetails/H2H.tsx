import Image from "next/image";
import React from "react";
import ProgressStat from "./Progress";
import Match from "../livescores/Match";

function H2H() {
  return (
    <div>
      <div className="bg-dark rounded-2xl mb-5 pt-3 pb-5 px-1">
        <div className="bg-black flex justify-between items-center gap-3 p-3 text-dark-200 font-semibold rounded-full text-xs">
          <h2>All Competitions</h2>
          <span>4 Matches</span>
        </div>

        <div className="mt-4 px-3">
          <div className="mb-3">
            <h2 className="text-center text-xs text-dark-200 mb-1">Won</h2>
            <div className="flex gap-4 ">
              <div className="flex gap-4 items-center flex-1">
                <span className="text-lg font-bold">8</span>

                <ProgressStat
                  progressV={60}
                  translateNegative={false}
                  bgColor="orange"
                />
              </div>
              <div className="flex gap-4 items-center flex-1">
                <ProgressStat progressV={50} bgColor="aqua" />
                <span className="text-lg font-bold">6</span>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <h2 className="text-center text-xs text-dark-200 mb-1">Drawn</h2>
            <div className="flex gap-4 ">
              <div className="flex gap-4 items-center flex-1">
                <span className="text-lg font-bold">0</span>

                <ProgressStat
                  progressV={0}
                  translateNegative={false}
                  bgColor="orange"
                />
              </div>
              <div className="flex gap-4 items-center flex-1">
                <ProgressStat progressV={0} bgColor="aqua" />
                <span className="text-lg font-bold">0</span>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <h2 className="text-center text-xs text-dark-200 mb-1">Lost</h2>
            <div className="flex gap-4 ">
              <div className="flex gap-4 items-center flex-1">
                <span className="text-lg font-bold">2</span>

                <ProgressStat
                  progressV={20}
                  translateNegative={false}
                  bgColor="orange"
                />
              </div>
              <div className="flex gap-4 items-center flex-1">
                <ProgressStat progressV={60} bgColor="aqua" />
                <span className="text-lg font-bold">6</span>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <h2 className="text-center text-xs text-dark-200 mb-1">
              Goal Scored
            </h2>
            <div className="flex gap-4 ">
              <div className="flex gap-4 items-center flex-1">
                <span className="text-lg font-bold">8</span>

                <ProgressStat
                  progressV={70}
                  translateNegative={false}
                  bgColor="orange"
                />
              </div>
              <div className="flex gap-4 items-center flex-1">
                <ProgressStat progressV={35} bgColor="aqua" />
                <span className="text-lg font-bold">3</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark rounded-2xl mb-5 pt-3 pb-5 px-1">
        <div className="bg-black flex justify-between items-center gap-3 p-3 text-dark-200 font-semibold rounded-full text-xs">
          <div className="flex items-center gap-2">
            <Image
              src="/manCity.png"
              alt="Sportbet logo"
              height={22}
              width={22}
            />
            <h2>Premier League</h2>
          </div>
          <span>All Matches</span>
        </div>
        <div className="mt-4">
          <Match />
          <Match />
          <Match />
        </div>
      </div>
    </div>
  );
}

export default H2H;

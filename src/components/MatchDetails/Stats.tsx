import React from "react";
import ProgressStat from "./Progress";

function Stats() {
  return (
    <div className="bg-[#1B1B1B] rounded-2xl mb-5 pt-3 pb-5 px-2">
      <div className="mb-3">
        <h2 className="text-center text-xs text-dark-200 mb-1">
          Shots on target
        </h2>
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
            <span className="text-lg font-bold">8</span>
          </div>
        </div>
      </div>

      <div className="mb-3">
        <h2 className="text-center text-xs text-dark-200 mb-1">
          Shots off target
        </h2>
        <div className="flex gap-4 ">
          <div className="flex gap-4 items-center flex-1">
            <span className="text-lg font-bold">5</span>

            <ProgressStat
              progressV={60}
              translateNegative={false}
              bgColor="orange"
            />
          </div>
          <div className="flex gap-4 items-center flex-1">
            <ProgressStat progressV={50} bgColor="aqua" />
            <span className="text-lg font-bold">3</span>
          </div>
        </div>
      </div>

      <div className="mb-3">
        <h2 className="text-center text-xs text-dark-200 mb-1">Possession</h2>
        <div className="flex gap-4 ">
          <div className="flex gap-4 items-center flex-1">
            <span className="text-lg font-bold">66%</span>

            <ProgressStat
              progressV={66}
              translateNegative={false}
              bgColor="orange"
            />
          </div>
          <div className="flex gap-4 items-center flex-1">
            <ProgressStat progressV={34} bgColor="aqua" />
            <span className="text-lg font-bold">34%</span>
          </div>
        </div>
      </div>

      <div className="mb-3">
        <h2 className="text-center text-xs text-dark-200 mb-1">Corner kicks</h2>
        <div className="flex gap-4 ">
          <div className="flex gap-4 items-center flex-1">
            <span className="text-lg font-bold">7</span>

            <ProgressStat
              progressV={60}
              translateNegative={false}
              bgColor="orange"
            />
          </div>
          <div className="flex gap-4 items-center flex-1">
            <ProgressStat progressV={20} bgColor="aqua" />
            <span className="text-lg font-bold">2</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;

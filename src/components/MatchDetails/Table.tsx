import React from "react";
import Image from "next/image";

function LeagueTable() {
  return (
    <div className="bg-[#1B1B1B] rounded-2xl mb-5 pt-3 pb-5 px-1">
      <div className="bg-black flex justify-between items-center gap-3 p-3 text-dark-200 font-semibold rounded-full text-xs">
        <div className="flex items-center gap-2">
          <Image src="/whoscoreFlag.svg" alt="logo" height={22} width={22} />
          <h2>Premier</h2>
        </div>
        <span className="text-[#67E59A] text-sm">Live</span>
      </div>

      <table className="w-full text-xs mt-2 text-dark-200">
        <thead className="text-left border-b border-b-[#252525]">
          <th className="py-2 px-1">#</th>
          <th className="py-2 px-1">Team</th>
          <th className="py-2 px-1">MP</th>
          <th className="py-2 px-1">W</th>
          <th className="py-2 px-1">L</th>
          <th className="py-2 px-1">D</th>
          <th className="py-2 px-1 text-white">Pts</th>
          <th className="py-2 px-1">GF</th>
          <th className="py-2 px-1">GD</th>
          <th className="py-2 px-1">GA</th>
        </thead>

        <tbody className="text-left">
          <tr className="border-b border-b-[#252525]">
            <td className="py-2 px-1">1</td>
            <td className="py-2 px-1">
              <div className="flex gap-2 items-center text-dark-200">
                <Image src="/clubs/manCity.png" alt="logo" width={20} height={20} />
                <span>Man City</span>
              </div>
            </td>
            <td className="py-2 px-1">4</td>
            <td className="py-2 px-1">8</td>
            <td className="py-2 px-1">12</td>
            <td className="py-2 px-1">4</td>
            <td className="py-2 px-1 text-white">8</td>
            <td className="py-2 px-1">12</td>
            <td className="py-2 px-1">8</td>
            <td className="py-2 px-1">12</td>
          </tr>
          <tr className="border-b border-b-[#252525]">
            <td className="py-2 px-1">2</td>
            <td className="py-2 px-1">
              <div className="flex gap-2 items-center text-dark-200">
                <Image src="/clubs/chelsea.png" alt="logo" width={20} height={20} />
                <span>Chelsea</span>
              </div>
            </td>
            <td className="py-2 px-1">4</td>
            <td className="py-2 px-1">0</td>
            <td className="py-2 px-1">12</td>
            <td className="py-2 px-1">4</td>
            <td className="py-2 px-1 text-white">8</td>
            <td className="py-2 px-1">12</td>
            <td className="py-2 px-1">8</td>
            <td className="py-2 px-1">12</td>
          </tr>
          <tr className="border-b border-b-[#252525]">
            <td className="py-2 px-1">3</td>
            <td className="py-2 px-1">
              <div className="flex gap-2 items-center text-dark-200">
                <Image src="/clubs/chelsea.png" alt="logo" width={20} height={20} />
                <span>Chelsea</span>
              </div>
            </td>
            <td className="py-2 px-1">4</td>
            <td className="py-2 px-1">0</td>
            <td className="py-2 px-1">12</td>
            <td className="py-2 px-1">4</td>
            <td className="py-2 px-1 text-white">8</td>
            <td className="py-2 px-1">12</td>
            <td className="py-2 px-1">8</td>
            <td className="py-2 px-1">12</td>
          </tr>
          <tr className="border-b border-b-[#252525]">
            <td className="py-2 px-1">4</td>
            <td className="py-2 px-1">
              <div className="flex gap-2 items-center text-dark-200">
                <Image src="/clubs/chelsea.png" alt="logo" width={20} height={20} />
                <span>Chelsea</span>
              </div>
            </td>
            <td className="py-2 px-1">4</td>
            <td className="py-2 px-1">0</td>
            <td className="py-2 px-1">12</td>
            <td className="py-2 px-1">4</td>
            <td className="py-2 px-1 text-white">8</td>
            <td className="py-2 px-1">12</td>
            <td className="py-2 px-1">8</td>
            <td className="py-2 px-1">12</td>
          </tr>
          <tr className="border-b border-b-[#252525]">
            <td className="py-2 px-1">5</td>
            <td className="py-2 px-1">
              <div className="flex gap-2 items-center text-dark-200">
                <Image src="/clubs/chelsea.png" alt="logo" width={20} height={20} />
                <span>Chelsea</span>
              </div>
            </td>
            <td className="py-2 px-1">4</td>
            <td className="py-2 px-1">0</td>
            <td className="py-2 px-1">12</td>
            <td className="py-2 px-1">4</td>
            <td className="py-2 px-1 text-white">8</td>
            <td className="py-2 px-1">12</td>
            <td className="py-2 px-1">8</td>
            <td className="py-2 px-1">12</td>
          </tr>
          <tr className="border-b border-b-[#252525]">
            <td className="py-2 px-1">6</td>
            <td className="py-2 px-1">
              <div className="flex gap-2 items-center text-dark-200">
                <Image src="/clubs/chelsea.png" alt="logo" width={20} height={20} />
                <span>Chelsea</span>
              </div>
            </td>
            <td className="py-2 px-1">4</td>
            <td className="py-2 px-1">0</td>
            <td className="py-2 px-1">12</td>
            <td className="py-2 px-1">4</td>
            <td className="py-2 px-1 text-white">8</td>
            <td className="py-2 px-1">12</td>
            <td className="py-2 px-1">8</td>
            <td className="py-2 px-1">12</td>
          </tr>
          <tr className="border-b border-b-[#252525]">
            <td className="py-2 px-1">6</td>
            <td className="py-2 px-1">
              <div className="flex gap-2 items-center text-dark-200">
                <Image src="/clubs/chelsea.png" alt="logo" width={20} height={20} />
                <span>Chelsea</span>
              </div>
            </td>
            <td className="py-2 px-1">4</td>
            <td className="py-2 px-1">0</td>
            <td className="py-2 px-1">12</td>
            <td className="py-2 px-1">4</td>
            <td className="py-2 px-1 text-white">8</td>
            <td className="py-2 px-1">12</td>
            <td className="py-2 px-1">8</td>
            <td className="py-2 px-1">12</td>
          </tr>
          <tr className="border-b border-b-[#252525]">
            <td className="py-2 px-1">7</td>
            <td className="py-2 px-1">
              <div className="flex gap-2 items-center text-dark-200">
                <Image src="/clubs/chelsea.png" alt="logo" width={20} height={20} />
                <span>Chelsea</span>
              </div>
            </td>
            <td className="py-2 px-1">4</td>
            <td className="py-2 px-1">0</td>
            <td className="py-2 px-1">12</td>
            <td className="py-2 px-1">4</td>
            <td className="py-2 px-1 text-white">8</td>
            <td className="py-2 px-1">12</td>
            <td className="py-2 px-1">8</td>
            <td className="py-2 px-1">12</td>
          </tr>
          <tr className="border-b border-b-[#252525]">
            <td className="py-2 px-1">8</td>
            <td className="py-2 px-1">
              <div className="flex gap-2 items-center text-dark-200">
                <Image src="/clubs/chelsea.png" alt="logo" width={20} height={20} />
                <span>Chelsea</span>
              </div>
            </td>
            <td className="py-2 px-1">4</td>
            <td className="py-2 px-1">0</td>
            <td className="py-2 px-1">12</td>
            <td className="py-2 px-1">4</td>
            <td className="py-2 px-1 text-white">8</td>
            <td className="py-2 px-1">12</td>
            <td className="py-2 px-1">8</td>
            <td className="py-2 px-1">12</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default LeagueTable;

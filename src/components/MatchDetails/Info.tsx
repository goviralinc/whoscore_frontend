import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCaretRight } from "react-icons/fa6";

function Info() {
  return (
    <div>
      <div className="bg-[#1B1B1B] rounded-2xl mb-5 pt-3 pb-5 px-2">
        <div className="mb-4">
          <p>Halland 4'</p>
          <p className="my-1">Phil Foden 45+1'</p>
          <p>J. Alvarez 87'</p>
        </div>

        <div className="flex justify-between gap-4">
          <div className="text-dark-200">
            <p>Stadium: Ethiad</p>
            <p>Time: Saturday, 16 Sep 2024. 12:30</p>
          </div>

          <button className="bg-black py-1 rounded-full px-4 font-bold">Watch</button>
        </div>
      </div>

      <div>
        <h2 className="text-dark-200">Form</h2>
        <div className="bg-[#1B1B1B] rounded-2xl mb-5 pt-3 pb-5 px-2">
          <div className="grid grid-cols-2 items-center border-b border-b-[#252525] py-2">
            <div className="flex gap-2 items-center text-dark-200">
              <Image src="/clubs/manCity.png" alt="logo" width={20} height={20} />
              <span>Man City</span>
            </div>

            <div className="flex gap-2 ml-auto">
              <div className="shrink-0 w-5 h-5 rounded-full bg-green-20"></div>
              <div className="shrink-0 w-5 h-5 rounded-full bg-green-20"></div>
              <div className="shrink-0 w-5 h-5 rounded-full bg-green-20"></div>
              <div className="shrink-0 w-5 h-5 rounded-full bg-green-20"></div>
              <div className="shrink-0 w-5 h-5 rounded-full bg-green-20"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 items-center border-b border-b-[#252525] py-2">
            <div className="flex gap-2 items-center text-dark-200">
              <Image src="/clubs/manCity.png" alt="logo" width={20} height={20} />
              <span>Chelsea</span>
            </div>

            <div className="flex gap-2 ml-auto">
              <div className="shrink-0 w-5 h-5 rounded-full bg-red-700"></div>
              <div className="shrink-0 w-5 h-5 rounded-full bg-green-20"></div>
              <div className="shrink-0 w-5 h-5 rounded-full bg-red-700"></div>
              <div className="shrink-0 w-5 h-5 rounded-full bg-red-700"></div>
              <div className="shrink-0 w-5 h-5 rounded-full bg-green-20"></div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-dark-200">Table</h2>
        <div className="bg-[#1B1B1B] rounded-2xl mb-5 pt-3 pb-5 px-1">
          <div className="bg-black flex justify-between items-center gap-3 p-3 text-dark-200 font-semibold rounded-full text-xs">
            <div className="flex items-center gap-2">
              <Image src="/whoscoreFlag.svg" alt="logo" height={22} width={22} />
              <h2>Premier</h2>
            </div>
            <span className="text-[#67E59A] text-sm">Live</span>
          </div>

          <table className="w-full text-sm mt-2 text-dark-200">
            <thead className="text-left border-b border-b-[#252525]">
              <th className="py-2">#</th>
              <th className="py-2">Team</th>
              <th className="py-2">MP</th>
              <th className="py-2">GD</th>
              <th className="py-2">Pts</th>
            </thead>

            <tbody className="text-left">
              <tr className="border-b border-b-[#252525]">
                <td className="py-2">1</td>
                <td className="py-2">
                  <div className="flex gap-2 items-center text-dark-200">
                    <Image src="/clubs/manCity.png" alt="logo" width={20} height={20} />
                    <span>Man City</span>
                  </div>
                </td>
                <td className="py-2">4</td>
                <td className="py-2">0</td>
                <td className="py-2">12</td>
              </tr>
              <tr className="border-b border-b-[#252525]">
                <td className="py-2">1</td>
                <td className="py-2">
                  <div className="flex gap-2 items-center text-dark-200">
                    <Image src="/clubs/chelsea.png" alt="logo" width={20} height={20} />
                    <span>Chelsea</span>
                  </div>
                </td>
                <td className="py-2">4</td>
                <td className="py-2">0</td>
                <td className="py-2">12</td>
              </tr>
            </tbody>
          </table>

          <div className="text-center mt-3 text-gray-300">
            <Link href="#">
              Full standings <FaCaretRight className="inline" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;

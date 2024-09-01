import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoCaretBack } from "react-icons/io5";
import Footer from "@/components/Layout/Footer";
import { FaInstagram, FaNairaSign, FaTwitter, FaUser, FaWallet } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { BsArrowDownLeft, BsArrowDownLeftCircle, BsArrowUpRightCircle } from "react-icons/bs";

function Profile() {
  return (
    <div>
      <div className="flex items-center justify-between px-5 gap-4 bg-dark h-12">
        <Link href="/" className="flex gap-2 items-center">
          <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
            <IoCaretBack />
          </div>
          <strong>Profile</strong>
        </Link>

        <div>
          <Image src="/whoscoreFlag.svg" alt="WhoScore logo" width={24} height={24} />
        </div>
      </div>

      <div className="bg-dark px-5 py-4 rounded-bl-[40px] rounded-br-[40px]">
        <div className="flex justify-between gap-4 text-xs">
          <div className="flex items-center gap-4">
            <div className="rounded-full w-16 h-16 bg-[#0E0E0E] shrink-0"></div>
            <div>
              <p className="text-base mb-1">@Chickenpeperenpe</p>
              <span className="text-dark-200">John Doe</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 pt-5">
        <div className="text-lg text-dark-200 w-11/12">
          <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
          <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.</p>
        </div>

        <div className="bg-dark flex gap-2 justify-center items-center rounded-full px-2 py-3 my-5 uppercase">
          <Image src="/manCity.png" alt="Man City logo" width={30} height={30} />
          <span>Man City</span>
          <span className="text-dark-200">favorite football club</span>
        </div>

        <div className="my-5">
          <h2 className="uppercase mb-3">socials</h2>
          <div className="flex gap-4 text-dark-200">
            <div className="flex items-center gap-1">
              <FaInstagramSquare size={20} />
              <span>@dammydesigner</span>
            </div>

            <div className="flex items-center gap-1">
              <FaTwitter size={20} />
              <span>@dammydesigner</span>
            </div>
          </div>
        </div>

        <div className="bg-dark rounded-2xl p-3 my-5 uppercase">
          <h2 className="uppercase mb-3 text-xs text-dark-200 font-semibold">wallet</h2>
          <div className="flex gap-1">
            <FaNairaSign className="text-primary mt-2" />
            <p className="text-6xl">70,000</p>
          </div>

          <div className="mt-3 flex justify-end gap-4">
            <button className="rounded-full flex items-center gap-2 py-3 px-4 border min-w-24 text-primary border-primary">
              Send
              <BsArrowUpRightCircle />
            </button>
            <button className="rounded-full flex items-center gap-2 py-3 px-4 border min-w-24 bg-primary text-white">
              Fund
              <BsArrowDownLeftCircle />
            </button>
          </div>
        </div>

        <div className="my-5">
          <h2 className="uppercase text-dark-200 font-semibold mb-4"></h2>

          <div className="bg-dark flex gap-2 items-center rounded-full px-2 py-3 mb-3">
            <div className="bg-black rounded-full flex justify-center items-center w-10 h-10">
              <FaUser />
            </div>
            <span>User Info</span>
          </div>

          <div className="bg-dark flex gap-2 items-center rounded-full px-2 py-3 mb-3">
            <div className="bg-black rounded-full flex justify-center items-center w-10 h-10">
              <FaWallet />
            </div>
            <span>Wallet Details</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;

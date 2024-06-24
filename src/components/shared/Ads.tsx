"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { FaTimes } from "react-icons/fa";

type TAds = {
  showAds: boolean;
  setShowAds: React.Dispatch<React.SetStateAction<boolean>>;
};

const Ads = ({ showAds, setShowAds }: TAds) => {
  const [counter, setCounter] = useState(5);
  const router = useRouter();

  setTimeout(() => {
    if (counter === 0) {
      return;
    }
    setCounter(counter - 1);
  }, 1100);
  // const redirect = () => {
  //   if (location.pathname !== "/ticketStatus") {
  //     navigate("/ticketStatus");
  //   }
  // };

  return (
    <Dialog.Root
      open={showAds}
      onOpenChange={(open) => !open && setShowAds(false)}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/50 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] h-full w-full translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-black p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <div className="w-full h-full flex flex-col gap-6 overflow-hidden text-center text-white">
            <video
              className="w-full h-5/6 object-cover object-center md:mb-4 border-b border-b-gray-600"
              src="https://res.cloudinary.com/dfhnapzh3/video/upload/v1674325136/accelerated_plus_kpv2cf.mp4"
              autoPlay
              muted
            ></video>

            <div className="px-2 flex ">
              <button
                onClick={() => {
                  setShowAds(!showAds);
                  router.push("/");
                }}
                className="border flex-1  p-2 md:py-3 text-sm border-gray-500 mr-2 uppercase text-gray-200 md:text-inherit rounded disabled:cursor-not-allowed disabled:text-black disabled:bg-blue-300"
                disabled={counter !== 0}
              >
                skip ads {counter === 0 ? "" : "in " + counter}
              </button>
              <a
                href="https://accelerateplus.tv/?fbclid=PAAabvw24Xn-IkxYNCuZNyRWD2b_IfNNDOE4K1bOfNbmjG7iPW8zVh0nNPSFg"
                target="_blank"
                rel="noreferrer"
                className="py-2 px-6 ml-2 flex-1 animate-pulse inline-block md:py-3 text-sm rounded bg-blue-600 uppercase text-black sm:justify-center"
              >
                Sign up
              </a>
            </div>
          </div>

          {/* <Dialog.Close asChild>
            <button
              onClick={() => router.push("/")}
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <FaTimes />
            </button>
          </Dialog.Close> */}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Ads;

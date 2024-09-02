"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Modal from "../Modal";
import { useModal } from "@/lib/providers/modal";

type Props = {
  proceedAction: () => void;
};

const Ads = ({ proceedAction }: Props) => {
  const [counter, setCounter] = useState(5);
  const router = useRouter();

  setTimeout(() => {
    if (counter === 0) {
      return;
    }
    setCounter(counter - 1);
  }, 1100);

  const { hideModal } = useModal();

  return (
    <Modal onClose={hideModal} isAutomatic={false}>
      <div className="w-full h-full flex flex-col gap-6 overflow-hidden text-center text-white">
        <div className="max-h-[28rem] overflow-hidden">
          <video
            className="w-full h-full object-cover object-center md:mb-4 border-b border-b-gray-600"
            src="https://res.cloudinary.com/dfhnapzh3/video/upload/v1674325136/accelerated_plus_kpv2cf.mp4"
            autoPlay
            muted
          ></video>
        </div>

        <div className="px-2 flex ">
          <button
            className="border flex-1  p-2 md:py-3 text-sm border-gray-500 mr-2 uppercase text-gray-200 md:text-inherit rounded disabled:cursor-not-allowed disabled:text-black disabled:bg-blue-300"
            disabled={counter !== 0}
            onClick={proceedAction}
          >
            skip ads {counter === 0 ? "" : "in " + counter}
          </button>
          <Link
            href="https://accelerateplus.tv/?fbclid=PAAabvw24Xn-IkxYNCuZNyRWD2b_IfNNDOE4K1bOfNbmjG7iPW8zVh0nNPSFg"
            target="_blank"
            rel="noreferrer"
            className="py-2 px-6 ml-2 flex-1 animate-pulse inline-block md:py-3 text-sm rounded bg-blue-600 uppercase text-black sm:justify-center"
          >
            Sign up
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default Ads;

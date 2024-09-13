"use client";

import { TerminalIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/Common/Shad/button";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex h-[80vh] w-full flex-col items-center justify-center">
      <div className="my-6 w-[50%] border border-gray-300/20 rounded-md p-4 space-y-1">
        <div className="flex items-center gap-3">
          <TerminalIcon className="h-4 w-4" />
          <p className="font-semibold text-sm">{error.name}</p>
        </div>
        <p className="text-sm">{error.message}</p>
      </div>

      <div className="mt-5 flex items-center">
        <Button variant="outline">
          <Link href={`/`}>Home</Link>
        </Button>
        <Button onClick={() => reset()} className="ml-3">
          Try again
        </Button>
      </div>
    </div>
  );
}

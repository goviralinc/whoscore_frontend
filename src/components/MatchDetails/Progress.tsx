import React, { useState, useEffect } from "react";
import * as Progress from "@radix-ui/react-progress";

type TProgress = {
  progressV: number;
  bgColor?: string;
  translateNegative?: boolean;
};

const ProgressStat = ({
  progressV,
  bgColor = "white",
  translateNegative = true,
}: TProgress) => {
  const [progress, setProgress] = useState(30);

  useEffect(() => {
    setProgress(progressV);
  }, [progressV]);

  return (
    <Progress.Root
      className="relative overflow-hidden bg-black rounded-full flex-1 min-w-[50px] h-[5px]"
      style={{
        transform: "translateZ(0)",
      }}
      value={progress}
    >
      <Progress.Indicator
        className="w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
        style={{
          transform: `translateX(${translateNegative ? "-" : "+"}${
            100 - progress
          }%`,
          backgroundColor: bgColor,
        }}
      />
    </Progress.Root>
  );
};

export default ProgressStat;

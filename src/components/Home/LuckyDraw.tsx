import Image from "next/image";
import React from "react";
// import lottery from "@/../public/assets/lottery/lottery-banner.png";

import Title from "./Title";
import LotteryPrizes from "../Lottery/LotteryPrizes";

const LuckyDraw = () => {
  return (
    <div className="my-10">
      <Title title="Lottery" />

      <Image
        src={"/assets/lottery/lottery-banner.png"}
        width={100}
        height={100}
        alt="lucky draw"
        className="w-full h-auto"
      />

      <div className="relative mt-2">
        <div className="absolute w-[100px] top-0 left-0 h-13 bg-gradient-to-r from-[#00000071] to-transparent z-10"></div>

        <LotteryPrizes />

        <div className="absolute w-[100px] top-0 right-0 h-13 bg-gradient-to-r to-primary/90 from-transparent z-10"></div>
      </div>
    </div>
  );
};

export default LuckyDraw;

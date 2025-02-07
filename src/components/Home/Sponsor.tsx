import Image from "next/image";
import React from "react";

// import ipl from "@/../public/assets/sponsor/ipl.png";
// import fifa from "@/../public/assets/sponsor/fifa.png";
// import xbet from "@/../public/assets/sponsor/1xbet.png";

const Sponsor = () => {
  return (
    <div className="my-7 px-2">
      <h4 className="text-lg text-white font-medium text-center mb-2">
        Our Sponsor
      </h4>

      <div className="flex items-center gap-5 justify-center">
        <Image
          width={100}
          height={100}
          className="w-16 h-auto"
          src={"/assets/sponsor/ipl.png"}
          alt="IPL"
        />
        <Image
          width={100}
          height={100}
          className="w-20 h-auto"
          src={"/assets/sponsor/fifa.png"}
          alt="FiFa"
        />
        <Image
          width={100}
          height={100}
          className="w-20 h-auto"
          src={"/assets/sponsor/1xbet.png"}
          alt="1x Bet"
        />
      </div>
    </div>
  );
};

export default Sponsor;

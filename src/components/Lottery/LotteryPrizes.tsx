import React from "react";
import Image from "next/image";

// import money from "@/../public/assets/money.png";
// import watch from "@/../public/assets/watch.png";
// import iphone from "@/../public/assets/iphone.png";
// import macbook from "@/../public/assets/laptop.png";

const LotteryPrizes = () => {
  return (
    <div className="w-full overflow-hidden whitespace-nowrap mb-4">
      <div className="animate-marquee flex min-w-full  gap-3">
        <div className="flex max-w-[220px] flex-shrink-0 items-center gap-2 relative bg-primary border border-border rounded-sm p-2">
          <Image
            src={"/assets/money.png"}
            width={100}
            height={100}
            alt="Money"
            placeholder="blur"
            className="w-8 h-8 rounded-sm object-cover"
          />
          <span className="text-xs text-white">100,000 Taka</span>
        </div>
        <div className="flex max-w-[220px] flex-shrink-0 items-center gap-2 relative bg-primary border border-border rounded-sm p-2">
          <Image
            src={"/assets/iphone.png"}
            alt="Iphone"
            width={100}
            height={100}
            placeholder="blur"
            className="w-8 h-8 rounded-sm object-cover"
          />
          <span className="text-xs text-white">I Phone</span>
        </div>
        <div className="flex max-w-[220px] flex-shrink-0 items-center gap-2 relative bg-primary border border-border rounded-sm p-2">
          <Image
            placeholder="blur"
            src={"/assets/laptop.png"}
            alt="Mac Book"
            width={100}
            height={100}
            className="w-8 h-8 rounded-sm object-cover"
          />
          <span className="text-xs text-white">Mac Book</span>
        </div>
        <div className="flex max-w-[220px] flex-shrink-0 items-center gap-2 relative bg-primary border border-border rounded-sm p-2">
          <Image
            placeholder="blur"
            src={"/assets/watch.png"}
            alt="Watch"
            width={100}
            height={100}
            className="w-8 h-8 rounded-sm object-cover"
          />
          <span className="text-xs text-white">Apple Watch</span>
        </div>
        <div className="flex max-w-[220px] flex-shrink-0 items-center gap-2 relative bg-primary border border-border rounded-sm p-2">
          <Image
            placeholder="blur"
            src={"/assets/money.png"}
            width={100}
            height={100}
            alt="Money"
            className="w-8 h-8 rounded-sm object-cover"
          />
          <span className="text-xs text-white">50,000 Taka</span>
        </div>
      </div>
    </div>
  );
};

export default LotteryPrizes;

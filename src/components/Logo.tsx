import React from "react";

import Image from "next/image";
// import logo from "@/../public/assets/logo.png";

const Logo = () => {
  return (
    <Image
      src={"/assets/logo.png"}
      width={100}
      height={100}
      alt="Casino Ciry 247"
      className="w-32"
      placeholder="blur"
    />
  );
};

export default Logo;

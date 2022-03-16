import React from "react";

import Image from "next/image";

function MiniMac(props) {
  return (
    <div className={`w-7 h-7 relative ${props.className}`}>
      <Image
        alt="Mac Logo"
        layout="fill"
        objectFit="contain"
        src={require("../../assets/icons/mini_mac.png")}
      ></Image>
    </div>
  );
}

export default MiniMac;

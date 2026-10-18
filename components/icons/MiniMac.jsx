import React from "react";

import Image from "next/image";
import miniMac from "../../assets/icons/mini_mac.png";

function MiniMac(props) {
  return (
    <div className={`relative h-7 w-7 ${props.className}`}>
      <Image
        alt="Mac Logo"
        fill
        style={{ objectFit: "contain" }}
        src={miniMac}
      ></Image>
    </div>
  );
}

export default MiniMac;

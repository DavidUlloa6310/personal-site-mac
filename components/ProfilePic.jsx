import React from "react";

import Image from "next/image";

function ProfilePic(props) {
  return (
    <div
      className={`relative h-64 min-h-[16rem] w-64 min-w-[16rem] select-none sm:h-72 sm:w-72 ${props.className}`}
    >
      <Image
        alt="David Ulloa"
        layout="fill"
        objectFit="contain"
        src={require("../assets/pxArt.png")}
      ></Image>
    </div>
  );
}

export default ProfilePic;

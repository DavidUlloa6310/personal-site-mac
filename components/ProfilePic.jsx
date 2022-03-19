import React from "react";

import Image from "next/image";

function ProfilePic(props) {
  return (
    <div
      className={`w-64 h-64 sm:w-72 sm:h-72 min-w-[16rem] min-h-[16rem] relative select-none ${props.className}`}
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

import React from "react";

import Image from "next/image";
import profilePic from "../assets/profile_pic.jpeg";

function ProfilePic(props) {
  return (
    <div
      className={`relative h-64 min-h-[16rem] w-64 min-w-[16rem] select-none sm:h-72 sm:w-72 ${props.className}`}
    >
      <Image
        className = "grayscale pixelated-effect"
        alt="David Ulloa"
        fill
        style={{ objectFit: "contain" }}
        src={profilePic}
      ></Image>
    </div>
  );
}

export default ProfilePic;

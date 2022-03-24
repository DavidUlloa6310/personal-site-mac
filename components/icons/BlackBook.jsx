import React from "react";

import Image from "next/image";

function BlackBook(props) {
  return (
    <div
      className={`pointer-events-none relative h-12 min-h-[3rem] w-12 min-w-[3rem] ${props.className}`}
    >
      <Image
        alt="YourPapyrs Logo"
        layout="fill"
        objectFit="contain"
        src={require("../../assets/icons/black_book.png")}
      ></Image>
    </div>
  );
}

export default BlackBook;

import React from "react";

import Image from "next/image";

function BlackBook(props) {
  return (
    <div
      className={`w-16 h-16 min-h-[4rem] min-w-[4rem] relative pointer-events-none ${props.className}`}
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

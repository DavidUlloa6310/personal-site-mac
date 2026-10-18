import React from "react";

import Image from "next/image";
import blackBook from "../../assets/icons/black_book.png";

function BlackBook(props) {
  return (
    <div
      className={`pointer-events-none relative h-12 min-h-[3rem] w-12 min-w-[3rem] ${props.className}`}
    >
      <Image
        alt="YourPapyrs Logo"
        fill
        style={{ objectFit: "contain" }}
        src={blackBook}
      ></Image>
    </div>
  );
}

export default BlackBook;

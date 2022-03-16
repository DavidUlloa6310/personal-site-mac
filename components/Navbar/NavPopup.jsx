import React, { useState } from "react";

function NavPopup(props) {
  const data = props.data;

  const [isPopupSelected, setIsPopupSelected] = useState(false);

  if (data === undefined) {
    return <div></div>;
  }

  return (
    <ol
      className={`bg-white border-black border-2 shadow-[2px_2px_0px_0px_#000] ${props.className}`}
    >
      {data.map((item, index) => {
        if (item.break) {
          return (
            <li
              key={index}
              className="object-contain h-1 border-t-2 border-dotted border-gray-500 my-3"
            ></li>
          );
        }
        return (
          <li
            onMouseUp={() => {
              setIsPopupSelected(false);
              props.setIsSelected(false);
            }}
            className={`whitespace-nowrap object-contain px-5 py-2 hover:bg-black hover:text-white`}
            key={index}
          >
            {item.text}
          </li>
        );
      })}
    </ol>
  );
}

export default NavPopup;

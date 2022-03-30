import React, { useState } from "react";

import CommandKey from "../../components/icons/CommandKey";

function NavPopup(props) {
  const data = props.data;

  if (data === undefined) {
    return <div></div>;
  }

  return (
    <ol
      className={`z-10 border-2 border-black bg-white shadow-mac ${props.className}`}
    >
      {data.map((item, index) => {
        if (item.break) {
          return (
            <li
              key={index}
              className="my-3 h-1 select-none border-t-2 border-dotted border-gray-500 object-contain"
            ></li>
          );
        }
        return (
          <li
            onMouseUp={() => {
              props.setIsSelected(false);
            }}
            className={`flex select-none justify-between whitespace-nowrap object-contain px-5 py-2 hover:bg-black hover:fill-white hover:text-white`}
            key={index}
          >
            <h1>{item.text}</h1>
            {item.shortcut && (
              <div className="flex min-w-[100px] flex-row items-center justify-end whitespace-nowrap">
                <CommandKey className=" mx-1 h-5 w-5" />
                {item.shortcut}
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
}

export default NavPopup;

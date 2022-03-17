import React, { useState } from "react";

import CommandKey from "../../components/icons/CommandKey";

function NavPopup(props) {
  const data = props.data;

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
              className="object-contain h-1 border-t-2 border-dotted border-gray-500 my-3 select-none"
            ></li>
          );
        }
        return (
          <li
            onMouseUp={() => {
              props.setIsSelected(false);
            }}
            className={`flex justify-between select-none whitespace-nowrap object-contain px-5 py-2 hover:bg-black hover:text-white hover:fill-white`}
            key={index}
          >
            <h1>{item.text}</h1>
            {item.shortcut && (
              <div className="whitespace-nowrap flex flex-row justify-end items-center min-w-[100px]">
                <CommandKey className=" w-5 h-5 mx-1" />
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

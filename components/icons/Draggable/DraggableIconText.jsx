import React from "react";

function DraggableIconText(props) {
  let isActive = props.isActive;

  return (
    <div
      className={` flex justify-center -my-2 px-2 select-none ${
        isActive ? "bg-black text-white" : "bg-white"
      }`}
    >
      <h2 className="font-monaco text-[26px] h-5 flex justify-center items-center">
        {props.children}
      </h2>
    </div>
  );
}

export default DraggableIconText;

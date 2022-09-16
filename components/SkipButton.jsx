import React from "react";

function SkipButton(props) {
  return (
    <div
      className="absolute right-10 bottom-10 flex h-10 w-24 cursor-macPointer items-center justify-center border-2 border-black bg-white p-1 shadow-mac"
      onClick={props.onClick}
    >
      <h1 className=" font-chicago">Skip</h1>
    </div>
  );
}

export default SkipButton;

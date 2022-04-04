import React from "react";

function WindowBar(props) {
  function generateLines() {
    let lines = [];

    for (let i = 0; i < 4; i++) {
      lines.push(<div className="h-[2px] w-full bg-black"></div>);
    }

    return lines;
  }

  return (
    <nav className="relative flex h-6 flex-row items-center justify-between border-b-2 border-b-black bg-white px-1 py-1">
      <div
        className="z-20 h-full w-4 rounded-sm border-2 border-black bg-white"
        onClick={props.onClose}
      ></div>
      <h1 className="pointer-events-none z-20 flex h-4 flex-col items-center justify-center bg-white px-4 font-chicago text-xs">
        {props.title}
      </h1>
      <div className="relative z-20 h-4 w-4 rounded-sm border-2 border-black bg-white">
        <div className="absolute top-0 left-0 h-2 w-2 border-2 border-t-0 border-l-0 border-black bg-white"></div>
      </div>
      {props.isActive && (
        <div className="absolute left-0 top-0 z-0 flex h-full w-full flex-col justify-between bg-white py-1 px-[.5px]">
          {generateLines().map((el) => el)}
        </div>
      )}
    </nav>
  );
}

export default WindowBar;

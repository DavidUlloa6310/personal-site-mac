import React from "react";

function MacWWW(props) {
  const isActive = props.isActive;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -0.5 32 32"
      shapeRendering="crispEdges"
      className={` h-14 w-14 ${isActive && "fill-black"}`}
    >
      <path
        className={`${isActive && "stroke-white"}`}
        stroke="#000"
        d="M0 0h6M0 1h1m4 0h2M0 2h1m4 0h1m1 0h1m4 0h8M0 3h1m1 0h2m1 0h7m2 0h8M0 4h1m7 0h3m1 0h1m1 0h1m1 0h8M0 5h1m1 0h5m1 0h2m1 0h2m2 0h10M0 6h1m7 0h1m4 0h13M0 7h1m1 0h5m1 0h1m2 0h16M0 8h1m7 0h19M0 9h1m1 0h5m1 0h7m2 0h1m1 0h9M0 10h1m7 0h2m10 0h1m1 0h1m1 0h4M0 11h9m2 0h3m3 0h12M3 12h1m5 0h20M3 13h1m4 0h13m1 0h1m2 0h4M3 14h1m4 0h14m4 0h3M3 15h1m4 0h16m2 0h3M3 16h1m4 0h16m3 0h2M3 17h1m5 0h14m4 0h2M3 18h2m7 0h15M4 19h1m8 0h9m4 0h2M4 20h3m6 0h9m4 0h1m1 0h1M5 21h3m5 0h9m1 0h2m1 0h4M5 22h3m5 0h9m7 0h2M6 23h2m6 0h6m1 0h1m1 0h5m1 0h3M7 24h2m5 0h5m2 0h1m7 0h1m1 0h1M8 25h2m4 0h5m2 0h1m1 0h5m1 0h1m1 0h1m-22 1h3m2 0h3m1 0h3m7 0h1m1 0h1m-20 1h8m1 0h1m1 0h5m1 0h1m1 0h1m-11 1h1m7 0h1m1 0h1m-11 1h9m1 0h1m-9 1h1m7 0h1m-9 1h9"
      />
      <path
        className={`${isActive && "stroke-black"}`}
        stroke="#fff"
        d="M1 1h4M1 2h4m1 0h1M1 3h1m2 0h1m7 0h2M1 4h7m3 0h1m1 0h1m1 0h1M1 5h1m5 0h1m2 0h1m2 0h2M1 6h7m1 0h4M1 7h1m5 0h1m1 0h2M1 8h7M1 9h1m5 0h1m7 0h2m1 0h1M1 10h7m2 0h10m1 0h1m1 0h1M9 11h2m3 0h3M4 12h5m-5 1h4m13 0h1m1 0h2M4 14h4m14 0h4M4 15h4m16 0h2M4 16h4m16 0h3M4 17h5m14 0h4M5 18h7m15 0h1M5 19h8m9 0h4M7 20h6m9 0h4m1 0h1M8 21h5m9 0h1m2 0h1M8 22h5m9 0h7M8 23h6m6 0h1m1 0h1m5 0h1M9 24h5m5 0h2m1 0h7m1 0h1m-21 1h4m5 0h2m1 0h1m5 0h1m1 0h1m-18 1h2m3 0h1m3 0h7m1 0h1m-9 1h1m5 0h1m1 0h1m-9 1h7m1 0h1m-1 1h1m-7 1h7"
      />
    </svg>
  );
}

export default MacWWW;

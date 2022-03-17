import React from "react";
function SvgComponent(props) {
  let isActive = props.isActive;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -0.5 35 26"
      shapeRendering="crispEdges"
      className={`w-16 h-16 z-10 ${isActive && "fill-black"}`}
    >
      <path
        stroke="#000"
        className={`${isActive && "stroke-white"}`}
        d="M4 0h9M3 1h11M2 2h2m9 0h2M1 3h33M0 4h34M0 5h2m31 0h2M0 6h2m31 0h2M0 7h2m31 0h2M0 8h2m31 0h2M0 9h2m31 0h2M0 10h2m31 0h2M0 11h2m31 0h2M0 12h2m31 0h2M0 13h2m31 0h2M0 14h2m31 0h2M0 15h2m31 0h2M0 16h2m31 0h2M0 17h2m31 0h2M0 18h2m31 0h2M0 19h2m31 0h2M0 20h2m31 0h2M0 21h2m31 0h2M0 22h2m31 0h2M0 23h2m31 0h2M0 24h2m2 0h1m3 0h20m5 0h1M0 25h2m1 0h31"
      />
      <path
        stroke="#fff"
        className={`${isActive && "stroke-black"}`}
        d="M4 2h9M2 5h31M2 6h2m1 0h1m1 0h7m1 0h18M2 7h31M2 8h31M2 9h31M2 10h31M2 11h31M2 12h31M2 13h31M2 14h31M2 15h31M2 16h31M2 17h31M2 18h31M2 19h31M2 20h31M2 21h1m1 0h29M2 22h1m1 0h29M2 23h31"
      />
      <path
        stroke="#101010"
        d="M34 4h1"
        className={`${isActive && "stroke-white"}`}
      />
      <path
        stroke="#fefefe"
        d="M4 6h1m1 0h1m7 0h1M3 21h1m-1 1h1"
        className={`${isActive && "stroke-black"}`}
      />
      <path
        stroke="#020202"
        d="M2 24h1"
        className={`${isActive && "stroke-white"}`}
      />
      <path
        stroke="#010101"
        d="M3 24h1m1 0h3m20 0h5m1 0h1M2 25h1m31 0h1"
        className={`${isActive && "stroke-white"}`}
      />
    </svg>
  );
}

export default SvgComponent;

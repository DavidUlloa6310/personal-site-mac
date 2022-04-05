import { useEffect, useState, useRef } from "react";
import Router from "next/router";
import gsap, { CustomEase } from "gsap";

import Macintosh from "../components/Macintosh.jsx";

export default function Home() {
  const [powerColor, setPowerColor] = useState("red");

  useEffect(() => {
    function alternatePowerButton() {
      let macintoshButton = document.getElementById("power_button");
      macintoshButton.style.cursor = "pointer";
      macintoshButton.style.fill = powerColor;
      macintoshButton.onclick = enlargeMacintosh;
      togglePowerColor();
    }

    function togglePowerColor() {
      if (powerColor === "white") {
        setPowerColor("red");
      } else {
        setPowerColor("white");
      }
    }

    const interval = setInterval(alternatePowerButton, 750);
    return () => clearInterval(interval);
  }, [powerColor]);

  function enlargeMacintosh() {
    let timeline = gsap.timeline({ delay: 0 });
    timeline.to("#macintosh", 5.0, {
      scaleX: 20.0,
      ease: "in",
      scaleY: 20.0,
      y: "1800px",
    });
    timeline.add(() => {
      Router.push("/desktop");
    }, 1.5);
    timeline.play();
  }

  return (
    <main className="cotainer flex h-screen w-screen cursor-default flex-col items-center justify-center overflow-hidden">
      <h1 className=" m-9 text-center font-chicago text-4xl leading-[1.5em] sm:text-6xl">
        Macintosh, 1984
      </h1>
      <Macintosh className="ml-4 max-w-xl"></Macintosh>
    </main>
  );
}

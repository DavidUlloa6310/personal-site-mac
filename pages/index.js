import { useEffect, useState, useRef } from "react";
import Router from "next/router";
import gsap, { CustomEase } from "gsap";

import Macintosh from "../components/Macintosh.jsx";

export default function Home() {
  const [powerColor, setPowerColor] = useState("red");

  useEffect(() => {
    function alternatePowerButton() {
      let macintoshButton = document.getElementById("power_button");
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

    const interval = setInterval(alternatePowerButton, 2000);
    return () => clearInterval(interval);
  }, [powerColor]);

  function enlargeMacintosh() {
    let timeline = gsap.timeline({ delay: 0 });
    timeline.to("#macintosh", 5.0, {
      scaleX: 20.0,
      ease: "in",
      scaleY: 20.0,
      y: "2250px",
    });
    timeline.add(() => {
      Router.push("/desktop");
    }, 1.5);
    timeline.play();
  }

  return (
    <main className="flex flex-col justify-center items-center w-screen h-screen overflow-hidden">
      <Macintosh className="max-w-xl"></Macintosh>
    </main>
  );
}

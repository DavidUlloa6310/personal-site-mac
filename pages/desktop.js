import { useRef, useEffect, useState } from "react";
import { IconProvider } from "../utils/IconContext";
import { WindowProvider } from "../utils/WindowContext";
import { ActiveProvider } from "../utils/ActiveContext";

import gsap from "gsap";

import IconList from "../components/icons/Draggable/IconList";
import DraggableIcon from "../components/icons/Draggable/DraggableIcon";
import Navbar from "../components/Navbar/Navbar";
import StartupContainer from "../components/StartupContainer";
import HappyComputer from "../components/icons/HappyComputer";
import HardDrive from "../components/icons/HardDrive";
import WebBrowser from "../components/Window/WebBrowser/WebBrowser";
import WindowList from "../components/Window/WindowList";

function Desktop(props) {
  let main = useRef(null);

  const [showUI, setShowUI] = useState(false);

  function startAnimations() {
    let timeline = gsap.timeline();
    timeline.to("#black_div", 0.35, {
      height: 0,
      ease: "steps(12)",
    });
    timeline.from("#hard_drive", 0.1, {
      opacity: "0",
      ease: "steps(1)",
    });
    timeline.to("#hard_drive", 0.1, {
      opacity: "0",
      ease: "steps(1)",
    });
    timeline.from("#happy_computer", 0.2, {
      opacity: "0",
      ease: "steps(1)",
    });
    timeline.to("#happy_computer", 0.2, {
      delay: 1,
      opacity: "0",
      ease: "steps(1)",
    });
    timeline.from("#startup_container", 0.5, {
      opacity: "0",
      ease: "steps(1)",
    });
    timeline.to("#startup_container", 0.5, {
      delay: 2,
      opacity: "0",
      ease: "steps(1)",
    });
    timeline.add(() => {
      setShowUI(true);
    }, "+=1");
    timeline.play();
  }

  useEffect(() => {
    startAnimations();
  }, []);

  return (
    <ActiveProvider>
      <WindowProvider>
        <IconProvider>
          {!showUI && (
            <div
              id="black_div"
              className=" absolute bottom-0 z-50 h-screen w-screen bg-black"
            ></div>
          )}
          {showUI && <Navbar id="navbar"></Navbar>}
          <main
            ref={main}
            id="desktop_main"
            className=" h-screen w-screen translate-y-[.01rem] select-none bg-black bg-mac-bg bg-[length:1000px_1000px] bg-repeat-round sm:bg-[length:1000px]"
          >
            {!showUI && (
              <>
                <HappyComputer
                  id="happy_computer"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
                />

                <HardDrive
                  id="hard_drive"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
                />

                <StartupContainer
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4 transform"
                  id="startup_container"
                />
              </>
            )}

            <IconList showUI={showUI} />
            <WindowList />
          </main>
        </IconProvider>
      </WindowProvider>
    </ActiveProvider>
  );
}

export default Desktop;

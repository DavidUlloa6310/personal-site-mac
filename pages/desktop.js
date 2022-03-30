import { useRef, useEffect, useState } from "react";

import gsap from "gsap";

import DraggableIcon from "../components/icons/Draggable/DraggableIcon";
import Navbar from "../components/Navbar/Navbar";
import StartupContainer from "../components/StartupContainer";
import HappyComputer from "../components/icons/HappyComputer";
import HardDrive from "../components/icons/HardDrive";
import WebBrowser from "../components/Window/WebBrowser/WebBrowser";

function Desktop(props) {
  let main = useRef(null);

  const [activeWindows, setActiveWindows] = useState([]);

  const [showUI, setShowUI] = useState(false);
  const [icons, setIcons] = useState([
    <DraggableIcon
      key={1}
      bounds={main}
      icon="macWWW"
      name="my website"
      onDoubleClick={() => {
        addWindow(
          <WebBrowser
            key={"web browser"}
            onClose={() => {
              removeWindow("web browser");
            }}
          ></WebBrowser>
        );
      }}
    ></DraggableIcon>,
  ]);

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

  function addIcon(icon) {
    setIcons((prevIcons) => {
      prevIcons.push(icon);
      return prevIcons;
    });
  }

  function addWindow(window) {
    let isDuplicate = false;

    setActiveWindows((prevWindows) => {
      prevWindows.forEach((el) => {
        if (window.key == el.key) isDuplicate = true;
      });

      if (isDuplicate) return [...prevWindows];

      return [...prevWindows, window];
    });
  }

  function removeWindow(windowKey) {
    let windows = [];

    setActiveWindows((prevWindows) => {
      windows = prevWindows.filter((window) => window.key != windowKey);
      console.log(windows);
      return [...windows];
    });
  }

  useEffect(() => {
    startAnimations();
  }, []);

  return (
    <>
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

        {showUI &&
          icons.map((el, index) => {
            return <div key={index}>{el}</div>;
          })}

        {activeWindows.map((el) => {
          return el;
        })}
      </main>
    </>
  );
}

export default Desktop;

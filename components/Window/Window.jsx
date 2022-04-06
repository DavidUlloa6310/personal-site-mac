import React, { useState, useEffect, useRef } from "react";
import { useActiveContext } from "../../utils/ActiveContext";
import { useWindowContext } from "../../utils/WindowContext";
import useOutsideAlerter from "../../utils/useOutsideAlerter";

import WindowBar from "./WindowBar";

import gsap from "gsap";
import Draggable from "react-draggable";

function Window(props) {
  const [isHidden, setIsHidden] = useState(true);

  const { activeItem, setActiveItem } = useActiveContext();
  const { removeWindow } = useWindowContext();

  const windowRef = useRef();
  let startTimeline = useRef();
  let closeTimeline = useRef();

  useEffect(() => {
    startTimeline.current = gsap.timeline({ paused: true });

    startTimeline.current.add(() => {
      if (startTimeline.current.reversed()) removeWindow(props.id);
    });

    startTimeline.current.from(`#${props.id}`, 0.5, {
      scaleX: 0,
      scaleY: 0,
      ease: "steps(12)",
    });

    startTimeline.current.add(() => {
      setIsHidden((prevState) => !prevState);
    });

    closeTimeline.current = gsap.timeline({ paused: true });

    closeTimeline.current.add(() => {
      setIsHidden(true);
    });

    closeTimeline.current.to(`#${props.id}`, 0.5, {
      scaleX: 0,
      scaleY: 0,
      x: window.innerWidth / 2 - windowRef.current.clientWidth / 2,
      y: window.innerHeight / 2 - windowRef.current.clientHeight / 2,
      ease: "steps(12)",
    });

    closeTimeline.current.add(() => {
      removeWindow(props.id);
    });
  }, [props.id, removeWindow]);

  useEffect(() => {
    startTimeline.current.play();
  }, []);

  function setActive() {
    if (props.id != activeItem) setActiveItem(props.id);
  }

  function isActive() {
    return activeItem == props.id;
  }

  function setInactive() {
    setActiveItem("");
  }

  function onClose() {
    closeTimeline.current.play();
  }

  useOutsideAlerter(windowRef, setInactive);

  const windowContent = (
    <div
      onClick={setActive}
      onMouseDown={setActive}
      ref={windowRef}
      className={` ${props.hiddenClassName} ${
        window.innerWidth < 768 ? "h-full w-full" : "w-fit"
      } border-2 border-black shadow-mac`}
      id={props.id}
    >
      {!isHidden && (
        <>
          <WindowBar
            title="My Website"
            onClose={onClose}
            isActive={isActive()}
          />
          {props.children}
        </>
      )}
    </div>
  );

  if (window.innerWidth < 1000) {
    return windowContent;
  }

  return (
    <Draggable bounds="parent" onDrag={setActive}>
      {windowContent}
    </Draggable>
  );
}

export default Window;

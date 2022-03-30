import React, { useState, useEffect, useRef } from "react";
import useOutsideAlerter from "../../utils/useOutsideAlerter";

import WindowBar from "./WindowBar";

import gsap from "gsap";
import Draggable from "react-draggable";

function Window(props) {
  const [isHidden, setIsHidden] = useState(true);
  const [isActive, setIsActive] = useState(true);

  const windowRef = useRef();

  function setActive() {
    setIsActive(true);
  }

  function setInactive() {
    setIsActive(false);
  }

  useOutsideAlerter(windowRef, setInactive);

  useEffect(() => {
    let timeline = gsap.timeline();

    timeline.fromTo(
      `#${props.id}`,
      0.5,
      {
        scaleX: 0,
        scaleY: 0,
      },
      {
        scaleX: 1.0,
        scaleY: 1.0,
        ease: "steps(12)",
      }
    );

    timeline.add(() => {
      setIsHidden(false);
    });

    timeline.play();
  }, [props.id]);

  if (isHidden) {
    return (
      <div
        className={`${props.hiddenClassName} rounded-md border-2 border-black`}
        id={props.id}
      ></div>
    );
  }

  return (
    <Draggable bounds="parent">
      <div
        onMouseDown={setActive}
        ref={windowRef}
        className="w-fit border-2 border-black bg-white shadow-mac"
        id={props.id}
      >
        <WindowBar
          title="My Website"
          onClose={props.onClose}
          isActive={isActive}
        />
        {props.children}
      </div>
    </Draggable>
  );
}

export default Window;

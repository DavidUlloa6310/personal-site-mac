import React, { useState, useEffect, useRef } from "react";
import { useActiveContext } from "../../utils/ActiveContext";
import useOutsideAlerter from "../../utils/useOutsideAlerter";

import WindowBar from "./WindowBar";

import gsap from "gsap";
import Draggable from "react-draggable";

function Window(props) {
  const [isHidden, setIsHidden] = useState(true);

  const { activeItem, setActiveItem } = useActiveContext();

  const windowRef = useRef();

  useEffect(() => {
    let timeline = gsap.timeline();

    timeline.fromTo(
      `#${props.gsapID}`,
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
  }, [props.gsapID]);

  function setActive() {
    if (props.id != activeItem) setActiveItem(props.id);
  }

  function isActive() {
    return activeItem == props.id;
  }

  function setInactive() {
    setActiveItem("");
  }

  useOutsideAlerter(windowRef, setInactive);

  if (isHidden) {
    return (
      <div
        className={`${props.hiddenClassName} rounded-md border-2 border-black`}
        id={props.gsapID}
      ></div>
    );
  }

  return (
    <Draggable bounds="parent" onDrag={setActive}>
      <div
        onClick={setActive}
        onMouseDown={setActive}
        ref={windowRef}
        className="w-fit border-2 border-black bg-white shadow-mac"
        id={props.id}
      >
        <WindowBar
          title="My Website"
          onClose={props.onClose}
          isActive={isActive()}
        />
        {props.children}
      </div>
    </Draggable>
  );
}

export default Window;

import React, { useState, useEffect } from "react";

import gsap from "gsap";

import Draggable from "react-draggable";

function Window(props) {
  const [isHidden, setIsHidden] = useState(true);

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
      <div className="w-fit" id={props.id}>
        {props.children}
      </div>
    </Draggable>
  );
}

export default Window;

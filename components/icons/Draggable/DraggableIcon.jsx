import React, { useState, useRef } from "react";
import useOutsideAlerter from "../../../utils/useOutsideAlerter";

import MacWWW from "./MacWWW";
import Folder from "./Folder";
import DraggableIconText from "./DraggableIconText";

import Draggable from "react-draggable";

function DraggableIcon(props) {
  const [isActive, setIsActive] = useState(false);

  const draggableDiv = useRef();

  const icons = {
    folder: <Folder isActive={isActive}></Folder>,
    macWWW: <MacWWW isActive={isActive}></MacWWW>,
  };

  function handleOutsideClick() {
    setIsActive(false);
  }

  useOutsideAlerter(draggableDiv, handleOutsideClick);

  console.log(props.bounds);

  return (
    <div
      className={`${isActive && " z-50 "}`}
      onMouseDown={() => {
        setIsActive(true);
      }}
    >
      <Draggable
        bounds={"#desktop_main"}
        onDrag={() => {
          setIsActive(true);
        }}
      >
        <div
          ref={draggableDiv}
          className={`flex flex-col justify-center items-center ${props.className}`}
        >
          {icons[props.icon]}
          <DraggableIconText isActive={isActive}>
            {props.name}
          </DraggableIconText>
        </div>
      </Draggable>
    </div>
  );
}

export default DraggableIcon;

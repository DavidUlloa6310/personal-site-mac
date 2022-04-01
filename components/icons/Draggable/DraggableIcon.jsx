import React, { useState, useRef } from "react";
import { useActiveContext } from "../../../utils/ActiveContext";
import useOutsideAlerter from "../../../utils/useOutsideAlerter";

import MacWWW from "./MacWWW";
import Folder from "./Folder";
import DraggableIconText from "./DraggableIconText";

import Draggable from "react-draggable";

function DraggableIcon(props) {
  const { activeItem, setActiveItem } = useActiveContext();

  const draggableDiv = useRef();

  const icons = {
    folder: <Folder isActive={isActive()}></Folder>,
    macWWW: <MacWWW isActive={isActive()}></MacWWW>,
  };

  function setInactive() {
    setActiveItem("");
  }

  function setActive() {
    setActiveItem(props.id);
  }

  function isActive() {
    return activeItem == props.id || activeItem == props.windowID;
  }

  useOutsideAlerter(draggableDiv, setInactive);

  return (
    <div
      id={props.id}
      className={`${
        isActive || (activeItem == props.id && " z-50 ")
      } w-fit min-w-[100px]`}
      onMouseDown={() => {
        setActive();
      }}
      onClick={(e) => {
        setActive();
        if (e.detail == 2 && props.onDoubleClick) {
          props.onDoubleClick();
        }
      }}
    >
      <Draggable
        bounds="#desktop_main"
        onDrag={() => {
          setActive();
        }}
      >
        <div
          ref={draggableDiv}
          className={`flex max-w-fit flex-col items-center justify-center ${props.className}`}
        >
          {icons[props.icon]}
          <DraggableIconText isActive={isActive()}>
            {props.name}
          </DraggableIconText>
        </div>
      </Draggable>
    </div>
  );
}

export default DraggableIcon;

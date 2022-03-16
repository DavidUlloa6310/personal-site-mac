import React, { useState } from "react";

import NavPopup from "./NavPopup";

function NavItem(props) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="relative h-full">
      <li
        className={`flex justify-center items-center h-full px-3 select-none ${
          isSelected && " text-white bg-black fill-white"
        } ${props.className}`}
        onMouseUp={() => setIsSelected(false)}
        onMouseDown={() => setIsSelected(true)}
      >
        {props.children}
      </li>
      {isSelected && (
        <NavPopup
          className="absolute top-[61px] sm:top-[36px] left-0"
          data={props.data}
          setIsSelected={setIsSelected}
        ></NavPopup>
      )}
    </div>
  ); //mouseUpEvent, touchStartEvent
}

export default NavItem;

import React, { useContext } from "react";
import { useIconContext } from "../../../utils/IconContext";

function IconList(props) {
  const { icons, setIcons, addIcon } = useIconContext();

  return (
    <>
      {props.showUI &&
        icons.map((el, index) => {
          return <div key={index}>{el}</div>;
        })}
    </>
  );
}

export default IconList;

import React, { useState, useContext } from "react";
import { useWindowContext } from "./WindowContext";

import WebBrowser from "../components/Window/WebBrowser/WebBrowser";
import DraggableIcon from "../components/icons/Draggable/DraggableIcon";

const IconContext = React.createContext();

export function useIconContext() {
  return useContext(IconContext);
}

export function IconProvider(props) {
  const { windows, setWindows, addWindow, removeWindow } = useWindowContext();

  const [icons, setIcons] = useState([
    <DraggableIcon
      key="my website"
      id="website icon"
      windowID="website browser"
      bounds={"parent"}
      icon="macWWW"
      name="my website"
      onDoubleClick={() => {
        addWindow(
          <WebBrowser
            id="website browser"
            key={"my website"}
            onClose={() => {
              removeWindow("my website");
            }}
          ></WebBrowser>
        );
      }}
    ></DraggableIcon>,
  ]);

  function addIcon(icon) {
    setIcons((prevIcons) => {
      return [...prevIcons, icon];
    });
  }

  return (
    <IconContext.Provider value={{ icons, setIcons, addIcon }}>
      {props.children}
    </IconContext.Provider>
  );
}

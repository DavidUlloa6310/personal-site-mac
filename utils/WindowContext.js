import React, { useState, useContext } from "react";

const WindowContext = React.createContext();

export function useWindowContext() {
  return useContext(WindowContext);
}

export function WindowProvider(props) {
  const [windows, setWindows] = useState([]);

  function addWindow(window) {
    let isDuplicate = false;

    setWindows((prevWindows) => {
      prevWindows.forEach((el) => {
        if (window.key == el.key) isDuplicate = true;
      });

      if (isDuplicate) return [...prevWindows];

      return [...prevWindows, window];
    });
  }

  function removeWindow(windowKey) {
    let windows = [];

    setWindows((prevWindows) => {
      windows = prevWindows.filter((window) => window.key != windowKey);
      return [...windows];
    });
  }

  return (
    <WindowContext.Provider
      value={{ windows, setWindows, addWindow, removeWindow }}
    >
      {props.children}
    </WindowContext.Provider>
  );
}

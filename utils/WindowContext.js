import React, { useState, useContext, useCallback } from "react";

const WindowContext = React.createContext();

export function useWindowContext() {
  return useContext(WindowContext);
}

export function WindowProvider(props) {
  const [windows, setWindows] = useState([]);

  // Stable callbacks: Window rebuilds its open/close animations whenever
  // removeWindow changes, which would hide every open window.
  const addWindow = useCallback((window) => {
    let isDuplicate = false;

    setWindows((prevWindows) => {
      prevWindows.forEach((el) => {
        if (window.props.id == el.props.id) {
          isDuplicate = true;
        }
      });

      if (isDuplicate) return prevWindows;

      return [...prevWindows, window];
    });
  }, []);

  const removeWindow = useCallback((windowID) => {
    let windows = [];

    setWindows((prevWindows) => {
      windows = prevWindows.filter((window) => window.props.id != windowID);
      return [...windows];
    });
  }, []);

  return (
    <WindowContext.Provider
      value={{ windows, setWindows, addWindow, removeWindow }}
    >
      {props.children}
    </WindowContext.Provider>
  );
}

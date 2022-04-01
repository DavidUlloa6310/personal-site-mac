import React, { useState, useContext, useEffect } from "react";

const ActiveContext = React.createContext();

export function useActiveContext() {
  return useContext(ActiveContext);
}

export function ActiveProvider(props) {
  const [activeItem, setActiveItem] = useState("");

  return (
    <ActiveContext.Provider value={{ activeItem, setActiveItem }}>
      {props.children}
    </ActiveContext.Provider>
  );
}

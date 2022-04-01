import React from "react";
import { useWindowContext } from "../../utils/WindowContext";

function WindowList(props) {
  const { windows } = useWindowContext();

  return <>{windows.map((el) => el)}</>;
}

export default WindowList;

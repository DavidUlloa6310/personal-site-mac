import React, { useEffect } from "react";
import WebBrowser from "./WebBrowser/WebBrowser";

import { useWindowContext } from "../../utils/WindowContext";

function WindowList(props) {
  const { windows, addWindow } = useWindowContext();

  useEffect(() => {
    addWindow(
      <WebBrowser id="website_browser" key={"my website"}></WebBrowser>
    );
  }, []);

  return <>{windows.map((el) => el)}</>;
}

export default WindowList;

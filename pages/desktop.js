import { useRef } from "react";

import DraggableIcon from "../components/icons/Draggable/DraggableIcon";
import Navbar from "../components/Navbar/Navbar";
import StartupContainer from "../components/StartupContainer";
import HappyComputer from "../components/icons/HappyComputer";

function Desktop(props) {
  let main = useRef(null);

  return (
    <>
      <Navbar></Navbar>
      <main
        ref={main}
        id="desktop_main"
        className="flex justify-center items-center bg-black bg-mac-bg bg-repeat-round w-screen h-screen bg-[length:1000px_1000px] sm:bg-[length:1000px] relative"
      >
        <DraggableIcon
          bounds={main}
          icon="folder"
          name="untitled folder"
        ></DraggableIcon>
        <DraggableIcon
          bounds={main}
          icon="macWWW"
          name="untitled folder"
        ></DraggableIcon>
        {/* <MacWWW className=" w-16 h-16" name="my website"></MacWWW> */}
      </main>
    </>
  );
}

export default Desktop;

import { useRef } from "react";
import Image from "next/image";

import Folder from "../components/icons/Folder";
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
        className="flex justify-center items-center bg-black bg-mac-bg bg-repeat-round w-screen h-screen bg-[length:400px_600px] sm:bg-[length:1000px] relative"
      >
        <Folder
          bounds={main}
          className="w-16 h-16 z-10"
          name="untitled folder"
        />
      </main>
    </>
  );
}

export default Desktop;

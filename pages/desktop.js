import Image from "next/image";

import Navbar from "../components/Navbar/Navbar";
import StartupContainer from "../components/StartupContainer";
import HappyComputer from "../components/icons/HappyComputer";

function desktop(props) {
  return (
    <main className="flex justify-center items-center bg-black bg-mac-bg bg-repeat-round w-screen h-screen bg-[length:350px] sm:bg-[length:1000px] relative">
      <Navbar></Navbar>
      <StartupContainer></StartupContainer>
      {/* <HappyComputer></HappyComputer> */}
    </main>
  );
}

export default desktop;

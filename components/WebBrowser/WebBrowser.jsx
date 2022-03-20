import React from "react";

import ProfilePic from "../ProfilePic";
import ProjectList from "./ProjectList";

import Draggable from "react-draggable";

function WebBrowser(props) {
  return (
    <Draggable>
      <div className=" bg-gray-200 border-[1px] border-black rounded-sm w-fit">
        <div className="flex flex-col items-center border-black border-2 bg-white m-[4px] w-[350px] sm:w-[70vw] h-[600px] sm:max-h-[800px] overflow-y-scroll overflow-x-hidden p-7 relative bg-browser-bg bg-repeat-round">
          <h1 className="font-chicago text-sm fixed top-3 right-3 sm:right-8 outline-double p-1 z-50 bg-white">
            Close
          </h1>
          <h1 className="font-chicago text-4xl text-center underline decoration-4 mt-6">
            David Ulloa
          </h1>
          <ProfilePic className="pointer-events-none select-none m-5"></ProfilePic>
          <h3 className="font-monaco text-xl">
            Programmer | Full-Stack Web Developer
          </h3>
          <p className="font-monaco text-lg w-[70%] min-w-[250px]">
            So...I love programming. I wouldn&apos;t spend hours and hours
            working away on my computer making new things if I didn&apos;t. I
            believe that programming is my most powerful tools in changing the
            world and making a difference.
          </p>
          <h2 className="font-chicago text-left m-2 w-[97%] max-w-[900px]">
            Projects
          </h2>
          <ProjectList></ProjectList>
        </div>
      </div>
    </Draggable>
  );
}

export default WebBrowser;

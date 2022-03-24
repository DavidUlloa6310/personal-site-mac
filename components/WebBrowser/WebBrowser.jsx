import React from "react";

import ProfilePic from "../ProfilePic";
import ProjectList from "./ProjectList";

import Draggable from "react-draggable";

function WebBrowser(props) {
  return (
    <Draggable>
      <div className=" w-fit rounded-sm border-[1px] border-black bg-gray-200">
        <div className="relative m-[4px] flex h-[600px] w-[350px] flex-col items-center overflow-x-hidden overflow-y-scroll border-2 border-black bg-white bg-browser-bg bg-repeat-round p-7 sm:max-h-[800px] sm:w-[70vw]">
          <h1 className="fixed top-3 right-3 z-50 cursor-macPointer bg-white p-1 font-chicago text-sm outline-double sm:right-8">
            Close
          </h1>
          <h1 className="mt-6 text-center font-chicago text-4xl underline decoration-4">
            David Ulloa
          </h1>
          <ProfilePic className="pointer-events-none m-5 select-none"></ProfilePic>
          <div className="flex flex-col items-center justify-center font-monaco text-xl">
            <h3 className="font-monaco text-xl">
              Programmer | Full-Stack Web Developer
            </h3>
            <div className="flex space-x-2">
              <a
                href="https://www.linkedin.com/in/david-ulloa-785396184/"
                className=" cursor-macPointer underline decoration-1"
              >
                LinkedIN
              </a>
              <a
                href="https://github.com/DavidUlloa6310"
                className="cursor-macPointer underline decoration-1"
              >
                Github
              </a>
            </div>
            <h3>dulloa6310@gmail.com</h3>
          </div>
          <p className="w-[70%] min-w-[250px] font-monaco text-lg">
            So...I love programming. I wouldn&apos;t spend hours and hours
            working away on my computer making new things if I didn&apos;t. I
            believe that programming is my most powerful tools in changing the
            world and making a difference.
          </p>
          <h2 className="m-2 w-[97%] max-w-[900px] text-left font-chicago">
            Projects
          </h2>
          <ProjectList></ProjectList>
        </div>
      </div>
    </Draggable>
  );
}

export default WebBrowser;

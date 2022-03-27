import React from "react";

import ProfilePic from "../../ProfilePic";

import ProjectList from "./ProjectList";
import Window from "../Window";

import { mainProjects, smallProjects } from "../../../utils/ProjectList";

function WebBrowser(props) {
  return (
    <Window
      hiddenClassName="h-[600px] w-[350px] sm:max-h-[800px] sm:w-[1000px]"
      id="web_browser"
    >
      <div className="w-fit rounded-sm border-[1px] border-black bg-gray-200">
        <div className="relative m-[4px] flex h-[600px] w-[350px] flex-col items-center overflow-x-hidden overflow-y-scroll border-2 border-black bg-white bg-browser-bg bg-repeat-round p-7 sm:max-h-[800px] sm:w-[1000px]">
          <h1
            className="absolute right-3 top-3 z-50 cursor-macPointer bg-white p-1 font-chicago text-sm outline-double sm:right-8"
            onClick={props.onClose}
            onTouchStart={props.onClose}
          >
            Close
          </h1>
          <div className="flex flex-col items-center justify-center space-x-5 sm:flex-row">
            <ProfilePic className="pointer-events-none select-none"></ProfilePic>
            <div className="flex flex-col items-center justify-center font-monaco text-xl">
              <h1 className="m-5 text-center font-chicago text-4xl leading-[3.5rem] underline decoration-4">
                David Ulloa
              </h1>
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
              <a
                href="mailto:dulloa6310@gmail.com"
                className=" cursor-macPointer underline decoration-1"
              >
                <h3>dulloa6310@gmail.com</h3>
              </a>
            </div>
          </div>
          <p className="m-4 w-[70%] min-w-[250px] text-center font-monaco text-lg">
            So...I love programming. I wouldn&apos;t spend hours and hours
            working away on my computer making new things if I didn&apos;t. I
            believe that programming is my most powerful tools in changing the
            world and making a difference.
          </p>

          <ProjectList
            title="Main Projects"
            projects={mainProjects}
          ></ProjectList>

          <ProjectList
            title="Smaller Projects"
            projects={smallProjects}
          ></ProjectList>
        </div>
      </div>
    </Window>
  );
}

export default WebBrowser;

import React from "react";

import ProfilePic from "../../ProfilePic";

import ProjectList from "./ProjectList";
import Window from "../Window";
import WindowBar from "../WindowBar";

import { mainProjects, smallProjects } from "../../../utils/ProjectList";

function WebBrowser(props) {
  return (
    <Window
      hiddenClassName="min-h-[600px] min-w-[350px] sm:max-h-[800px] sm:w-[1000px]"
      gsapID="web_browser"
      id={props.id}
      onClose={props.onClose}
    >
      <div className=" scrollbar relative flex h-full w-fit flex-col items-center overflow-x-hidden overflow-y-scroll bg-white bg-browser-bg bg-repeat-round p-7 pb-24 sm:h-[600px] sm:max-h-[800px] sm:w-[100%]">
        <div className="flex flex-col items-center justify-center space-x-5 sm:flex-row">
          <ProfilePic className="pointer-events-none select-none"></ProfilePic>
          <div className="flex flex-col justify-center font-monaco text-xl">
            <h1 className="text-center font-chicago text-4xl leading-[3.5rem] underline decoration-4">
              David Ulloa
            </h1>
            <h3 className="mb-1 font-monaco text-xl">
              Programmer | Full-Stack Web Developer
            </h3>
            <div className="flex space-x-2">
              <a
                href="https://www.linkedin.com/in/david-ulloa-785396184/"
                className=" cursor-macPointer underline decoration-1"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIN
              </a>
              <a
                href="https://github.com/DavidUlloa6310"
                className="cursor-macPointer underline decoration-1"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href="https://www.dulloa.com/resume.pdf"
                className="cursor-macPointer underline decoration-1"
                target="_blank"
                rel="noreferrer"
              >
                Resume
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
        <p className="m-4 min-w-[250px] max-w-[600px] font-monaco text-lg">
          So...I love programming. I wouldn&apos;t spend hours and hours working
          away on my computer making new things if I didn&apos;t. I believe that
          programming is my most powerful tools in changing the world and making
          a difference.
        </p>

        <ProjectList
          title="Recent Projects"
          projects={mainProjects}
        ></ProjectList>
      </div>
    </Window>
  );
}

export default WebBrowser;

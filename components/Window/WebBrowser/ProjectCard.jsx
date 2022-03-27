import React from "react";

import { FaGithub, FaYoutube } from "react-icons/fa";

function ProjectCard(props) {
  return (
    <div
      className={`relative flex ${
        props.short ? "h-40" : "h-72"
      } w-60 flex-col items-center justify-around rounded-md border-2 border-black`}
    >
      <a
        className={`text max-w-full break-words p-2 text-center font-chicago ${
          props.link && "cursor-macPointer underline hover:text-gray-600"
        }`}
        href={props.link}
      >
        {props.projectName}
      </a>
      {!props.short && props.icon}
      <p className=" m-2 w-[90%] text-center font-monaco leading-snug">
        {props.info}
      </p>
      {!props.short && (
        <>
          <h2 className=" w-[90%] border-b-2 border-dotted border-black font-chicago text-[10px]">
            Tech Stack
          </h2>
          <ol className="m-2 grid w-[90%] grid-flow-row grid-cols-2 items-center justify-center justify-items-center">
            {props.techStack.map((el, index) => {
              return (
                <li key={index} className=" text-md list-disc font-monaco">
                  {el}
                </li>
              );
            })}
          </ol>
        </>
      )}
      <div className="flex w-full items-center justify-start">
        {props.githubLink && (
          <a href={props.githubLink}>
            <FaGithub
              style={{ margin: "5px" }}
              size={25}
              className="cursor-macPointer hover:text-gray-600"
            ></FaGithub>
          </a>
        )}
        {props.youtubeLink && (
          <a href={props.youtubeLink}>
            <FaYoutube
              style={{ margin: "5px" }}
              size={25}
              className="cursor-macPointer hover:text-gray-600"
            ></FaYoutube>
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;

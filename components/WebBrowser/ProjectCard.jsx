import React from "react";

import BlackBook from "../icons/BlackBook";

function ProjectCard(props) {
  return (
    <div className="flex flex-col items-center h-72 w-60 border-black border-2 rounded-md">
      <a
        className={`font-chicago p-2 text break-words max-w-full text-center ${
          props.link && "hover:text-gray-600 underline"
        }`}
        href={props.link && "https://www.google.com"}
      >
        {props.projectName}
      </a>
      {props.icon}
      <p className=" font-monaco w-[90%] text-center m-2">{props.info}</p>
      <h2 className=" border-b-2 border-dotted border-black w-[90%] font-chicago text-[10px]">
        Tech Stack
      </h2>
      <ol className="w-[90%] grid grid-cols-2 grid-rows-2 justify-center justify-items-center items-center m-2">
        {props.techStack.map((el, index) => {
          return (
            <li key={index} className=" font-monaco text-md list-disc">
              {el}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default ProjectCard;

import React from "react";

function ProjectList(props) {
  return (
    <>
      <h2 className="m-2 w-[92%] max-w-[900px] text-left font-chicago">
        {props.title}
      </h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {props.projects.map((el) => {
          return el;
        })}
      </div>
    </>
  );
}

export default ProjectList;

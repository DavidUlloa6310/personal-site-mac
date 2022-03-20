import React from "react";

import ProjectCard from "./ProjectCard";
import BlackBook from "../icons/BlackBook";
import World from "../icons/World";

function ProjectList(props) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      <ProjectCard
        projectName="YourPapyrs.com"
        link="https://www.google.com"
        icon={<BlackBook></BlackBook>}
        info="YourPapyrs.com is a full-stack web application that allows for the posting and sharing of poems."
        techStack={["MongoDB", "Express.JS", "React.JS", "Node.JS"]}
      ></ProjectCard>
      <ProjectCard
        projectName="MiamiYouthClimateSummit.com"
        icon={<World></World>}
        info="Built for the Miami Youth Climate Summit of 2022, the summit had over 500 tickets sold and educated the youth on climate change."
        techStack={["Next.JS", "CSS, HTML"]}
      ></ProjectCard>
      <ProjectCard
        projectName="YourPapyrs"
        icon={<BlackBook></BlackBook>}
        info="YourPapyrs.com is a full-stack web application that allows for the posting and sharing of poems."
        techStack={["MongoDB", "Express.JS", "React.JS", "Node.JS"]}
      ></ProjectCard>
      <ProjectCard
        projectName="YourPapyrs"
        icon={<BlackBook></BlackBook>}
        info="YourPapyrs.com is a full-stack web application that allows for the posting and sharing of poems."
        techStack={["MongoDB", "Express.JS", "React.JS", "Node.JS"]}
      ></ProjectCard>
    </div>
  );
}

export default ProjectList;

import React from "react";

import ProjectCard from "./ProjectCard";
import BlackBook from "../icons/BlackBook";
import HappyComputer from "../icons/HappyComputer";

import { GiEarthAmerica, GiBirdHouse } from "react-icons/gi";
import { FaLock, FaEye } from "react-icons/fa";

function ProjectList(props) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      <ProjectCard
        projectName="YourPapyrs.com"
        link="https://www.yourpapyrs.com"
        icon={<BlackBook></BlackBook>}
        info="YourPapyrs.com is a full-stack web application that allows for the posting and sharing of poems."
        techStack={["MongoDB", "Express.JS", "React.JS", "Node.JS"]}
        githubLink="https://github.com/DavidUlloa6310/YourPapyrs"
      ></ProjectCard>
      <ProjectCard
        projectName="MiamiYouthClimateSummit.com"
        icon={<GiEarthAmerica size={50}></GiEarthAmerica>}
        link="https://www.miamiyouthclimatesummit.com/"
        info="Built for the Miami Youth Climate Summit of 2022, the summit had over 500 tickets sold and educated the youth on climate change."
        techStack={["Next.JS", "CSS, HTML"]}
        githubLink="https://github.com/DavidUlloa6310/miami-youth-climate-summit"
      ></ProjectCard>
      <ProjectCard
        projectName="DULLOA.com"
        icon={
          <HappyComputer className="pointer-events-none h-12 w-12"></HappyComputer>
        }
        link="https://www.dulloa.com/"
        info="This exact personal site you're seeing right now, modeled after the original Macintosh OS."
        techStack={["Next.JS", "Tailwind CSS"]}
        githubLink="https://github.com/DavidUlloa6310/personal-site-mac"
      ></ProjectCard>
      <ProjectCard
        projectName="Encryption For Kids"
        icon={<FaLock size={50}></FaLock>}
        info="A Desktop App for teaching kids how encryption works."
        techStack={["Java"]}
        githubLink="https://github.com/DavidUlloa6310/EncryptionForKids"
        youtubeLink="https://youtu.be/7md3N56ddSM"
      ></ProjectCard>
      <ProjectCard
        projectName="FlappyBird AI"
        icon={<GiBirdHouse size={50}></GiBirdHouse>}
        info="This FlappyBird AI, built using python and neat, trains a model to play FlappyBird using generations or waves of flappy birds."
        techStack={["Python"]}
        githubLink="https://github.com/DavidUlloa6310/FlappyBirdAI"
        youtubeLink="https://youtu.be/eCNuLpdmRpk"
      ></ProjectCard>
      <ProjectCard
        projectName="Motion Detection AI"
        icon={<FaEye size={50} className="min-h-[50px]"></FaEye>}
        info="The program highlights movement and saves time intervals of movement in an excel sheet."
        techStack={["Python", "OpenCV, Pandas"]}
        githubLink="https://github.com/DavidUlloa6310/MotionDetection"
        youtubeLink="https://youtu.be/Pp55YP4TX4s"
      ></ProjectCard>
    </div>
  );
}

export default ProjectList;

import ProjectCard from "../components/Window/WebBrowser/ProjectCard";
import BlackBook from "../components/icons/BlackBook";
import HappyComputer from "../components/icons/HappyComputer";

import { GiEarthAmerica } from "react-icons/gi";

export const mainProjects = [
  <ProjectCard
    key={0}
    projectName="Social Fly"
    info="Breaks down and displays Twitter data using a TensorFlow neural network. Built for ShellHacks 2022, 690 participants."
    techStack={["Next.JS", "Tailwind.CSS", "Python", "Node.JS"]}
    githubLink="https://github.com/Jacob8765/socialfly"
  ></ProjectCard>,
  <ProjectCard
    key={1}
    projectName="Park Hopper"
    link="https://park-hopper.vercel.app/"
    info="Web App to display data on national parks based on a user's search query. Built for PantherHack 2022, 356 participants."
    techStack={["Next.JS", "Tailwind CSS"]}
    githubLink="https://github.com/DavidUlloa6310/park-hopper"
  ></ProjectCard>,
  <ProjectCard
    key={3}
    projectName="MiamiYouthClimateSummit.com"
    icon={<GiEarthAmerica size={50}></GiEarthAmerica>}
    link="https://www.miamiyouthclimatesummit.com/"
    info="Built for the Miami Youth Climate Summit of 2022, the summit had over 500 tickets sold and educated the youth on climate change."
    techStack={["Next.JS", "CSS, HTML"]}
    githubLink="https://github.com/DavidUlloa6310/miami-youth-climate-summit"
  ></ProjectCard>,
  <ProjectCard
    key={2}
    projectName="DULLOA.com"
    icon={
      <HappyComputer className="pointer-events-none h-12 w-12"></HappyComputer>
    }
    link="https://www.dulloa.com/"
    info="This exact personal site you're seeing right now, modeled after the original Macintosh OS."
    techStack={["Next.JS", "Tailwind CSS"]}
    githubLink="https://github.com/DavidUlloa6310/personal-site-mac"
  ></ProjectCard>,
];

export const smallProjects = [
  <ProjectCard
    key={0}
    short
    projectName="Encryption For Kids"
    info="A Desktop App for teaching kids how encryption works."
    techStack={["Java"]}
    githubLink="https://github.com/DavidUlloa6310/EncryptionForKids"
    youtubeLink="https://youtu.be/7md3N56ddSM"
  ></ProjectCard>,
  <ProjectCard
    key={1}
    short
    projectName="FlappyBird AI"
    info="This FlappyBird AI, built using python and neat, trains a model to play FlappyBird using generations or waves of flappy birds."
    techStack={["Python"]}
    githubLink="https://github.com/DavidUlloa6310/FlappyBirdAI"
    youtubeLink="https://youtu.be/eCNuLpdmRpk"
  ></ProjectCard>,
  <ProjectCard
    key={2}
    short
    projectName="Motion AI"
    info="The program highlights movement and saves time intervals of movement in an excel sheet."
    techStack={["Python", "OpenCV, Pandas"]}
    githubLink="https://github.com/DavidUlloa6310/MotionDetection"
    youtubeLink="https://youtu.be/Pp55YP4TX4s"
  ></ProjectCard>,
];

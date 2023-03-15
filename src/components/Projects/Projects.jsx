import Image from "next/image";
import React from "react";
import projects from "./projects.module.css";

const Projects = () => {
  return (
    <div className={projects.main}>
      {/* <h1>Lets see how its look</h1> */}
      <div className={projects.mainC}>
        <div className={projects.mainHolder}>
          <Image src={"/project-4.jpg"} width={600} height={480} />
          <h2>Vinly</h2>
        </div>
        <div className={projects.holder}>
          <div className={projects.inner}>
            <div className={projects.mainHolderL}>
              <Image src={"/project-2.jpg"} width={300} height={230} />
              <h2>Hybrid</h2>
            </div>
            <div className={projects.mainHolderL}>
              <Image src={"/project-3.jpg"} width={300} height={230} />
              <h2>Carpet Tiles</h2>
            </div>
          </div>
          <div className={projects.inner}>
            <div className={projects.mainHolderL}>
              <Image src={"/project-1.jpg"} width={300} height={230} />
              <h2>Carpet</h2>
            </div>
            <div className={projects.mainHolderL}>
              <Image src={"/project-5.jpg"} width={300} height={230} />
              <h2>Laminate</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

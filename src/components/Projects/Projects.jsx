import Image from "next/image";
import React from "react";
import projects from "./projects.module.css";
import Link from "next/link";

const Projects = () => {
  return (
    <div className={projects.main}>
      {/* <h1>Lets see how its look</h1> */}
      <div className={projects.mainC}>
        <div className={projects.mainHolder}>
          <Link href={"/products/hybrid/pigyt"}>
            <Image src={"/project-2.jpg"} width={600} height={480} />
            <h3>Hybrid</h3>
          </Link>
        </div>
        <div className={projects.holder}>
          <div className={projects.inner}>
            <div className={projects.mainHolderL}>
              <Link href={"/products/timber/aus-timber"}>
                <Image src={"/timber.jpg"} width={300} height={230} />
                <h3>Timber</h3>
              </Link>
            </div>
          </div>
          <div className={projects.inner}>
            <div className={projects.mainHolderL}>
              <Link href={"/products/carpet/syfined"}>
                <Image src={"/carpet.jpg"} width={300} height={230} />
                <h3>Carpet</h3>
              </Link>
            </div>
            <div className={projects.mainHolderL}>
              <Link href={"/products/laminate/fisiyon"}>
                <Image src={"/project-5.jpg"} width={300} height={230} />
                <h3>Laminate</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

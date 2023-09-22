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
          <Link href={"/products/hybrid/penguin-hybrid"}>
            <Image src={"/project-2.jpg"} width={600} height={480} />
            <h3>Hybrid</h3>
          </Link>
        </div>
        <div className={projects.holder}>
          <div className={projects.inner}>
            <div className={projects.mainHolderL}>
              <Link href={"/products/timber/australian-timber"}>
                <Image src={"/timber.jpg"} width={300} height={230} />
                <h3>Timber</h3>
              </Link>
            </div>
            <div className={projects.mainHolderL}>
              <Image src={"/carpet-tiles.jpeg"} width={300} height={230} />
              <h3>Carpet Tiles</h3>
            </div>
          </div>
          <div className={projects.inner}>
            <div className={projects.mainHolderL}>
              <Image src={"/carpet.jpg"} width={300} height={230} />
              <h3>Carpet</h3>
            </div>
            <div className={projects.mainHolderL}>
              <Link href={"/products/laminate/fusion"}>
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

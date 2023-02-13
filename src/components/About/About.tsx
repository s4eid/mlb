import Image from "next/image";
import React from "react";
import about from "./about.module.css";

function About() {
  return (
    <div id="about" className={about.mainContainer}>
      <div className={about.aboutI}>
        <Image src="/header.jpg" fill alt="about" />
      </div>
      <div className={about.infoHolder}>
        <h1>Our Story</h1>
        <p>
          Rivera’s Floor Covering is a family business that has grown
          exponentially serving the Los Angeles area since 1995. We began
          selling materials, supplies and tools to people within the trade, over
          the years developing strong relationships with installers, contractors
          and other retail outlets. As our business progressed we began to sell
          Carpet, Hardwood Floors, Laminates, Linoleum, and Tile. Our large
          selection means no waiting. Same day installation is no problem for
        </p>
      </div>
    </div>
  );
}

export default About;

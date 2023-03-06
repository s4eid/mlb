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
          The journey of MLB FLOORING started about two years ago with the aim
          of providing and serving customers with the best quality. and also
          with the daily efforts of a professional and experienced team in this
          industry. The biggest and most valuable part is the unrelenting
          efforts of the professional and experienced team for the development
          of this business, which should not be overlooked. Last, and The
          highest goal of this team is to get the pure satisfaction of
          customers, and we will not spare any effort to get it.
        </p>
      </div>
    </div>
  );
}

export default About;

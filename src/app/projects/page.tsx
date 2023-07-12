"use client";
import Gallery from "@/components/Gallery/Gallery";
import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import * as Scroll from "react-scroll";
import projects from "./projects.module.css";
import Link from "next/link";
import Image from "next/image";

function Projects() {
  let Linkk = Scroll.Link;
  const galleryImages = [
    {
      img: "/te_1.jpg",
    },
    {
      img: "/te_2.jpg",
    },
    {
      img: "/te_3.jpg",
    },
    {
      img: "/te_4.jpg",
    },
    {
      img: "/te_5.jpg",
    },
    {
      img: "/te_6.jpg",
    },
    {
      img: "/te_7.jpg",
    },
    {
      img: "/te_8.jpg",
    },
    {
      img: "/te_9.jpg",
    },
    {
      img: "/te_10.jpg",
    },
    {
      img: "/te_11.jpg",
    },
    {
      img: "/te_12.jpg",
    },
  ];

  return (
    <div className={projects.mainC}>
      <div className={projects.headerHolder}>
        <div className={projects.titleC}>
          <h2>Projects</h2>
          {/* <h3>Our Happy Clients</h3> */}
          <h4>
            At MLB Flooring, we're proud to have worked on a variety of flooring
            projects for clients throughout Melbourne and srrounding areas. From
            custom designs to challenging installations, we're committed to
            providing top-quality flooring solutions that meet our clients'
            unique needs.
          </h4>
          <div className={projects.iconHolder}>
            <Linkk
              to="gallery"
              href="#gallery"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <ArrowDownwardIcon fontSize="medium" color="primary" />
            </Linkk>
          </div>
        </div>
        <div className={projects.imageC}>
          <Image
            src="/projects-hero.jpg"
            // width={685}
            // height={560}
            alt="projects"
            fill
          />
        </div>
      </div>
      <Gallery galleryImages={galleryImages} />
    </div>
  );
}

export default Projects;

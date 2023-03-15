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
      img: "/te_2.jpg",
    },
  ];

  return (
    <div className={projects.mainC}>
      <div className={projects.headerHolder}>
        <div className={projects.titleC}>
          <h2>Projects</h2>
          {/* <h3>Our Happy Clients</h3> */}
          <h4>
            default model text, and a search for 'lorem ipsum' will uncover many
            web sites still in their infancy. Various versions have evolved over
            the years, sometimes by accident, sometimes on purpose (injected
            humour and the like).
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

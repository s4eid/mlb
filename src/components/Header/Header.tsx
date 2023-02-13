"use client";
import React from "react";
import Image from "next/image";
import header from "./header.module.css";
import Button from "@mui/material/Button";
import * as Scroll from "react-scroll";

const Header = () => {
  let Link = Scroll.Link;
  return (
    <div id="home" className={header.holder}>
      <div className={header.infoContainer}>
        <h1>MLB Flooring In Au</h1>
        <h2>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer.
        </h2>
        <div className={header.infoBtnContainer}>
          <Button color="secondary" variant="contained">
            <Link
              to="contact"
              href="#contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact With Our Team
            </Link>
          </Button>
          <Button variant="contained">
            <a href="tel:123-456-7890">Call Now</a>
          </Button>
          {/* <button className={header.infoBtn}>Learn More</button>
          <button className={header.callBtn}>Call Now</button> */}
        </div>
      </div>
      <div className={header.heroContainer}>
        <Image alt="header" loading="eager" src="/flooringW.jpg" fill />
      </div>
    </div>
  );
};

export default Header;

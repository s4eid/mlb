"use client";
import React from "react";
import Image from "next/image";
import header from "./header.module.css";
import Button from "@mui/material/Button";
import * as Scroll from "react-scroll";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import StarIcon from "@mui/icons-material/Star";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";

const Header = () => {
  let Link = Scroll.Link;
  return (
    <div id="home" className={header.holder}>
      <div className={header.infoContainer}>
        <h1>MLB Flooring In Au</h1>
        <h2>
          MLB FLOORING is a supply and install Direct Facility offering high
          quality flooring products and services. In MLB FLORRING family we
          proudly serve our state-wide customers Our team offers the product
          knowledge to make your residential or commercial flooring project a
          success.
        </h2>
      </div>
      <div className={header.holderI}>
        <div className={header.holderIconC}>
          <div className={header.iconC}>
            <CheckBoxIcon
              fontSize="large"
              color="primary"
              sx={{ margin: "auto" }}
            />
          </div>
          <p>Quality</p>
        </div>
        <div className={header.holderIconC}>
          <div className={header.iconC}>
            <StarIcon
              fontSize="large"
              color="primary"
              sx={{ margin: "auto" }}
            />
          </div>
          <p>Customer Support</p>
        </div>
        <div className={header.holderIconC}>
          <div className={header.iconC}>
            <LocalAtmIcon
              sx={{ margin: "auto" }}
              fontSize="large"
              color="primary"
            />
          </div>
          <p>Best Price</p>
        </div>
        <div className={header.holderIconC}>
          <div className={header.iconC}>
            <ContentPasteIcon
              sx={{ margin: "auto" }}
              fontSize="large"
              color="primary"
            />
          </div>
          <p>Options</p>
        </div>
      </div>
      {/* <div className={header.heroContainer}>
        <Image alt="header" loading="eager" src="/flooringW.jpg" fill />
      </div> */}
      {/* <div className={header.infoBtnContainer}>
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
        </Button> */}
      {/* <Button variant="contained">
            <a href="tel:123-456-7890">Call Now</a>
          </Button> */}
      {/* <button className={header.infoBtn}>Learn More</button>
          <button className={header.callBtn}>Call Now</button> */}
      {/* </div> */}
    </div>
  );
};

export default Header;

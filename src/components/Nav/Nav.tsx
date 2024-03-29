"use client";
import Image from "next/image";
import React from "react";
import nav from "./nav.module.css";
import { useState } from "react";
import SideBar from "./Sidebar/Sidebar";
import { navSItems } from "data/nav";
import * as Scroll from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import Link from "next/link";

function Nav() {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  let Linkk = Scroll.Link;
  // useEffect(() => {
  //   setNavOpen(false);
  // }, [Scroll]);
  return (
    <div className={nav.mainContainer}>
      <div className={nav.logoHolder}>
        <Link
          // to=""
          href="/"
          // spy={true}
          // smooth={true}
          // offset={50}
          // duration={500}
        >
          MLB FLOORING
          {/* <Image src={"/logo.jpeg"} alt="logo" fill /> */}
        </Link>
      </div>
      <div className={nav.navigation}>
        <ul className={nav.navigationHolder}>
          <li>
            <Link
              legacyBehavior
              // to="home"
              href="/"
              // spy={true}
              // smooth={true}
              // offset={50}
              // duration={500}
            >
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link
              legacyBehavior
              // to="about"
              href="/about"
              // spy={true}
              // smooth={true}
              // offset={50}
              // duration={500}
            >
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link
              // to="testimonials"
              legacyBehavior
              href="/projects"
              // spy={true}
              // smooth={true}
              // offset={50}
              // duration={500}
            >
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link
              legacyBehavior
              // to="team"
              href="/products"
              // spy={true}
              // smooth={true}
              // offset={50}
              // duration={500}
            >
              <a>Products</a>
            </Link>
          </li>
          <li>
            <Link
              legacyBehavior
              // to="contact"
              href="/contact"
              // spy={true}
              // smooth={true}
              // offset={50}
              // duration={500}
            >
              <a>Contact</a>
            </Link>
          </li>
        </ul>
        <div className={nav.burger}>
          <MenuIcon
            color="primary"
            fontSize="large"
            onClick={() => {
              setNavOpen(!navOpen);
            }}
          />
          {/* <Image
            onClick={() => {
              setNavOpen(!navOpen);
            }}
            src="/navigation-bar.png"
            width={35}
            height={35}
            alt="burger"
          /> */}
        </div>
        <SideBar setOpen={setNavOpen} navItems={navSItems} isOpen={navOpen} />
      </div>
      <div>
        <Link href={"/contact"}>
          <Button variant="contained">Free Quote</Button>
        </Link>
      </div>
    </div>
  );
}

export default Nav;

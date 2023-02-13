"use client";
import Image from "next/image";
import React from "react";
import nav from "./nav.module.css";
import { useState } from "react";
import SideBar from "./Sidebar/Sidebar";
import { navSItems } from "data/nav";
import * as Scroll from "react-scroll";

function Nav() {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  let Link = Scroll.Link;
  // useEffect(() => {
  //   setNavOpen(false);
  // }, [Scroll]);
  return (
    <div className={nav.mainContainer}>
      <div className={nav.logoHolder}>
        <Link
          to="home"
          href="#"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <Image src={"/logo.jpeg"} alt="logo" fill />
        </Link>
      </div>
      <div className={nav.navigation}>
        <ul className={nav.navigationHolder}>
          <li>
            <Link
              to="home"
              href="#"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link
              to="about"
              href="#about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              href="#testimonials"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <a>Testimonials</a>
            </Link>
          </li>
          <li>
            <Link
              to="team"
              href="#team"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <a>Team</a>
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              href="#contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <a>Contact</a>
            </Link>
          </li>
        </ul>
        <div className={nav.burger}>
          <Image
            onClick={() => {
              setNavOpen(!navOpen);
            }}
            src="/navigation-bar.png"
            width={35}
            height={35}
            alt="burger"
          />
        </div>
        <SideBar setOpen={setNavOpen} navItems={navSItems} isOpen={navOpen} />
      </div>
    </div>
  );
}

export default Nav;

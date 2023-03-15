import React from "react";
import sideBar from "./sidebar.module.css";
// import Link from "next/link";
import * as Scroll from "react-scroll";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
interface Props {
  isOpen: boolean;
  navItems: Array<any>;
  setOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}
export default function SideBar({ navItems, isOpen, setOpen }: Props) {
  if (!isOpen) {
    return null;
  }
  let Link = Scroll.Link;
  return (
    <div className={isOpen ? sideBar.container : sideBar.containerClose}>
      <div className={sideBar.closeIcon}>
        <CloseIcon
          onClick={() => {
            setOpen(!isOpen);
          }}
          fontSize="large"
        />
        {/* <Image
          onClick={() => {
            setOpen(!isOpen);
          }}
          src="/close.png"
          width={35}
          height={35}
          alt="burger"
        /> */}
      </div>
      <ul className={sideBar.menuItems}>
        {/* {navItems.map((n) => ( */}
        <Link
          to={"home"}
          href={"#"}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          // key={n.id}
        >
          <li>
            <a>Home</a>
          </li>
        </Link>
        <Link
          to={"about"}
          href={"#about"}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          // key={n.id}
        >
          <li>
            <a>About</a>
          </li>
        </Link>
        <Link
          to={"team"}
          href={"#team"}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          // key={n.id}
        >
          <li>
            <a>Team</a>
          </li>
        </Link>
        <Link
          to={"testimonials"}
          href={"#testimonials"}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          // key={n.id}
        >
          <li>
            <a>Testemonials</a>
          </li>
        </Link>
        <Link
          to={"contact"}
          href={"#contact"}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          // key={n.id}
        >
          <li>
            <a>Contact</a>
          </li>
        </Link>
        {/* // ))} */}
      </ul>
    </div>
  );
}

import React from "react";
import sideBar from "./sidebar.module.css";
// import Link from "next/link";
// import * as Scroll from "react-scroll";
// import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
interface Props {
  isOpen: boolean;
  navItems: Array<any>;
  setOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}
export default function SideBar({ navItems, isOpen, setOpen }: Props) {
  if (!isOpen) {
    return null;
  }
  // let Link = Scroll.Link;
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
        <Link href={"/"}>
          <li>
            <a>Home</a>
          </li>
        </Link>
        <Link href={"/about"}>
          <li>
            <a>About</a>
          </li>
        </Link>
        <Link href={"/projects"}>
          <li>
            <a>Projects</a>
          </li>
        </Link>
        <Link href={"/products"}>
          <li>
            <a>Products</a>
          </li>
        </Link>
        <Link href={"/contact"}>
          <li>
            <a>Contact</a>
          </li>
        </Link>
      </ul>
    </div>
  );
}

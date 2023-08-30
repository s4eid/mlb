import React from "react";
import footer from "./footer.module.css";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import Map from "../Contact/Map/Map";
import Link from "next/link";

function Footer() {
  return (
    <div className={footer.mainC}>
      <div className={footer.linksAndC}>
        <div className={footer.linksContainer}>
          <div className={footer.innerC}>
            <h2>Company</h2>
            <Link href={"/about"}>
              <p>About</p>
            </Link>

            <Link href={"/contact"}>
              <p>Contact</p>
            </Link>
          </div>
          <div className={footer.innerC}>
            <h2>Products</h2>

            <Link href={"/products/laminate/fusion"}>
              <p>Laminate</p>
            </Link>

            <Link href={"/products/hybrid/penguin-hybrid"}>
              <p>Hybrid</p>
            </Link>

            <Link href={"/products/timber"}>
              <p>Timber</p>
            </Link>

            <Link href={"/products/carpet"}>
              <p>Carpet</p>
            </Link>

            <Link href={"/products/carpet_tile"}>Carpet Tile</Link>
          </div>
        </div>
        <div className={footer.iconHolder}>
          <InstagramIcon
            sx={{ cursor: "pointer" }}
            color="therd"
            fontSize="large"
          />
          <TelegramIcon
            sx={{ cursor: "pointer" }}
            color="therd"
            fontSize="large"
          />
          <WhatsAppIcon
            sx={{ cursor: "pointer" }}
            color="therd"
            fontSize="large"
          />
        </div>
      </div>
      <div className={footer.mapC}>
        <Map />
      </div>
      <div className={footer.holderI}>
        <div className={footer.copyC}>
          <p>©2023 Mlb Flooring Australia All Rights Reserved</p>
        </div>
        <div className={footer.addressC}>
          <div className={footer.addressHolder}>
            <h3>Address</h3>
            <p>MLB Flooring PTY LTD 1 Coringa Cl, Vermont VIC 3133</p>
          </div>
          <div className={footer.addressHolder}>
            <h3>Phone</h3>
            <p>0410 700 727</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

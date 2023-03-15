import React from "react";
import footer from "./footer.module.css";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import Map from "../Contact/Map/Map";

function Footer() {
  return (
    <div className={footer.mainC}>
      <div className={footer.linksAndC}>
        <div className={footer.linksContainer}>
          <div className={footer.innerC}>
            <h2>Company</h2>
            <p>About</p>
            <p>Contact</p>
          </div>
          <div className={footer.innerC}>
            <h2>Products</h2>
            <p>Laminate</p>
            <p>Carpet</p>
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
      <div className={footer.holderI}>
        <div className={footer.copyC}>
          <p>©2023 Mlb Flooring Australia All Rights Reserved</p>
        </div>
        <div className={footer.addressC}>
          <div className={footer.addressHolder}>
            <h3>Address</h3>
            <p>3/16 Malvern St, Bayswater VIC 3153</p>
          </div>
          <div className={footer.addressHolder}>
            <h3>Phone</h3>
            <p>+9055101955</p>
          </div>
        </div>
      </div>
      <div className={footer.mapC}>
        <Map />
      </div>
    </div>
  );
}

export default Footer;

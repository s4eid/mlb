import React from "react";
import footer from "./footer.module.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
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

            <Link href={"/products/laminate/fisiyon"}>
              <p>Laminate</p>
            </Link>

            <Link href={"/products/hybrid/pigyt"}>
              <p>Hybrid</p>
            </Link>

            <Link href={"/products/timber/aus-timber"}>
              <p>Timber</p>
            </Link>

            <Link href={"/products/carpet/syfined"}>
              <p>Carpet</p>
            </Link>
          </div>
        </div>
        <div className={footer.iconHolder}>
          <Link href={"https://www.instagram.com/mlb__flooring/"}>
            <InstagramIcon
              sx={{ cursor: "pointer" }}
              color="therd"
              fontSize="large"
            />
          </Link>
          {/* <TelegramIcon
            sx={{ cursor: "pointer" }}
            color="therd"
            fontSize="large"
          /> */}
          <a
            // target="_blank"
            href="https://api.whatsapp.com/send?phone=610410700727&text="
            // className={.whatsappbutton}
          >
            <WhatsAppIcon
              sx={{ cursor: "pointer" }}
              color="therd"
              fontSize="large"
            />
          </a>
          <a
            // target="_blank"
            href="https://www.facebook.com/people/MLB-Flooring/100078899708860"
            // className={.whatsappbutton}
          >
            <FacebookIcon
              sx={{ cursor: "pointer" }}
              color="therd"
              fontSize="large"
            />
          </a>
        </div>
      </div>
      <div className={footer.mapC}>
        <Map />
      </div>
      <div className={footer.holderI}>
        <div className={footer.copyC}>
          <p>©2024 Mlb Flooring Australia All Rights Reserved</p>
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

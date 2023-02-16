import React from "react";
import contact from "./contact.module.css";
import Image from "next/image";
import ContactF from "./ContactF/ContactF";
// import { withGoogleMap, withScriptjs } from "react-google-maps";
import Map from "./Map/Map";

function Contact() {
  // const MapWrapped = withScriptjs(withGoogleMap(Map));
  return (
    <div id="contact" className={contact.mainContainer}>
      <div className={contact.titleC}>
        <h1>Contact</h1>
      </div>

      <div className={contact.socials}>
        <a>
          <Image alt="linkedin" src={"/linkedin.png"} width={40} height={40} />
        </a>
        <a href="https://www.instagram.com/mlb__flooring/">
          <Image
            alt="instagram"
            src={"/instagram.png"}
            width={40}
            height={40}
          />
        </a>
        <a>
          <Image alt="whatsapp" src={"/whatsapp.png"} width={40} height={40} />
        </a>
      </div>
      <div className={contact.contactC}>
        <ContactF />
        <div className={contact.contactCImage}>
          <Map />
          {/* <MapWrapped
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${"AIzaSyAeeYOoF_3x1faGiepuQyjCHvnJUG5qmGM"}`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          /> */}
          {/* <Image src="/contact.jpg" alt="contact-image" fill /> */}
        </div>
      </div>
      {/* <div className={contact.contactBgC}> */}
      {/* <Image
        className={contact.contactBgC}
        src="/contactBg.svg"
        layout="fill"
        alt="contact-background"

      /> */}
      {/* </div> */}
    </div>
  );
}

export default Contact;

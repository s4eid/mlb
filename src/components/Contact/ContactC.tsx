"use client";
import React from "react";
import contact from "./contact.module.css";
import ContactF from "./ContactF/ContactF";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import BusinessIcon from "@mui/icons-material/Business";
import EmailIcon from "@mui/icons-material/Email";

function ContactC() {
  return (
    <div id="contact" className={contact.mainContainer}>
      <div className={contact.titleC}>
        <h1>Contact Us</h1>
        <h3>
          We know how improvement projects can get daunting. That is why we are
          offering free measurements of your space so you can get the most
          accurate quote and estimate for your project.
        </h3>
      </div>
      <div className={contact.contactC}>
        <ContactF />
        <div className={contact.contactCImage}>
          <div className={contact.holder}>
            <LocalPhoneIcon fontSize="large" color="primary" />
            <h4>1300 470 585</h4>
          </div>
          <div className={contact.holder}>
            <BusinessIcon fontSize="large" color="primary" />
            <h4>
              21 Comben Drive, Werribee, Victoria, Melbourne - 3030, Australia
            </h4>
          </div>
          <div className={contact.holder}>
            <EmailIcon fontSize="large" color="primary" />
            <h4>info@nationalfloors.com.au</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactC;

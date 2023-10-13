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
          We'd love to hear from you!If you have any questions about our
          services or would like to schedule a consultation, please don't
          hesitate to get in touch. You can reach us by phone, email, or by
          filling out the contact form below.
        </h3>
      </div>
      <div className={contact.contactC}>
        <ContactF />
        <div className={contact.contactCImage}>
          <div className={contact.holder}>
            <LocalPhoneIcon fontSize="large" color="primary" />
            <h4>0410 700 727</h4>
          </div>
          <div className={contact.holder}>
            <BusinessIcon fontSize="large" color="primary" />
            <h4>MLB Flooring PTY LTD 1 Coringa Cl, Vermont VIC 3133</h4>
          </div>
          <div className={contact.holder}>
            <EmailIcon fontSize="large" color="primary" />
            <h4>Info@mlbflooring.com.au</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactC;

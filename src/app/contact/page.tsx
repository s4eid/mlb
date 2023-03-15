import React from "react";
import contact from "./contact.module.css";
import ContactC from "@/components/Contact/ContactC";

function Contact() {
  return (
    <div className={contact.mainContainer}>
      <div>
        <ContactC />
      </div>
    </div>
  );
}

export default Contact;

"use client";
import Button from "@mui/material/Button";
import Image from "next/image";
import React from "react";
import about from "./about.module.css";
import Link from "next/link";

function About() {
  return (
    <div className={about.mainContainer}>
      <div className={about.titleC}>
        <h2>MLB FLOORING</h2>
        <h4>Get To Know Us</h4>
      </div>
      <div className={about.holderC}>
        <div className={about.container}>
          <div className={about.imageHolder}>
            <Image
              src="/about-1.webp"
              alt="about-image"
              width={500}
              height={500}
            />
          </div>
          <div className={about.details}>
            <h2>Satisfying Customers Since 1976</h2>
            <h4>
              MLB Flooring has been servicing its customers across the city of
              Melbourne, offering quality flooring products and honest,
              dependable craftsmanship. We're a family-run business that stands
              behind our products and our services with a satisfaction
              guarantee, protecting you and your investment for years to come.
            </h4>

            <Link href={"/contact"}>
              <Button variant="contained" color="primary">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
        <div className={about.containerS}>
          <div className={about.imageHolderS}>
            <Image
              src="/about-2.jpg"
              alt="about-image"
              width={500}
              height={500}
            />
          </div>
          <div className={about.details}>
            <h2>Why Should You Choose Us?</h2>
            <h4>
              Selection: We proudly offer the largest and best selection of
              flooring Our flooring experts have decades of experience helping
              customers find the perfect flooring for their needs.
            </h4>
            <Link href={"/contact"}>
              <Button variant="outlined" color="secondary">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

"use client";
import Clproduct from "@/components/Products/Hybrid/Cl-products/Clproducts";
import React from "react";
import classic from "./classic-hybrid.module.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Link from "next/link";

function Page() {
  const [alignment, setAlignment] = React.useState("classic");

  const handleChange = (event: any, newAlignment: string) => {
    setAlignment(newAlignment);
  };
  return (
    <div className={classic.mainC}>
      <div className={classic.mainNav}>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <Link href={"/products/hybrid/pigyt"}>
            <ToggleButton value="pigyt">Pigyt</ToggleButton>
          </Link>
          <Link href={"/products/hybrid/pisaco"}>
            <ToggleButton value="pisaco">Pisaco</ToggleButton>
          </Link>
          <Link href={"/products/hybrid/classic"}>
            <ToggleButton value="classic">Classic</ToggleButton>
          </Link>
          <Link href={"/products/hybrid/herringbone"}>
            <ToggleButton value="classic">Herringbone</ToggleButton>
          </Link>
        </ToggleButtonGroup>
      </div>
      <div className={classic.infoC}>
        <div className={classic.container}>
          <div className={classic.sliderWrapper}>
            <div className={classic.slider}>
              <img id="slide1" src="/cl-sample.jpg" alt="supplier-logo" />
            </div>
            <div className={classic.sliderNav}>
              <a href="#slide1"></a>
              <a href="#slide2"></a>
              <a href="#slide3"></a>
            </div>
          </div>
        </div>
        <div className={classic.infoH}>
          <p>
            Classic Hybrid, the epitome of sophistication and practicality in
            flooring solutions. Crafted with precision and designed to elevate
            your living spaces, Classic Hybrid seamlessly blends timeless
            aesthetics with cutting-edge technology.
          </p>
        </div>
      </div>
      <Clproduct />
    </div>
  );
}

export default Page;

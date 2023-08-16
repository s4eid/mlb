"use client";
import Pgproducts from "@/components/Products/Hybrid/Pg-products/Pgproducts";
import Image from "next/image";
import React, { useState } from "react";
import penguinH from "./penguin-hybrid.module.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Link from "next/link";

function Page() {
  const [alignment, setAlignment] = React.useState("penguin");

  const handleChange = (event: any, newAlignment: string) => {
    setAlignment(newAlignment);
  };
  return (
    <div className={penguinH.mainC}>
      <div className={penguinH.mainNav}>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <Link href={"/products/hybrid/penguin-hybrid"}>
            <ToggleButton value="penguin">Penguin Hybrid</ToggleButton>
          </Link>
          <Link href={"/products/hybrid/pinaco"}>
            <ToggleButton value="pinaco">Pinaco Hybrid</ToggleButton>
          </Link>
        </ToggleButtonGroup>
      </div>
      <div className={penguinH.infoC}>
        <div className={penguinH.container}>
          <div className={penguinH.sliderWrapper}>
            <div className={penguinH.slider}>
              <img id="slide1" src="/pg-sample.jpg" alt="supplier-logo" />
              <img id="slide2" src="/pg-sample2.jpg" alt="supplier-logo" />
              <img id="slide3" src="/pg-sample3.jpg" alt="supplier-logo" />
            </div>
            <div className={penguinH.sliderNav}>
              <a href="#slide1"></a>
              <a href="#slide2"></a>
              <a href="#slide3"></a>
            </div>
          </div>
        </div>
        <div className={penguinH.infoH}>
          <Image
            src="/pg-supplier.png"
            width={250}
            height={70}
            alt="supplier-logo"
          />
          <p>
            Penguin Hybrid flooring represents next generation of flooring
            trends. It offers the incredible realistic look and feel of luxury
            vinyl atop a rigid high density limestone solid core board. This
            enables excellent performance characteristics not commonly
            associated within the classic LVT. The plank construction also
            incorporates as robust water based UV coating for everyday scuff
            resistance. Robust wear layer and printed visual decor provides
            realistic timber textures and colours in both Australian timber wood
            species and a contemporary colour palette. Each plank incorporates a
            stabilizing balance layer on the underside with an attached acoustic
            Penguin exclusive foam layer that promotes excellent noise reduction
            performance.
          </p>
        </div>
      </div>
      <Pgproducts />
    </div>
  );
}

export default Page;

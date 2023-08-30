"use client";
import Pi_2_Product from "@/components/Products/Laminate/Pi-2-products/Pi-2-Products";
import React, { useState } from "react";
import pinaco_2 from "./pinaco_2.module.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Link from "next/link";
function Page() {
  const [alignment, setAlignment] = useState("pinaco_2");
  const handleChange = (event: any, newAlignment: string) => {
    setAlignment(newAlignment);
  };
  return (
    <div className={pinaco_2.mainC}>
      <div className={pinaco_2.mainNav}>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <Link href={"/products/laminate/fusion"}>
            <ToggleButton value="penguin">Fusion</ToggleButton>
          </Link>
          <Link href={"/products/laminate/pinaco"}>
            <ToggleButton value="pinaco">Pinaco Delication</ToggleButton>
          </Link>
          <Link href={"/products/laminate/pinaco_2"}>
            <ToggleButton value="pinaco">Pinaco Selection</ToggleButton>
          </Link>
          <Link href={"/products/laminate/australian_sp"}>
            <ToggleButton value="pinaco">Australian Species</ToggleButton>
          </Link>
          <Link href={"/products/laminate/arborlok"}>
            <ToggleButton value="pinaco">Arborlok</ToggleButton>
          </Link>
        </ToggleButtonGroup>
      </div>
      <div className={pinaco_2.infoC}>
        <div className={pinaco_2.container}>
          <div className={pinaco_2.sliderWrapper}>
            <div className={pinaco_2.slider}>
              <img id="slide1" src="/pi-sample.jpg" alt="supplier-logo" />
            </div>
          </div>
        </div>
        <div className={pinaco_2.infoH}>
          <p>
            Pinaco Selection using latest European joining technology to create
            an easier and watertight installation, whilst still combining the
            best of European Oak with a wide range of designer colors, ensuring
            there is a design for every taste.
          </p>
        </div>
      </div>
      <Pi_2_Product />
    </div>
  );
}

export default Page;

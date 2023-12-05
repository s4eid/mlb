"use client";
import Pi_2_Product from "@/components/Products/Laminate/Pi-2-products/Pi-2-Products";
import React, { useState } from "react";
import pinaco_2 from "./pinaco_2.module.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Link from "next/link";
function Page() {
  const [alignment, setAlignment] = useState("pisaco_2");
  const handleChange = (event: any, newAlignment: string) => {
    setAlignment(newAlignment);
  };
  return (
    <div className={pinaco_2.mainC}>
      <div className={pinaco_2.mainNav}>
        <ToggleButtonGroup
          className={pinaco_2.nav}
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <Link href={"/products/laminate/fisiyon"}>
            <ToggleButton className={pinaco_2.linkHolder} value="fisiyon">
              Fisiyon
            </ToggleButton>
          </Link>
          <Link href={"/products/laminate/pisaco"}>
            <ToggleButton className={pinaco_2.linkHolder} value="pisaco">
              Pisaco
            </ToggleButton>
          </Link>
          <Link href={"/products/laminate/pisaco_2"}>
            <ToggleButton className={pinaco_2.linkHolder} value="pisaco_2">
              Pisaco 2
            </ToggleButton>
          </Link>
          <Link href={"/products/laminate/australia_ap"}>
            <ToggleButton className={pinaco_2.linkHolder} value="australia_ap">
              Australia Ap
            </ToggleButton>
          </Link>
          <Link href={"/products/laminate/arolomok"}>
            <ToggleButton className={pinaco_2.linkHolder} value="arolomok">
              Arolomok
            </ToggleButton>
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
            Pisaco using latest European joining technology to create an easier
            and watertight installation, whilst still combining the best of
            European Oak with a wide range of designer colors, ensuring there is
            a design for every taste.
          </p>
        </div>
      </div>
      <Pi_2_Product />
    </div>
  );
}

export default Page;

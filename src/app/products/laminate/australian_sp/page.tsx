"use client";
import AuProducts from "@/components/Products/Laminate/au-products/AuProducts";
import React, { useState } from "react";
import australian from "./australian.module.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Link from "next/link";

function Page() {
  const [alignment, setAlignment] = useState("australian_sp");
  const handleChange = (event: any, newAlignment: string) => {
    setAlignment(newAlignment);
  };
  return (
    <div className={australian.mainC}>
      <div className={australian.mainNav}>
        <ToggleButtonGroup
          color="primary"
          className={australian.nav}
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <Link href={"/products/laminate/fusion"}>
            <ToggleButton className={australian.linkHolder} value="penguin">
              Fusion
            </ToggleButton>
          </Link>
          <Link href={"/products/laminate/pinaco"}>
            <ToggleButton className={australian.linkHolder} value="pinaco">
              Pinaco Delication
            </ToggleButton>
          </Link>
          <Link href={"/products/laminate/pinaco_2"}>
            <ToggleButton className={australian.linkHolder} value="pinaco">
              Pinaco Selection
            </ToggleButton>
          </Link>
          <Link href={"/products/laminate/australian_sp"}>
            <ToggleButton className={australian.linkHolder} value="pinaco">
              Australian Species
            </ToggleButton>
          </Link>
          <Link href={"/products/laminate/arborlok"}>
            <ToggleButton className={australian.linkHolder} value="pinaco">
              Arborlok
            </ToggleButton>
          </Link>
        </ToggleButtonGroup>
      </div>
      <div className={australian.infoC}>
        <div className={australian.container}>
          <div className={australian.sliderWrapper}>
            <div className={australian.slider}>
              <img id="slide1" src="/au-sample.jpg" alt="supplier-logo" />
              {/* <img id="slide2" src="/pg-sample2.jpg" alt="supplier-logo" />
              <img id="slide3" src="/pg-sample3.jpg" alt="supplier-logo" /> */}
            </div>
            {/* <div className={fusion.sliderNav}>
              <a href="#slide1"></a>
              <a href="#slide2"></a>
              <a href="#slide3"></a>
            </div> */}
          </div>
        </div>
        <div className={australian.infoH}>
          {/* <Image
            src="/pinaco-supplier.png"
            width={200}
            height={50}
            alt="supplier-logo"
          /> */}
          <p>
            Be eco-friendly and yet still relish in the design of Mother Nature
            with Floortex’s Australian wood range. Unique to the floortex
            laminate range this new HD Series is patterned from real Australian
            wood grain. Choose from NSW Spotted Gum, Coastal Blackbutt, Sydney
            Blue Gum or Jarrah, you can now enjoy a bit of the “Great Australian
            Outback” by styling your home or office with this unique range that
            has been patterned from four of Australia’s native Eucalyptus trees.
          </p>
        </div>
      </div>
      <AuProducts />
    </div>
  );
}

export default Page;

"use client";
import PiProduct from "@/components/Products/Laminate/Pi-products/PiProducts";
import React, { useState } from "react";
import pinaco from "./pinaco.module.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Link from "next/link";

function Page() {
  const [alignment, setAlignment] = useState("pinaco");
  const handleChange = (event: any, newAlignment: string) => {
    setAlignment(newAlignment);
  };
  return (
    <div className={pinaco.mainC}>
      <div className={pinaco.mainNav}>
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
      <div className={pinaco.infoC}>
        <div className={pinaco.container}>
          <div className={pinaco.sliderWrapper}>
            <div className={pinaco.slider}>
              <img id="slide1" src="/pi-sample.jpg" alt="supplier-logo" />
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
        <div className={pinaco.infoH}>
          {/* <Image
            src="/pinaco-supplier.png"
            width={200}
            height={50}
            alt="supplier-logo"
          /> */}
          <p>
            Pinaco Selection using latest European joining technology to create
            an easier and watertight installation, whilst still combining the
            best of European Oak with a wide range of designer colors, ensuring
            there is a design for every taste.
          </p>
        </div>
      </div>
      <PiProduct />
    </div>
  );
}

export default Page;

"use client";
import Fuproduct from "@/components/Products/Laminate/Fu-products/Fuproducts";
import Image from "next/image";
import React, { useState } from "react";
import fusion from "./fusion.module.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Link from "next/link";

function Page() {
  const [alignment, setAlignment] = useState("fusion");
  const handleChange = (event: any, newAlignment: string) => {
    setAlignment(newAlignment);
  };
  return (
    <div className={fusion.mainC}>
      <div className={fusion.mainNav}>
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
      <div className={fusion.infoC}>
        <div className={fusion.container}>
          <div className={fusion.sliderWrapper}>
            <div className={fusion.slider}>
              <img id="slide1" src="/fu-sample.jpg" alt="supplier-logo" />
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
        <div className={fusion.infoH}>
          <Image
            src="/fusion-supplier.png"
            width={200}
            height={50}
            alt="supplier-logo"
          />
          <p>
            Fusion 3D not only captivates with its exceptional style and natural
            aesthetics but also boasts a robust core structure and a surface
            engineered for water resistance. Its water resistant surface adds an
            additional layer of protection, ensuring peace of mind even in
            moisture-prone environments. With Fusion 3D, you can enjoy the
            perfect blend of captivating design and practical resilience.
          </p>
        </div>
      </div>
      <Fuproduct />
    </div>
  );
}

export default Page;

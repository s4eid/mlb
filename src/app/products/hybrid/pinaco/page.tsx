"use client";
import Piproducts from "@/components/Products/Hybrid/Pi-products/Piproducts";
import React from "react";
import penguinH from "./penguin-hybrid.module.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Link from "next/link";

function Page() {
  const [alignment, setAlignment] = React.useState("pinaco");

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
              <img id="slide1" src="/pinaco.jpg" alt="supplier-logo" />
              {/* <img id="slide2" src="/pg-sample2.jpg" alt="supplier-logo" />
              <img id="slide3" src="/pg-sample3.jpg" alt="supplier-logo" /> */}
            </div>
            {/* <div className={penguinH.sliderNav}>
              <a href="#slide1"></a>
              <a href="#slide2"></a>
              <a href="#slide3"></a>
            </div> */}
          </div>
        </div>
        <div className={penguinH.infoH}>
          {/* <Image
            src="/pg-supplier.png"
            width={250}
            height={70}
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
      <Piproducts />
    </div>
  );
}

export default Page;

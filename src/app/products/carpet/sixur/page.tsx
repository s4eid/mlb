"use client";
import Siproducts from "@/components/Products/Carpet/sixth/Siproducts";
// import Image from "next/image";
import React, { useState } from "react";
import sixth from "./sixth.module.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Link from "next/link";

function Page() {
  const [alignment, setAlignment] = useState("sixur");
  const handleChange = (event: any, newAlignment: string) => {
    setAlignment(newAlignment);
  };
  return (
    <div className={sixth.mainC}>
      <div className={sixth.mainNav}>
        <ToggleButtonGroup
          className={sixth.nav}
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <Link href={"/products/carpet/syfined"}>
            <ToggleButton className={sixth.linkHolder} value="syfined">
              Syfined
            </ToggleButton>
          </Link>
          <Link href={"/products/carpet/sixur"}>
            <ToggleButton className={sixth.linkHolder} value="sixur">
              Sixur
            </ToggleButton>
          </Link>
        </ToggleButtonGroup>
      </div>
      <div className={sixth.infoC}>
        <div className={sixth.container}>
          <div className={sixth.sliderWrapper}>
            <div className={sixth.slider}>
              <img id="slide1" src="/sixur-sample.jpg" alt="supplier-logo" />
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
        <div className={sixth.infoH}>
          {/* <Image
            src="/pinaco-supplier.png"
            width={200}
            height={50}
            alt="supplier-logo"
          /> */}
          <p>
            Sixur is a polyester cut pile twist carpet bringing comfort and
            practicality at an affordable price. Beautifully soft, this carpet
            is perfect for bedrooms and features a versatile colour palette.
          </p>
        </div>
      </div>
      <Siproducts />
    </div>
  );
}

export default Page;

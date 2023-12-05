"use client";
import Reproducts from "@/components/Products/Carpet/refined/Reproducts";
// import Image from "next/image";
import React, { useState } from "react";
import refined from "./refined.module.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Link from "next/link";

function Page() {
  const [alignment, setAlignment] = useState("syfined");
  const handleChange = (event: any, newAlignment: string) => {
    setAlignment(newAlignment);
  };
  return (
    <div className={refined.mainC}>
      <div className={refined.mainNav}>
        <ToggleButtonGroup
          className={refined.nav}
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <Link href={"/products/carpet/syfined"}>
            <ToggleButton className={refined.linkHolder} value="syfined">
              Syfined
            </ToggleButton>
          </Link>
          <Link href={"/products/carpet/sixur"}>
            <ToggleButton className={refined.linkHolder} value="sixur">
              Sixur
            </ToggleButton>
          </Link>
        </ToggleButtonGroup>
      </div>
      <div className={refined.infoC}>
        <div className={refined.container}>
          <div className={refined.sliderWrapper}>
            <div className={refined.slider}>
              <img id="slide1" src="/syfined-sample.jpg" alt="supplier-logo" />
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
        <div className={refined.infoH}>
          {/* <Image
            src="/pinaco-supplier.png"
            width={200}
            height={50}
            alt="supplier-logo"
          /> */}
          <p>
            Syfined is a polyester cut pile twist carpet bringing comfort and
            practicality at an affordable price. Beautifully soft, this carpet
            is perfect for bedrooms and features a versatile colour palette.
          </p>
        </div>
      </div>
      <Reproducts />
    </div>
  );
}

export default Page;

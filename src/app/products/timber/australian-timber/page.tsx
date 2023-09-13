"use client";
import Auproducts from "@/components/Products/Timber/au-timber/Auproducts";
// import Image from "next/image";
import React, { useState } from "react";
import australiansT from "./australian-timber.module.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Link from "next/link";

function Page() {
  const [alignment, setAlignment] = useState("arborlok");
  const handleChange = (event: any, newAlignment: string) => {
    setAlignment(newAlignment);
  };
  return (
    <div className={australiansT.mainC}>
      <div className={australiansT.mainNav}>
        <ToggleButtonGroup
          className={australiansT.nav}
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <Link href={"/products/timber/european-oak"}>
            <ToggleButton className={australiansT.linkHolder} value="penguin">
              European Oak
            </ToggleButton>
          </Link>
          <Link href={"/products/timber/australian-timber"}>
            <ToggleButton className={australiansT.linkHolder} value="pinaco">
              Australian Timber
            </ToggleButton>
          </Link>
        </ToggleButtonGroup>
      </div>
      <div className={australiansT.infoC}>
        <div className={australiansT.container}>
          <div className={australiansT.sliderWrapper}>
            <div className={australiansT.slider}>
              <img id="slide1" src="/au-tsample.jpg" alt="supplier-logo" />
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
        <div className={australiansT.infoH}>
          {/* <Image
            src="/pinaco-supplier.png"
            width={200}
            height={50}
            alt="supplier-logo"
          /> */}
          <p>
            OZ Floor brings the sophistication and warmth of real timber to a
            home in a range of unique Australian hardwood timber species. And
            designed with a quality multi-layer construction, providing a stable
            timber floor with easy installation over a number of surfaces.
          </p>
        </div>
      </div>
      <Auproducts />
    </div>
  );
}

export default Page;

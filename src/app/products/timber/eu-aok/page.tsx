"use client";
import Euproducts from "@/components/Products/Timber/eu-timber/Euproducts";
import React, { useState } from "react";
import eu from "./eu-oak.module.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Link from "next/link";

function Page() {
  const [alignment, setAlignment] = useState("eu-aok");
  const handleChange = (event: any, newAlignment: string) => {
    setAlignment(newAlignment);
  };
  return (
    <div className={eu.mainC}>
      <div className={eu.mainNav}>
        <ToggleButtonGroup
          className={eu.nav}
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <Link href={"/products/timber/eu-aok"}>
            <ToggleButton className={eu.linkHolder} value="eu-aok">
              Eu Aok
            </ToggleButton>
          </Link>
          <Link href={"/products/timber/aus-timber"}>
            <ToggleButton className={eu.linkHolder} value="aus-timber">
              Aus Timber
            </ToggleButton>
          </Link>
        </ToggleButtonGroup>
      </div>
      <div className={eu.infoC}>
        <div className={eu.container}>
          <div className={eu.sliderWrapper}>
            <div className={eu.slider}>
              <img id="slide1" src="/eu-sample.jpg" alt="supplier-logo" />
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
        <div className={eu.infoH}>
          {/* <Image
            src="/pinaco-supplier.png"
            width={200}
            height={50}
            alt="supplier-logo"
          /> */}
          <p>
            Aok Floor Oak range engineered flooring brings you the best of both
            worlds: a stylish timber look in a wide range of modern and classic
            colors to suit any home and environment, plus the durability and
            luxury of Engineered European Oak. OZ Floor Oak range makes it easy
            for you to create the look you want, without the expense of
            traditional solider timber.
          </p>
        </div>
      </div>
      <Euproducts />
    </div>
  );
}

export default Page;

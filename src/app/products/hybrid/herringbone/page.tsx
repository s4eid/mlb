"use client";
import HeProducts from "@/components/Products/Hybrid/He-products/Heproducts";
import React from "react";
import herringbone from "./herringbone-hybrid.module.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Link from "next/link";

function Page() {
  const [alignment, setAlignment] = React.useState("herringbone");

  const handleChange = (event: any, newAlignment: string) => {
    setAlignment(newAlignment);
  };
  return (
    <div className={herringbone.mainC}>
      <div className={herringbone.mainNav}>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <Link href={"/products/hybrid/pigyt"}>
            <ToggleButton value="pigyt">Pigyt</ToggleButton>
          </Link>
          <Link href={"/products/hybrid/pisaco"}>
            <ToggleButton value="pisaco">Pisaco</ToggleButton>
          </Link>
          <Link href={"/products/hybrid/classic"}>
            <ToggleButton value="classic">Classic</ToggleButton>
          </Link>
          <Link href={"/products/hybrid/herringbone"}>
            <ToggleButton value="classic">Herringbone</ToggleButton>
          </Link>
        </ToggleButtonGroup>
      </div>
      <div className={herringbone.infoC}>
        <div className={herringbone.container}>
          <div className={herringbone.sliderWrapper}>
            <div className={herringbone.slider}>
              <img id="slide1" src="/he-sample.jpg" alt="supplier-logo" />
              <img id="slide2" src="/he-sample2.jpg" alt="supplier-logo" />
              <img id="slide3" src="/he-sample3.jpg" alt="supplier-logo" />
            </div>
            <div className={herringbone.sliderNav}>
              <a href="#slide1"></a>
              <a href="#slide2"></a>
              <a href="#slide3"></a>
            </div>
          </div>
        </div>
        <div className={herringbone.infoH}>
          <p>
            Herringbone Hybrid is a trendy choice for flooring due to its
            aesthetic qualities, resilience, simple installation, resistance to
            water, and cost-efficiency
          </p>
        </div>
      </div>
      <HeProducts />
    </div>
  );
}

export default Page;

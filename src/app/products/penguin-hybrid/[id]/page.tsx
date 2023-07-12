"use client";
import SliderC from "@/components/Slide/Slide";
import { useState } from "react";
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import product from "./product.module.css";

function Product() {
  let img = ["/sample-PG1501-1.jpg", "/sample-PG1502-1.jpg"];
  const [detail, setDetail] = useState(true);
  return (
    <div className={product.mainC}>
      <div className={product.title}>
        <h2>LX09/ Champagne</h2>
      </div>
      <div className={product.container}>
        <div className={product.imageHolder}>
          <SliderC imgs={img} />
        </div>
        <div className={product.infoHolder}>
          <div className={product.holder}>
            <p>
              Floortex Classic laminated range is an adventure into exciting
              floor covers. With classical and gorgeous design, it is more than
              just a laminated floor. The designer colours create an
              unforgettable piece in any interior design and are sure to impress
              any visitors. With advanced scratch guard technology, the flooring
              easily withstands the rigors of daily living. Designer colours and
              smart technology combines to create the perfect balance between
              style and a natural atmosphere.
            </p>
          </div>
          <div className={product.info}>
            <div className={product.infoH}>
              <h4>Code & Name:</h4>
              <p>LX09/ Champagne</p>
            </div>
            <div className={product.infoH}>
              <h4>Length Size:</h4>
              <p>1220 (L) x165 (W) x12 (T)mm</p>
            </div>
            <div className={product.infoH}>
              <h4>Finish:</h4>
              <p>High Gloss</p>
            </div>
          </div>
        </div>
      </div>
      <div className={product.moreDContainer}>
        <div className={product.moreDNav}>
          <Button
            onClick={() => setDetail(true)}
            variant={detail ? "contained" : "outlined"}
            // color="therd"
          >
            Features
          </Button>
          <Button
            onClick={() => setDetail(false)}
            variant={!detail ? "contained" : "outlined"}
            // color="therd"
          >
            Technical Data
          </Button>
        </div>
        <div className={product.detailC}>
          {detail ? (
            <p>
              10 times more scratch resistant Designed to create a gloss surface
              with a natural variance between the planks. Easy installation
              using the Drop Lock system Superior technical performance
              Environmentally sound with PEFC and EPD certification Micro bevel
              edge
            </p>
          ) : (
            <div className={product.info}>
              <div className={product.infoH}>
                <h4>Code & Name:</h4>
                <p>LX09/ Champagne</p>
              </div>
              <div className={product.infoH}>
                <h4>Length Size:</h4>
                <p>1220 (L) x165 (W) x12 (T)mm</p>
              </div>
              <div className={product.infoH}>
                <h4>Finish:</h4>
                <p>High Gloss</p>
              </div>
              <div className={product.infoH}>
                <h4>Thickness:</h4>
                <p>18mm</p>
              </div>
              <div className={product.infoH}>
                <h4>Width Option:</h4>
                <p>130mm / 127mm / 92mm / 85mm / 75mm</p>
              </div>
              <div className={product.infoH}>
                <h4>Boards Per Pack:</h4>
                <p>6 or 8 Pcs</p>
              </div>
              <div className={product.infoH}>
                <h4>Surface:</h4>
                <p>Smooth</p>
              </div>
              <div className={product.infoH}>
                <h4>Pack Size:</h4>
                <p>2.42m2 / 1.872m2</p>
              </div>
              <div className={product.infoH}>
                <h4>Application/Use for Residential:</h4>
                <p>Houses, Units</p>
              </div>
              <div className={product.infoH}>
                <h4>Application/Use for Commercial:</h4>
                <p>Office Building, Internal Walkway</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;

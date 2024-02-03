"use client";
import SliderC from "@/components/Slide/Slide";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import React from "react";
import product from "./product.module.css";
import { usePathname } from "next/navigation";
import { heSamples } from "../../../../../../data/samples/hybrid/HeSamples";

function Product() {
  const router = usePathname();
  const [loading, setLoading] = useState(true);
  const [currentP, setCurrentP] = useState({
    name: "",
    img_1: "",
    img_2: "",
    length_size: "",
    water_resistant: "",
    features: "",
  });
  let productId = router?.split("/")[4];
  useEffect(() => {
    heSamples.map((s) => {
      let _name = s.name.replace(/\s/g, "").toLowerCase();
      if (_name == productId) {
        setLoading(false);
        setCurrentP({
          name: s.name,
          length_size: s.length_size,
          water_resistant: s.water_resistant,
          img_1: s.img_1,
          img_2: s.img_2,
          features: s.features,
        });
      }
    });
  }, []);
  let img = [
    `/Samples/Herringbone/${currentP.img_1}`,
    `/Samples/Herringbone/${currentP.img_2}`,
  ];
  const [detail, setDetail] = useState(true);
  return (
    <div className={product.mainC}>
      <div className={product.title}>
        <h2>{currentP.name}</h2>
      </div>
      <div className={product.container}>
        <div className={product.imageHolder}>
          <SliderC imgs={img} />
        </div>
        <div className={product.infoHolder}>
          <div className={product.holder}>
            <p>The Next Generation in High Performance Flooring.</p>
          </div>
          <div className={product.info}>
            <div className={product.infoH}>
              <h4>Code & Name:</h4>
              <p>{currentP.name}</p>
            </div>
            <div className={product.infoH}>
              <h4>Length Size:</h4>
              <p>{currentP.length_size}</p>
            </div>
            <div className={product.infoH}>
              <h4>Water Resistant:</h4>
              <p>{currentP.water_resistant}</p>
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
            <p>{currentP.features}</p>
          ) : (
            <div className={product.info}>
              <div className={product.infoH}>
                <h4>Code & Name:</h4>
                <p>{currentP.name}</p>
              </div>
              <div className={product.infoH}>
                <h4>Length Size:</h4>
                <p>{currentP.length_size}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;

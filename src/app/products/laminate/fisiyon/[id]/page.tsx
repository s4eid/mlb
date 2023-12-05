"use client";
import SliderC from "@/components/Slide/Slide";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import React from "react";
import product from "./product.module.css";
import { usePathname } from "next/navigation";
import { fuSamples } from "../../../../../../data/samples/laminate/fusionSample";

function Product() {
  const router = usePathname();
  const [loading, setLoading] = useState(true);
  const [currentP, setCurrentP] = useState({
    name: "",
    img_1: "",
    img_2: "",
    length_size: "",
    water_resistant: "",
    // profile: "",
    // thickness: "",
    pattern: "",
    // type: "",
    // edging: "",
    width: "",
    length: "",
    features: "",
  });
  let productId = router?.split("/")[4];
  useEffect(() => {
    fuSamples.map((s) => {
      let _name = s.name.replace(/\s/g, "").toLowerCase();
      console.log(name);
      if (_name == productId) {
        setLoading(false);
        setCurrentP({
          name: s.name,
          // edging: s.edging,
          width: s.width,
          water_resistant: s.water_resistant,
          img_1: s.img_1,
          img_2: s.img_2,
          length: s.length,
          pattern: s.pattern,
          // type: s.type,
          length_size: s.length_size,
          // thickness: s.thickness,
          features: s.features,
          // profile: s.profile,
        });
      }
    });
  }, []);
  let img = [
    `/Samples/Fusion/${currentP.img_1}`,
    `/Samples/Fusion/${currentP.img_2}`,
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
              {/* <div className={product.infoH}>
                <h4>Thickness:</h4>
                <p>{currentP.thickness}</p>
              </div> */}
              {/* <div className={product.infoH}>
                <h4>Edging:</h4>
                <p>{currentP.edging}</p>
              </div> */}
              <div className={product.infoH}>
                <h4>Pattern:</h4>
                <p>{currentP.pattern}</p>
              </div>
              {/* <div className={product.infoH}>
                <h4>Type:</h4>
                <p>{currentP.type}</p>
              </div> */}
              <div className={product.infoH}>
                <h4>Length:</h4>
                <p>{currentP.length}</p>
              </div>
              <div className={product.infoH}>
                <h4>With:</h4>
                <p>{currentP.width}</p>
              </div>
              {/* <div className={product.infoH}>
                <h4>Profile:</h4>
                <p>{currentP.profile}</p>
              </div> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;

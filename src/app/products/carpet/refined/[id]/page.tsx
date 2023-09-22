"use client";
import SliderC from "@/components/Slide/Slide";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import React from "react";
import product from "./product.module.css";
import { usePathname } from "next/navigation";
import { reSamples } from "../../../../../../data/samples/carpet/reSamples";

function Product() {
  const router = usePathname();
  const [loading, setLoading] = useState(true);
  const [currentP, setCurrentP] = useState({
    name: "",
    img_1: "",
    img_2: "",
    width: "",
    warranty: "",
    fibre_weight: "",
    fibre_type: "",
    features: "",
    // length_size: "",
    // water_resistant: "",
    // profile: "",
    // thickness: "",
    // pattern: "",
    // type: "",
    // edging: "",
    // length: "",
  });
  let productId = router?.split("/")[4];
  useEffect(() => {
    reSamples.map((s) => {
      let _name = s.name.replace(/\s/g, "").toLowerCase();
      console.log(name);
      if (_name == productId) {
        setLoading(false);
        setCurrentP({
          name: s.name,
          img_1: s.img_1,
          img_2: s.img_2,
          width: s.width,
          warranty: s.Warranty,
          fibre_weight: s.Fibre_Weight,
          fibre_type: s.Fibre_Type,
          features: s.features,
          // edging: s.edging,
          // water_resistant: s.water_resistant,
          // length: s.length,
          // pattern: s.pattern,
          // type: s.type,
          // length_size: s.length_size,
          // thickness: s.thickness,
          // profile: s.profile,
        });
      }
    });
  }, []);
  let img = [
    `/Samples/Refined/${currentP.img_1}`,
    `/Samples/Refined/${currentP.img_2}`,
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
            <p>
              Refined Appeal is a polyester cut pile twist carpet bringing
              comfort and practicality at an affordable price. Beautifully soft,
              this carpet is perfect for bedrooms and features a versatile
              colour palette.
            </p>
          </div>
          <div className={product.info}>
            <div className={product.infoH}>
              <h4>Code & Name:</h4>
              <p>{currentP.name}</p>
            </div>
            <div className={product.infoH}>
              <h4>Width:</h4>
              <p>{currentP.width}</p>
            </div>
            <div className={product.infoH}>
              <h4>Fibre Type:</h4>
              <p>{currentP.fibre_type}</p>
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
                <h4>Fibre Weight:</h4>
                <p>{currentP.fibre_weight}</p>
              </div>
              <div className={product.infoH}>
                <h4>Warranty:</h4>
                <p>{currentP.warranty}</p>
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

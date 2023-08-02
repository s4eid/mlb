import React from "react";
import Image from "next/image";
import suppliers from "./suppliers.module.css";
import { suppliersImages } from "../../../data/suppliers";
export default function Suppliers() {
  return (
    <div className={suppliers.mainContiner}>
      <div className={suppliers.slider}>
        <div className={suppliers.sliderTrack}>
          {suppliersImages.map((t, index) => (
            <div className={suppliers.slide} key={index}>
              {/* <p>{t}</p> */}
              <Image src={t} width={100} height={100} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

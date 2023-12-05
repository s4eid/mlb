import React from "react";
import au from "./auproducts.module.css";
import { auSamples } from "data/samples/timber/auSamples";
import Image from "next/image";
import Link from "next/link";

function Auproducts() {
  return (
    <div className={au.mainC}>
      <div className={au.titleC}>
        <h2>Products</h2>
      </div>
      <div className={au.holder}>
        {auSamples.map((p, index) => (
          <div key={index} className={au.innerH}>
            <Link
              href={`products/timber/aus-timber/${p.name
                .replace(/\s/g, "")
                .toLowerCase()}`}
            >
              <Image
                src={`/Samples/AustralianT/${p.img_1}`}
                alt="sample-image"
                width={300}
                height={300}
              />
              <h4>{p.name}</h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Auproducts;

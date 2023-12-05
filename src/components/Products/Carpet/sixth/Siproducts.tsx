import React from "react";
import si from "./siproducts.module.css";
import { siSamples } from "data/samples/carpet/siSamples";
import Image from "next/image";
import Link from "next/link";

function SiProduct() {
  return (
    <div className={si.mainC}>
      <div className={si.titleC}>
        <h2>Products</h2>
      </div>
      <div className={si.holder}>
        {siSamples.map((p, index) => (
          <div key={index} className={si.innerH}>
            <Link
              href={`products/carpet/sixur/${p.name
                .replace(/\s/g, "")
                .toLowerCase()}`}
            >
              <Image
                src={`/Samples/Sixth/${p.img_1}`}
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

export default SiProduct;

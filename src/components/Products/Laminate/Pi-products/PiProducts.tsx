import React from "react";
import pi from "./piProducts.module.css";
import { piSamples } from "data/samples/laminate/piSample";
import Image from "next/image";
import Link from "next/link";

function Piproducts() {
  return (
    <div className={pi.mainC}>
      <div className={pi.titleC}>
        <h2>Products</h2>
      </div>
      <div className={pi.holder}>
        {piSamples.map((p, index) => (
          <div key={index} className={pi.innerH}>
            <Link
              href={`products/laminate/pinaco/${p.name
                .replace(/\s/g, "")
                .toLowerCase()}`}
            >
              <Image
                src={`/Samples/Pinaco/${p.img_1}`}
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

export default Piproducts;

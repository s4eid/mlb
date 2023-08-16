import React from "react";
import fu from "./fuproducts.module.css";
import { fuSamples } from "data/samples/laminate/fusionSample";
import Image from "next/image";
import Link from "next/link";

function Fuproducts() {
  return (
    <div className={fu.mainC}>
      <div className={fu.titleC}>
        <h2>Products</h2>
      </div>
      <div className={fu.holder}>
        {fuSamples.map((p, index) => (
          <div key={index} className={fu.innerH}>
            <Link
              href={`products/laminate/fusion/${p.name
                .replace(/\s/g, "")
                .toLowerCase()}`}
            >
              <Image
                src={`/Samples/Fusion/${p.img_1}`}
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

export default Fuproducts;

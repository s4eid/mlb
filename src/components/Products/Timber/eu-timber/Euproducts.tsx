import React from "react";
import eu from "./euproducts.module.css";
import { euSamples } from "data/samples/timber/euSamples";
import Image from "next/image";
import Link from "next/link";

function Euproducts() {
  return (
    <div className={eu.mainC}>
      <div className={eu.titleC}>
        <h2>Products</h2>
      </div>
      <div className={eu.holder}>
        {euSamples.map((p, index) => (
          <div key={index} className={eu.innerH}>
            <Link
              href={`products/timber/european-oak/${p.name
                .replace(/\s/g, "")
                .toLowerCase()}`}
            >
              <Image
                src={`/Samples/European/${p.img_1}`}
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

export default Euproducts;

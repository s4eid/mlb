import React from "react";
import he from "./heproducts.module.css";
import { heSamples } from "data/samples/hybrid/HeSamples";
import Image from "next/image";
import Link from "next/link";

function Clproducts() {
  return (
    <div className={he.mainC}>
      <div className={he.titleC}>
        <h2>Products</h2>
      </div>
      <div className={he.holder}>
        {heSamples.map((p, index) => (
          <div key={index} className={he.innerH}>
            <Link
              href={`products/hybrid/herringbone/${p.name
                .replace(/\s/g, "")
                .toLowerCase()}`}
            >
              <Image
                src={`/Samples/Herringbone/${p.img_1}`}
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

export default Clproducts;

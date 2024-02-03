import React from "react";
import cl from "./clproducts.module.css";
import { clSamples } from "data/samples/hybrid/clSamples";
import Image from "next/image";
import Link from "next/link";

function Clproducts() {
  return (
    <div className={cl.mainC}>
      <div className={cl.titleC}>
        <h2>Products</h2>
      </div>
      <div className={cl.holder}>
        {clSamples.map((p, index) => (
          <div key={index} className={cl.innerH}>
            <Link
              href={`products/hybrid/classic/${p.name
                .replace(/\s/g, "")
                .toLowerCase()}`}
            >
              <Image
                src={`/Samples/Classic/${p.img_1}`}
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

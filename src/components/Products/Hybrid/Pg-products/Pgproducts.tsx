import React from "react";
import pg from "./pgproducts.module.css";
import { pgSamples } from "data/samples/hybrid/pgSamples";
import Image from "next/image";
import Link from "next/link";

function Pgproducts() {
  return (
    <div className={pg.mainC}>
      <div className={pg.titleC}>
        <h2>Products</h2>
      </div>
      <div className={pg.holder}>
        {pgSamples.map((p, index) => (
          <div key={index} className={pg.innerH}>
            <Link
              href={`products/hybrid/penguin-hybrid/${p.name
                .replace(/\s/g, "")
                .toLowerCase()}`}
            >
              <Image
                src={`/Samples/Penguin/${p.img_1}`}
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

export default Pgproducts;

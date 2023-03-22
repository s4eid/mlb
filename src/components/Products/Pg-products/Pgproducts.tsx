import React from "react";
import pg from "./pgproducts.module.css";
import { pgSamples } from "data/pgSamples";
import Image from "next/image";

function Pgproducts() {
  return (
    <div className={pg.mainC}>
      <div className={pg.titleC}>
        <h2>Products</h2>
      </div>
      <div className={pg.holder}>
        {pgSamples.map((p) => (
          <div className={pg.innerH}>
            <Image
              src={`/${p.img_1}`}
              alt="sample-image"
              width={300}
              height={300}
            />
            <h4>{p.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pgproducts;

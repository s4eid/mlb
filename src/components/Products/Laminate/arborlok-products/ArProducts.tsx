import React from "react";
import ar from "./arProducts.module.css";
import { arborlok_samples } from "data/samples/laminate/arborlokSample";
import Image from "next/image";
import Link from "next/link";

function Arproducts() {
  return (
    <div className={ar.mainC}>
      <div className={ar.titleC}>
        <h2>Products</h2>
      </div>
      <div className={ar.holder}>
        {arborlok_samples.map((p, index) => (
          <div key={index} className={ar.innerH}>
            <Link
              href={`products/laminate/arborlok/${p.name
                .replace(/\s/g, "")
                .toLowerCase()}`}
            >
              <Image
                src={`/Samples/Arborlok/${p.img_1}`}
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

export default Arproducts;

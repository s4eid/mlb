import React from "react";
import au from "./auProducts.module.css";
import { australians_samples } from "data/samples/laminate/australianSample";
import Image from "next/image";
import Link from "next/link";

function Auproducts() {
  return (
    <div className={au.mainC}>
      <div className={au.titleC}>
        <h2>Products</h2>
      </div>
      <div className={au.holder}>
        {australians_samples.map((p, index) => (
          <div key={index} className={au.innerH}>
            <Link
              href={`products/laminate/australian_sp/${p.name
                .replace(/\s/g, "")
                .toLowerCase()}`}
            >
              <Image
                src={`/Samples/Australian/${p.img_1}`}
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

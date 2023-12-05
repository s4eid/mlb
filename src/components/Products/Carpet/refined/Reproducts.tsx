import React from "react";
import re from "./reproducts.module.css";
import { reSamples } from "data/samples/carpet/reSamples";
import Image from "next/image";
import Link from "next/link";

function ReProduct() {
  return (
    <div className={re.mainC}>
      <div className={re.titleC}>
        <h2>Products</h2>
      </div>
      <div className={re.holder}>
        {reSamples.map((p, index) => (
          <div key={index} className={re.innerH}>
            <Link
              href={`products/carpet/syfined/${p.name
                .replace(/\s/g, "")
                .toLowerCase()}`}
            >
              <Image
                src={`/Samples/Refined/${p.img_1}`}
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

export default ReProduct;

import Pi_2_Product from "@/components/Products/Laminate/Pi-2-products/Pi-2-Products";
// import Image from "next/image";
import React from "react";
import pinaco_2 from "./pinaco_2.module.css";

function Page() {
  return (
    <div className={pinaco_2.mainC}>
      <div className={pinaco_2.infoC}>
        <div className={pinaco_2.container}>
          <div className={pinaco_2.sliderWrapper}>
            <div className={pinaco_2.slider}>
              <img id="slide1" src="/pi-sample.jpg" alt="supplier-logo" />
              {/* <img id="slide2" src="/pg-sample2.jpg" alt="supplier-logo" />
              <img id="slide3" src="/pg-sample3.jpg" alt="supplier-logo" /> */}
            </div>
            {/* <div className={fusion.sliderNav}>
              <a href="#slide1"></a>
              <a href="#slide2"></a>
              <a href="#slide3"></a>
            </div> */}
          </div>
        </div>
        <div className={pinaco_2.infoH}>
          {/* <Image
            src="/pinaco-supplier.png"
            width={200}
            height={50}
            alt="supplier-logo"
          /> */}
          <p>
            Pinaco Selection using latest European joining technology to create
            an easier and watertight installation, whilst still combining the
            best of European Oak with a wide range of designer colors, ensuring
            there is a design for every taste.
          </p>
        </div>
      </div>
      <Pi_2_Product />
    </div>
  );
}

export default Page;

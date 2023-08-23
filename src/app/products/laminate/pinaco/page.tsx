import PiProduct from "@/components/Products/Laminate/Pi-products/PiProducts";
// import Image from "next/image";
import React from "react";
import pinaco from "./pinaco.module.css";

function Page() {
  return (
    <div className={pinaco.mainC}>
      <div className={pinaco.infoC}>
        <div className={pinaco.container}>
          <div className={pinaco.sliderWrapper}>
            <div className={pinaco.slider}>
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
        <div className={pinaco.infoH}>
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
      <PiProduct />
    </div>
  );
}

export default Page;

import ArProducts from "@/components/Products/Laminate/arborlok-products/ArProducts";
// import Image from "next/image";
import React from "react";
import arborlok from "./arborlok.module.css";

function Page() {
  return (
    <div className={arborlok.mainC}>
      <div className={arborlok.infoC}>
        <div className={arborlok.container}>
          <div className={arborlok.sliderWrapper}>
            <div className={arborlok.slider}>
              <img id="slide1" src="/ar-sample.jpg" alt="supplier-logo" />
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
        <div className={arborlok.infoH}>
          {/* <Image
            src="/pinaco-supplier.png"
            width={200}
            height={50}
            alt="supplier-logo"
          /> */}
          <p>
            The Arborlok collection is the longest and widest in our range. All
            the patterns and designs made from the European Decoration experts.
            Using advanced scratch guard technology, the flooring handles the
            rigors of daily life with ease. The combination of smart and
            beautiful, they create an atmosphere of class and quality. The wide
            variety of styles within the collection ensures there is a style for
            every interior design project whether matching walls, furniture or
            the atmosphere. Arborlok combines style and durability to create a
            dream floor for a real price. Using the finest European materials,
            provides a quality of installation and finished that is
            unparalleled. With a tough melamine finish it is more hygienic than
            other finishes as the surface does not hold dirt or bacteria. It
            provides a low maintenance surface, whilst using materials certified
            low emission and environmentally friendly. With the wide range of
            decors there is a design to suit every style or taste.
          </p>
        </div>
      </div>
      <ArProducts />
    </div>
  );
}

export default Page;

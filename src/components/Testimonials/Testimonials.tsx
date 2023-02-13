import React from "react";
import testimonials from "./testimonials.module.css";
import Image from "next/image";

// import Zoom from "next-image-zoom";

function Testimonials() {
  return (
    <div id="testimonials" className={testimonials.mainContainer}>
      <div className={testimonials.titleH}>
        <h1>Happy Clients</h1>
      </div>
      <div className={testimonials.galleryContainer}>
        <div className={testimonials.gallery}>
          <Image
            src="/te_1.jpg"
            height={300}
            width={300}
            placeholder="blur"
            alt="testimonials"
            blurDataURL="/te_1.jpg"
          />
          <Image
            src="/te_2.jpg"
            height={300}
            width={300}
            placeholder="blur"
            alt="testimonials"
            blurDataURL="/te_2.jpg"
          />
          <Image
            src="/te_3.jpg"
            height={300}
            width={300}
            alt="testimonials"
            placeholder="blur"
            blurDataURL="/te_3.jpg"
          />

          <Image
            src="/te_4.jpg"
            height={300}
            width={300}
            alt="testimonials"
            placeholder="blur"
            blurDataURL="/te_4.jpg"
          />
          <Image
            src="/te_5.jpg"
            height={300}
            width={300}
            alt="testimonials"
            placeholder="blur"
            blurDataURL="/te_5.jpg"
          />
          <Image
            src="/te_6.jpg"
            height={300}
            width={300}
            alt="testimonials"
            placeholder="blur"
            blurDataURL="/te_6.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

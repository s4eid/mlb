"use client";
import Image from "next/image";
import React from "react";
import Suppliers from "../../components/Products/Suppliers";
import products from "./products.module.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import * as Scroll from "react-scroll";

function Products() {
  let Linkk = Scroll.Link;
  return (
    <div className={products.mainC}>
      <div className={products.titleC}>
        <h2>Products</h2>
        <h4>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,
        </h4>
        <div className={products.iconHolder}>
          <Linkk
            to="products"
            href="#products"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <ArrowDownwardIcon fontSize="medium" color="primary" />
          </Linkk>
        </div>
      </div>
      <div className={products.holderC} id="products">
        <div className={products.holder}>
          <Image src="/project-1.jpg" alt="products" width={300} height={300} />
          <h3>Carpet</h3>
        </div>
        <div className={products.holder}>
          <Image src="/project-2.jpg" alt="products" width={300} height={300} />
          <h3>Product</h3>
        </div>
        <div className={products.holder}>
          <Image src="/project-3.jpg" alt="products" width={300} height={300} />
          <h3>Product</h3>
        </div>
        <div className={products.holder}>
          <Image src="/project-4.jpg" alt="products" width={300} height={300} />
          <h3>Vinly</h3>
        </div>
      </div>
      <div className={products.suppliersC}>
        <div className={products.suppliersT}>
          <h2>Our Suppliers</h2>
        </div>
        <Suppliers />
      </div>
    </div>
  );
}

export default Products;

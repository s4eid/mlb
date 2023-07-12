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
          In MLB Flooring ,your go-to destination for high-quality flooring
          solutions. Whether you're looking for the timeless elegance of
          hardwood, the affordability and versatility of laminate, the comfort
          and warmth of carpet tiles, or the durability and easy maintenance of
          vinyl hybrid, we have the perfect floor to suit your needs. Explore
          our diverse range of flooring options and discover the ideal solution
          to transform your living or workspace.
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
          <Image
            src="/project-1.jpeg"
            alt="products"
            width={300}
            height={300}
          />
          <h3>Carpet tiles</h3>
        </div>
        <div className={products.holder}>
          <Image src="/project-2.jpg" alt="products" width={300} height={300} />
          <h3>vinyl Hybrid</h3>
        </div>
        <div className={products.holder}>
          <Image src="/project-3.jpg" alt="products" width={300} height={300} />
          <h3>Laminate</h3>
        </div>
        <div className={products.holder}>
          <Image src="/project-4.jpg" alt="products" width={300} height={300} />
          <h3>Hardwood</h3>
        </div>
        <div className={products.holder}>
          <Image
            src="/project--5.jpg"
            alt="products"
            width={300}
            height={300}
          />
          <h3>Vinyl Plank</h3>
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

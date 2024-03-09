"use client";
import Image from "next/image";
import React from "react";
import Suppliers from "../../components/Products/Suppliers";
import products from "./products.module.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import * as Scroll from "react-scroll";
import Link from "next/link";

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
        <Link href={"/products/hybrid/pigyt"} className={products.holderB}>
          <div className={products.holder}>
            <Image src="/hybrid.jpg" alt="products" width={400} height={157} />
            <div className={products.infoC}>
              <h4>Hybrid</h4>
              <p>
                It is cheaper than timber flooring but dearer than standard
                vinyl or laminate flooring.
              </p>
            </div>
          </div>
        </Link>

        <Link href={"/products/timber/aus-timber"} className={products.holderB}>
          <div className={products.holder}>
            <Image src="/timber.jpg" alt="products" width={400} height={157} />
            <div className={products.infoC}>
              <h4>Timber</h4>
              <p>Timber flooring is smooth and non-porous.</p>
            </div>
          </div>
        </Link>
        <Link href={"/products/laminate/fisiyon"} className={products.holderB}>
          <div className={products.holder}>
            <Image
              src="/project-3.jpg"
              alt="products"
              width={400}
              height={157}
            />
            <div className={products.infoC}>
              <h4>Laminate</h4>
              <p>
                Being made of wood, laminate flooring is not impervious to the
                effects of moisture.
              </p>
            </div>
          </div>
        </Link>
        <Link href={"/products/carpet/syfined"} className={products.holderB}>
          <div className={products.holder}>
            <Image src="/carpet.jpg" alt="products" width={400} height={157} />
            <div className={products.infoC}>
              <h4>Carpet</h4>
              <p>
                In colder climates or seasons, carpet retains warm air longer
                than other flooring types.
              </p>
            </div>
          </div>
        </Link>
      </div>
      {/* <div className={products.suppliersC}>
        <div className={products.suppliersT}>
          <h2>Our Suppliers</h2>
        </div>
        <Suppliers />
      </div> */}
    </div>
  );
}

export default Products;

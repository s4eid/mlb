import React, { useState } from "react";
import { motion } from "framer-motion";
import slide from "./slide.module.css";
import Image from "next/image";
import ShowImage from "./ShowImage/ShowImage";

interface Props {
  img: string;
  direction: number;
  page: number;
  paginate: (newDirection: number) => void;
}
export default function ChildsC({ img, direction, page, paginate }: Props) {
  const [openM, setOpenM] = useState<any>(null);
  return (
    <motion.div
      className={slide.childs}
      key={page}
      custom={direction}
      initial="enter"
      animate="center"
    >
      <div className={slide.slideHolder}>
        <Image
          onClick={() => setOpenM(img)}
          layout="fill"
          src={img}
          alt="product_image"
          className={slide.slideZoom}
        />
      </div>
      {openM && (
        <ShowImage setOpenM={setOpenM} paginate={paginate} openM={img} />
      )}
    </motion.div>
  );
}

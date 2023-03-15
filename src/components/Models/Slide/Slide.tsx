"use client";
import { motion } from "framer-motion";
import Image from "next/image";
// import { useRouter } from "next/router";
import React from "react";
import slide from "./slide.module.css";
interface Persons {
  img: string;
  tx: string;
  txx: string;
  img_1: string;
  tx_1: string;
  txx_1: string;
  img_2: string;
  tx_2: string;
  txx_2: string;
}
interface Props {
  person: Persons;
  direction: number;
  page: number;
  paginate: (newDirection: number) => void;
}
const Slide = ({ person, direction, page, paginate }: Props) => {
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };
  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };
  // const router = useRouter();
  return (
    <motion.div
      className={slide.childs}
      key={page}
      variants={variants}
      custom={direction}
      initial="enter"
      animate="center"
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={1}
      onDragEnd={(e, { offset, velocity }) => {
        const swipe = swipePower(offset.x, velocity.x);

        if (swipe < -swipeConfidenceThreshold) {
          paginate(1);
        } else if (swipe > swipeConfidenceThreshold) {
          paginate(-1);
        }
      }}
    >
      <div className={slide.holder}>
        <div className={slide.imageC}>
          <Image src={person.img} fill alt="slider-images" />
        </div>
        <h3>{person.tx}</h3>
        {/* <p>{person.txx}</p> */}
      </div>
      <div className={slide.holder}>
        <div className={slide.imageC}>
          <Image src={person.img_1} fill alt="slider-images" />
        </div>
        <h3>{person.tx_1}</h3>
        {/* <p>{person.txx_1}</p> */}
      </div>
      <div className={slide.holder}>
        <div className={slide.imageC}>
          <Image src={person.img_2} fill alt="slider-images" />
        </div>
        <h3>{person.tx_2}</h3>
        {/* <p>{person.txx_2}</p> */}
      </div>
    </motion.div>
  );
};

export default Slide;

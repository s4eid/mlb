import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import slide from "./slide.module.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { wrap } from "popmotion";
import ChildsC from "./ChildsC";

interface Props {
  imgs: string[];
}
export default function SliderC({ imgs }: Props) {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, imgs.length, page);
  const indexOfImage = imgs.length;
  const currentIndex = imageIndex + 1;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  return (
    <>
      <div className={slide.mainContainer}>
        <div className={slide.pageInfo}>
          <p>{currentIndex}/</p>
          <p>{indexOfImage}</p>
        </div>
        <AnimatePresence
          initial={false}
          // className={slide.container}
          custom={direction}
        >
          <ChildsC
            img={imgs[imageIndex]}
            direction={direction}
            paginate={paginate}
            // imageIndex={imageIndex}
            page={page}
          />
        </AnimatePresence>
        <KeyboardArrowRightIcon
          color="primary"
          sx={{
            position: "absolute",
            cursor: "pointer",
            zIndex: "1",
            fontSize: "50px",
            right: "5px",
          }}
          // className={slide.iconR}
          onClick={() => paginate(1)}
        />
        <KeyboardArrowLeftIcon
          color="primary"
          sx={{
            position: "absolute",
            cursor: "pointer",
            zIndex: "1",
            fontSize: "50px",
            left: "5px",
          }}
          onClick={() => paginate(-1)}
        />
      </div>
    </>
  );
}

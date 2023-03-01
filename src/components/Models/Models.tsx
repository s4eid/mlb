import React, { useState } from "react";
import models from "./models.module.css";
import { AnimatePresence } from "framer-motion";
import { heroItems } from "../../../data/hero.data";
import { wrap } from "popmotion";
import Slide from "./Slide/Slide";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Models = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, heroItems.length, page);

  const paginate = (newDirection: number): void => {
    setPage([page + newDirection, newDirection]);
  };
  return (
    <div className={models.mainC}>
      <AnimatePresence
        initial={false}
        // className={hero.container}
        custom={direction}
      >
        <Slide
          person={heroItems[imageIndex]}
          direction={direction}
          page={page}
          paginate={paginate}
        />
      </AnimatePresence>
      <div className={models.left} onClick={() => paginate(1)}>
        <ArrowBackIcon fontSize="large" />
      </div>
      <div className={models.right} onClick={() => paginate(-1)}>
        <ArrowForwardIcon fontSize="large" />
      </div>
      {/* <div className={hero.waveC}>
        <Image src="/wave.png" layout="fill" />
      </div> */}
    </div>
  );
};

export default Models;

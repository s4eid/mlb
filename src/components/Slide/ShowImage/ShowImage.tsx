import React from "react";
import showImage from "./showImage.module.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

interface Props {
  openM: string;
  setOpenM: React.Dispatch<any>;
  paginate: (newDirection: number) => void;
}
export default function ShowImage({ openM, setOpenM, paginate }: Props) {
  if (!openM) return null;
  return (
    <div className={showImage.overlay}>
      <div className={showImage.mainContainer}>
        <div className={showImage.container}>
          <CloseIcon
            onClick={() => setOpenM(!openM)}
            className={showImage.close}
          />
          <Image src={openM} fill alt="product" />
        </div>
        <KeyboardArrowRightIcon
          className={showImage.iconR}
          onClick={() => paginate(1)}
        />
        <KeyboardArrowLeftIcon
          className={showImage.iconL}
          onClick={() => paginate(-1)}
        />
      </div>
    </div>
  );
}

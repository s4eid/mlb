"use client";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import gallery from "./gallery.module.css";
import Image from "next/image";

interface ImageType {
  img: string;
}
interface Props {
  galleryImages: ImageType[];
}

const Gallery = ({ galleryImages }: Props) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index: number) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  // Next Image
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <div id="gallery">
      {openModal && (
        <div className={gallery.sliderWrap}>
          <CloseIcon
            fontSize="large"
            onClick={handleCloseModal}
            className={gallery.btnClose}
          />
          <ChevronLeftIcon
            fontSize="large"
            onClick={prevSlide}
            className={gallery.btnPrev}
          />
          <ChevronRightIcon
            fontSize="large"
            onClick={nextSlide}
            className={gallery.btnNext}
          />
          <div className={gallery.fullScreenImage}>
            <img src={galleryImages[slideNumber].img} alt="project" />
          </div>
        </div>
      )}
      <div className={gallery.mainHolder}>
        <div className={gallery.galleryWrap}>
          {galleryImages &&
            galleryImages.map((slide, index) => {
              return (
                <div
                  className={gallery.single}
                  key={index}
                  onClick={() => handleOpenModal(index)}
                >
                  <Image
                    src={slide.img}
                    alt="project"
                    width={400}
                    height={300}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

"use client";
// import { Roboto, Montserrat } from "@next/font/google";
import styles from "./page.module.css";
import Market from "../components/Market/Market";
import Header from "@/components/Header/Header";
import Projects from "../components/Projects/Projects";

import Questions from "@/components/Questions/Questions";
import NavHome from "@/components/NavHome/Nav";
import { Button } from "@mui/material";

// const roboto = Roboto({ subsets: ["latin"], weight: ["100", "400", "900"] });
// const font = Montserrat({ subsets: ["latin"], weight: ["100", "400"] });

export default function Home() {
  return (
    <>
      {/* <div className={font.className}> */}
      <main className={styles.main}>
        <div className={styles.topS}>
          <div className={styles.videoContainer}>
            <video className={styles.videoHolder} loop muted autoPlay>
              <source src="/header-back-video.mp4" />
            </video>
            <div className={styles.videoOver}></div>
          </div>
          <NavHome />
          <div className={styles.titleHolder}>
            <h1>See The Difference With MLB Flooring</h1>
            <p>MLB FLOORING is a supply and install Direct Facility offering</p>
            <div className={styles.buttonHolder}>
              <Button variant="outlined" color="primary">
                Hybrid
              </Button>
              <Button variant="outlined" color="secondary">
                Laminate
              </Button>
              <Button variant="outlined" color="secondary">
                Carpet
              </Button>
              <Button variant="outlined" color="primary">
                Carpet Tiles
              </Button>
            </div>
          </div>
        </div>
        <Header />
        <Projects />
        <Market />
        {/* <About /> */}
        {/* <Clietns /> */}
        {/* <Models /> */}
        {/* <Testimonials /> */}
        <Questions />
        {/* <Contact /> */}
      </main>
      {/* </div> */}
    </>
  );
}

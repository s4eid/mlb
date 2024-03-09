"use client";
// import { Roboto, Montserrat } from "@next/font/google";
import styles from "./page.module.css";
// import Market from "../components/Market/Market";
import Header from "@/components/Header/Header";
import Projects from "../components/Projects/Projects";
import StarIcon from "@mui/icons-material/Star";
import Questions from "@/components/Questions/Questions";
import NavHome from "@/components/NavHome/Nav";
import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import Link from "next/link";

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
            <h1>Feel the difference with MLB Flooring</h1>
            <p>MLB Flooring is a supply and install direct facility offering</p>
            <div className={styles.buttonHolder}>
              <Link href={"/products/hybrid/pigyt"}>
                <Button variant="outlined" color="primary">
                  Hybrid
                </Button>
              </Link>
              <Link href={"/products/timber/aus-timber"}>
                <Button variant="outlined" color="secondary">
                  Timber
                </Button>
              </Link>
              <Link href={"/products/laminate/fisiyon"}>
                <Button variant="outlined" color="secondary">
                  Laminate
                </Button>
              </Link>

              <Link href={"/products/carpet/syfined"}>
                <Button variant="outlined" color="secondary">
                  Carpet
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <Header />
        <Projects />
        {/* <Market /> */}
        {/* <About /> */}
        {/* <Clietns /> */}
        {/* <Models /> */}
        {/* <Testimonials /> */}
        <div className={styles.commentC}>
          <h2>60+ Five Star Reviews On Google</h2>
          <GoogleIcon
            sx={{ cursor: "pointer", color: "#000000" }}
            fontSize="large"
          />
          <div className={styles.starBox}>
            <StarIcon
              sx={{ cursor: "pointer", color: "#F8B62D" }}
              fontSize="large"
            />
            <StarIcon
              sx={{ cursor: "pointer", color: "#F8B62D" }}
              fontSize="large"
            />
            <StarIcon
              sx={{ cursor: "pointer", color: "#F8B62D" }}
              fontSize="large"
            />
            <StarIcon
              sx={{ cursor: "pointer", color: "#F8B62D" }}
              fontSize="large"
            />
            <StarIcon
              sx={{ cursor: "pointer", color: "#F8B62D" }}
              fontSize="large"
            />
          </div>
          <Link href={"https://g.co/kgs/bQ42Gys"}>
            <Button variant="outlined" color="primary">
              See Here
            </Button>
          </Link>
        </div>
        <Questions />
        {/* <Contact /> */}
      </main>
      {/* </div> */}
    </>
  );
}

"use client";
import Image from "next/image";
import { Inter, Roboto } from "@next/font/google";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Nav from "@/components/Nav/Nav";
import About from "@/components/About/About";
import Clietns from "@/components/Team/Team";
import Testimonials from "@/components/Testimonials/Testimonials";
import Contact from "@/components/Contact/Contact";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Questions from "@/components/Questions/Questions";
import Footer from "../components/Footer/Footer";

// const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "400", "900"] });

export default function Home() {
  return (
    <div className={roboto.className}>
      <main className={styles.main}>
        <div className={styles.topS}>
          <Nav />
          <Header />
        </div>
        <About />
        <Clietns />
        <Testimonials />
        <Questions />
        <Contact />
        <a
          // target="_blank"
          href="https://api.whatsapp.com/send?phone=05411214030&text="
          className={styles.whatsappbutton}
        >
          <WhatsAppIcon fontSize="large" />
        </a>
        <Footer />
      </main>
    </div>
  );
}

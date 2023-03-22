"use client";
import { Roboto, Montserrat } from "@next/font/google";
import "./globals.css";
// import Nav from "../components/Nav/Nav";
import theme from "../../config/materialTheme/materialTheme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import style from "./page.module.css";
import Nav from "@/components/Nav/Nav";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Footer from "@/components/Footer/Footer";
const font = Montserrat({ subsets: ["latin"], weight: ["100", "400"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className={font.className}>
            {/* <Nav /> */}
            {children}
            <Footer />
          </div>
        </ThemeProvider>
        <a
          // target="_blank"
          href="https://api.whatsapp.com/send?phone=610410700727&text="
          className={style.whatsappbutton}
        >
          <WhatsAppIcon fontSize="large" />
        </a>
      </body>
    </html>
  );
}

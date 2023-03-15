"use client";
import { Roboto, Montserrat } from "@next/font/google";
import "./globals.css";
// import Nav from "../components/Nav/Nav";
import theme from "../../config/materialTheme/materialTheme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Nav from "@/components/Nav/Nav";
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
      </body>
    </html>
  );
}

"use client";
// import "./globals.css";
// import Nav from "../components/Nav/Nav";
// import theme from "../../config/materialTheme/materialTheme";
// import { ThemeProvider } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import Footer from "@/components/Footer/Footer";
import Nav from "../../components/Nav/Nav";
// import Footer from "@/components/Footer/Footer";

export default function InnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}

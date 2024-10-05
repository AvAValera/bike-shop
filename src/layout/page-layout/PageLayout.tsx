import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "./header/Header";
import MainMenuBackground from "./background/MainMenuBackground";
import Footer from "./footer/Footer";

interface Props {
  children: React.ReactNode;
  title?: string;
}

export default function PageLayout({ title = "Bike Store", children }: Props) {
  return (
    <>
      <MainMenuBackground />
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}

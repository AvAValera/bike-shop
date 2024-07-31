import React from "react";
import { HelmetProvider } from "react-helmet-async";

type Props = {
  children: React.ReactNode
};

export default function RootLayout({children}: Props) {
  return (
    <>
      <HelmetProvider>
        {children} 
      </HelmetProvider>
    </>
  );
}

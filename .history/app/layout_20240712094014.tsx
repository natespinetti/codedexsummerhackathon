import Head from "next/head";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Providers } from "./components/Providers";
import "../public/global.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Sip & Play",
    default: "Sip & Play",
  },
  description: "Your Ultimate Board Game Cafe",
  metadataBase: new URL("http://localhost:3000/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

"use client";
import Head from "next/head";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Providers } from "./components/Providers";
import "../public/global.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Sip & Play",
  description: "Your Ultimate Board Game Cafe",
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

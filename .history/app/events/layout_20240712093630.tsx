"use client";

import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Providers } from "../components/Providers";
import "../../public/global.css";

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Admin | Sip & Play</title>
        <meta name="description" content="Admin Dashboard for Sip & Play" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicons/favicon.ico" sizes="any" />
      </Head>
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

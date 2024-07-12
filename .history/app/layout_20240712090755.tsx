"use client";
import Head from "next/head";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Providers } from "./components/Providers";
import "../public/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Sip & Play</title>
        <meta name="application-name" content="Sip & Play" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Sip & Play" />
        <meta name="description" content="Board games and boba!" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/favicons/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon.ico"
        />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sip & Play" />
        <meta property="og:description" content="Board games and boba!" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="HandheldFriendly" content="true" />

        <meta property="og:site_name" content="Sip & Play" />
        <meta name="robots" content="noindex, nofollow" />
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

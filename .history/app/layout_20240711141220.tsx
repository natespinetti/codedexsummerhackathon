import Head from "next/head";
import React from "react";
import Header from "./components/Header";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Sip & Play</title>
        <meta name="description" content="Board games and boba!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicons/favicon.ico" />
      </Head>
      <body>
        <ChakraProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}

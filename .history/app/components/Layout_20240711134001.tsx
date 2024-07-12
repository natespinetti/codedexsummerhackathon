import Head from "next/head"
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <Head>
      <title>Sip & Play</title>
      <meta name="description" content="This is a description of my Next.js app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicons/favicon.ico" />
    </Head>
    <body>
      <header>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/blog">Blog</a>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2024 My Website</p>
      </footer>
    </body>
  </html>
  );
}

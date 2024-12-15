"use client";

import type { Metadata } from "next";
import { Comfortaa, IBM_Plex_Mono, Montserrat } from "next/font/google";

import "./globals.css";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import FireCursor from "../components/Cursor";

const mont = Montserrat({
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-mont"
});

const comf = Comfortaa({ weight: "variable", subsets: ["latin"], variable: "--font-comf"});

const plexMono = IBM_Plex_Mono({ weight: ["200", "400", "600", "700"], variable: "--font-plex", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`overflow-x-hidden ${mont.variable} ${plexMono.variable} ${comf.variable}`}>
      <body className={" no-scrollbar"}>
        {/* <FireCursor /> */}
      <Navbar />
      <Sidebar />
      <main className="flex w-full flex-col relative gap-6 p-2">{children}</main>
      </body>
    </html>
  );
}

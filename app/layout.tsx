"use client";

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";
import { useEffect } from "react";
import Navbar from "../components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-hidden ">
      <body className={"  no-scrollbar"}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

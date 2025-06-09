"use client";

import React from "react";
import Header from "@/components/Header";
import "../styles/index.css";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentYear = new Date().getFullYear();

  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className="flex min-h-screen flex-col dark:bg-black">
        <Header />
        <main className="flex-grow">{children}</main>

        <Footer/>
      </body>
    </html>
  );
}

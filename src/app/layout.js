"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white">
      <body className={inter.className}>
        <SessionProvider>{children}</SessionProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}

"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import Footer from "./component/footer";
import HomeHeader from "./component/HomeHeader";
import HeaderBg from "./component/headerBg";
import { NextUIProvider } from "@nextui-org/react";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/style/custom.css" />
      </head>
      <body className={inter.className}>
        <NextUIProvider>
          {pathname === "/" ? <HomeHeader /> : <HeaderBg />}
          {children}
          <footer>
            <Footer />
          </footer>
        </NextUIProvider>
      </body>
    </html>
  );
}

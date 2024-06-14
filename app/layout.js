"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import Footer from "./component/footer";
import Header from './component/header'

import { NextUIProvider } from "@nextui-org/react";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import { AuthProvider } from '../helpers/AuthContext'
import { Toaster } from 'react-hot-toast';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/style/custom.css" />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <NextUIProvider>
            <Header />
            {children}
            <footer>
              <Footer />
            </footer>
          </NextUIProvider>
        </AuthProvider>
        <Script src="https://smtpjs.com/v3/smtp.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}

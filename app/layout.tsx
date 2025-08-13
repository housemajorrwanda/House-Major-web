import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/Header";

const kumbhSans = localFont({
  src: [
    {
      path: "../assets/fonts/KumbhSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/KumbhSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-kumbh-sans",
});

const montserrat = localFont({
  src: [
    {
      path: "../assets/fonts/Montserrat-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/Montserrat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Montserrat-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Montserrat-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/Montserrat-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "House Major",
  description: "Coming Soon - Major House",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kumbhSans.variable} antialiased font-sans`}>
        <Header />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
    {
      path: "../assets/fonts/KumbhSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-kumbh-sans",
});

export const metadata: Metadata = {
  title: "House Major",
  description: "Coming Soon - House Major",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kumbhSans.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}

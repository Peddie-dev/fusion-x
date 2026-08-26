import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const satoshi = localFont({
  src: [
    { path: "./fonts/WEB/fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/WEB/fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/WEB/fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/WEB/fonts/Satoshi-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FusionX",
  description: "Your site description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${satoshi.variable}`}>
      <body className="overflow-x-hidden bg-[#0d0d12] antialiased">{children}</body>
    </html>
  );
}
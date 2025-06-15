import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Silicon Melbourne",
  description: "Connecting the Melbourne Technology Community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} ${styles.body}`}>{children}</body>
    </html>
  );
}

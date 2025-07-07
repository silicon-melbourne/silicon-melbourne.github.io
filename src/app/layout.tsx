import type { Metadata } from "next";
import { Jersey_10 } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";

const titleFont = Jersey_10({
  variable: "--font-title",
  subsets: ["latin"],
  weight: "400",
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
      <body className={`${titleFont.variable} ${styles.body}`}>{children}</body>
    </html>
  );
}

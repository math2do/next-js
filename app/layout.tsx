import type { Metadata } from "next";
import { Cantarell } from "next/font/google";
import "./globals.css";

const cantarell = Cantarell({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mathura Tudu",
  description: "Learning by practice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cantarell.className}>{children}</body>
    </html>
  );
}

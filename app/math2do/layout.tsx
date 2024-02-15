import type { Metadata } from "next";
import { Cantarell } from "next/font/google";
import "../globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const cantarell = Cantarell({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: "./header-icon.svg",
  title: "Mathura Tudu",
  description: "Personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      <main className={cantarell.className}>{children}</main>
      <Footer />
    </div>
  );
}

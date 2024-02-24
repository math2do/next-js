import type { Metadata } from "next";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  icons: "./math2do/header-icon.svg",
  title: {
    template: "%s | Flow Jobs",
    default: "Flow Jobs",
  },
  description: "Find your dream developer job",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";
import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";
import SearchBox from "./components/SearchBox";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IMDB Clone",
  description: "IMDB Clone course flow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <>
            {/* Header */}
            <Header />

            {/* Navbar */}
            <Navbar />

            {/* Search Box */}
            <SearchBox />

            {children}
          </>
        </Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import { ReactLenis } from "lenis/react";
import "@/styles/globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });

export const metadata: Metadata = {
  title: "Jonathan Mendoza | Full Stack Engineer",
  description:
    "Full Stack Engineer bridging the gap between design and performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // We force dark mode on the HTML tag and set our deep dark background
    <html lang='en' className='dark'>
      <body
        className={`${inter.variable} ${syne.variable} bg-zinc-950 text-zinc-50 font-sans antialiased selection:bg-cyan-500 selection:text-white`}
      >
        <ReactLenis root>
          <Navbar />
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}

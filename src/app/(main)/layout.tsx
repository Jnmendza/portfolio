import type { Metadata } from "next";
import { geistSans, geistMono } from "@/lib/font";
import "../../styles/globals.css";

export const metadata: Metadata = {
  title: "Jonathan Mendoza | Full Stack Developer",
  description: "Building performant web apps with Next.js and React.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-200 selection:bg-indigo-500/30`}
      >
        <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>{children}</div>
      </body>
    </html>
  );
}

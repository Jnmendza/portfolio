import type { Metadata } from "next";
import "@/styles/globals.css";
import { bebasFont, nunitoFont } from "@/lib/font.js";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Jonathan Mendoza",
  description: "Jonathan's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`flex min-h-screen flex-col ${bebasFont.className} ${nunitoFont.className} antialiased`}
      >
        <Navbar />
        {/* Main content fills space */}
        <main className='flex-grow'>{children}</main>

        {/* Footer sticks to bottom */}
        <Footer />
      </body>
    </html>
  );
}

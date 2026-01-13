import { Bebas_Neue, Nunito, Geist, Geist_Mono } from "next/font/google";

export const bebasFont = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

export const nunitoFont = Nunito({
  subsets: ["latin"],
  weight: "400",
});

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

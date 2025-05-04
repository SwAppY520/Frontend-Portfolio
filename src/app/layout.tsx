import type { Metadata } from "next";
import { Inter, Calistoga, Poppins } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";


const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--poppins",
  weight: ["900"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: ".",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="en" className="in-polypane">
      <body className={twMerge(
          inter.variable,
          poppins.variable,
          calistoga.variable,
          "bg-neutral-950 text-white antialiased font-sans",
        )}>
        {children}
      </body>
  </html>
  );
}

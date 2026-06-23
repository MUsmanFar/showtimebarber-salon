import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Showtime Barber & Salon | Premium Grooming in Accokeek, MD",
  description: "Experience luxury grooming at Showtime Barber & Salon in Accokeek, MD. Precision, style, and confidence in every cut.",
  openGraph: {
    title: "Showtime Barber & Salon | Premium Grooming in Accokeek, MD",
    description: "Experience luxury grooming at Showtime Barber & Salon in Accokeek, MD.",
    type: "website",
    locale: "en_US",
    url: "https://showtimebarber.com",
    siteName: "Showtime Barber & Salon",
  },
};

import { SmoothScroll } from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${poppins.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col font-poppins bg-black text-offwhite overflow-x-hidden">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

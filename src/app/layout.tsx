import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { BookingProvider } from "@/components/BookingModal";
import { BackgroundSystem } from "@/components/BackgroundSystem";

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
  title: "Showtime Barber & Salon | Luxury Grooming in Accokeek",
  description: "Experience premium grooming, luxury service, and precision craftsmanship at Showtime Barber & Salon in Accokeek, MD.",
  openGraph: {
    title: "Showtime Barber & Salon",
    description: "Experience premium grooming in Accokeek, Maryland.",
    type: "website",
    locale: "en_US",
    url: "https://showtimebarber.com",
    siteName: "Showtime Barber & Salon",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "name": "Showtime Barber & Salon",
  "image": "https://showtimebarber.com/hero.png",
  "telephone": "(703) 623-3017",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "7091 Berry Rd Ste 2",
    "addressLocality": "Accokeek",
    "addressRegion": "MD",
    "postalCode": "20607",
    "addressCountry": "US"
  },
  "priceRange": "$$"
};

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
      <body className="min-h-screen flex flex-col font-poppins bg-transparent text-offwhite overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <BackgroundSystem />
        <SmoothScroll>
          <BookingProvider>
            {children}
          </BookingProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { BookingProvider } from "@/components/BookingModal";
import { BackgroundSystem } from "@/components/BackgroundSystem";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Charles Bruce Salon & Spa | Luxury Hair Styling",
  description: "Experience premium grooming, luxury service, and precision craftsmanship at Charles Bruce Salon & Spa in Medford, NJ. Serving the community for 50+ years.",
  icons: {
    icon: '/favicon.ico',
    apple: '/logo.png',
  },
  openGraph: {
    title: "Charles Bruce Salon & Spa | Luxury Hair Styling",
    description: "Experience premium grooming, luxury service, and precision craftsmanship at Charles Bruce Salon & Spa in Medford, NJ. Serving the community for 50+ years.",
    type: "website",
    locale: "en_US",
    url: "https://charlesbrucesalon.com",
    siteName: "Charles Bruce Salon & Spa",
    images: [
      {
        url: 'https://charlesbrucesalon.com/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Charles Bruce Salon & Spa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Charles Bruce Salon & Spa | Luxury Hair Styling",
    description: "Experience premium grooming, luxury service, and precision craftsmanship at Charles Bruce Salon & Spa in Medford, NJ. Serving the community for 50+ years.",
    images: ['https://charlesbrucesalon.com/opengraph-image.jpg'],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "name": "Charles Bruce Salon & Spa",
  "image": "https://charlesbrucesalon.com/hero.jpg",
  "telephone": "(555) 123-4567",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Medford Rd",
    "addressLocality": "Medford",
    "addressRegion": "NJ",
    "postalCode": "08055",
    "addressCountry": "US"
  },
  "priceRange": "$$$"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html
        lang="en"
        className={`${cormorantGaramond.variable} ${poppins.variable} antialiased`}
        suppressHydrationWarning
      >
        <body suppressHydrationWarning className="min-h-screen flex flex-col font-poppins bg-white text-navy overflow-x-hidden">
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

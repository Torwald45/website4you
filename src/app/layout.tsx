import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Website4You - Open Source Web Development",
  description: "Websites, servers, SEO and custom software built on open source tools you own and control.",
  alternates: {
    canonical: "https://website4you.com.au",
  },
  openGraph: {
    title: "Website4You - Open Source Web Development",
    description: "Websites, servers, SEO and custom software built on open source tools you own and control.",
    url: "https://website4you.com.au",
    siteName: "Website4You",
    locale: "en_AU",
    type: "website",
    images: [{ url: "https://website4you.com.au/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website4You - Open Source Web Development",
    description: "Websites, servers, SEO and custom software built on open source tools you own and control.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU">
      <body className={geist.className}>{children}</body>
    </html>
  );
}

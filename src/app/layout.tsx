import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "AccessIQ Innovation - Leading Access Control & Gate Automation Solutions",
  description: "India's premier provider of smart access control solutions. Specializing in gate automation, RFID systems, ANPR technology, parking management, and pedestrian access control for businesses nationwide.",
  keywords: "AccessIQ, access control India, gate automation, RFID systems, ANPR, parking management, security systems, smart access solutions, pedestrian control, vehicle access",
  authors: [{ name: "AccessIQ Innovation Pvt Ltd" }],
  openGraph: {
    title: "AccessIQ Innovation - Smart Access Control Leaders",
    description: "Professional access control and automation solutions trusted by businesses across India",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

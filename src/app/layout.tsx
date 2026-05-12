import type { Metadata, Viewport } from "next";
import { Inter, DM_Serif_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Shakuns Freight Forwarders — Premium Logistics, Ambala",
    template: "%s | Shakuns Freight Forwarders",
  },
  description:
    "India's most trusted freight forwarding partner. DTDC, DHL, FedEx, Delhivery, Blue Dart, Ekart. Serving global trade from Manav Chowk, Ambala since 2002.",
  keywords: [
    "freight forwarding",
    "logistics",
    "Ambala",
    "courier",
    "DHL",
    "FedEx",
    "DTDC",
    "Delhivery",
    "Blue Dart",
    "Ekart",
    "India",
  ],
  authors: [{ name: "Shakuns Freight Forwarders" }],
  creator: "Shakuns Freight Forwarders",
  robots: "index, follow",
  metadataBase: new URL("https://shakun.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://shakun.vercel.app",
    siteName: "Shakuns Freight Forwarders",
    title: "Shakuns Freight Forwarders — Premium Logistics, Ambala",
    description:
      "India's most trusted freight forwarding partner. Serving global trade from Manav Chowk, Ambala since 2002.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shakuns Freight Forwarders — Premium Logistics, Ambala",
    description:
      "India's most trusted freight forwarding partner. DTDC, DHL, FedEx, Delhivery, Blue Dart, Ekart.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#09090B" },
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmSerifDisplay.variable} ${jetbrainsMono.variable}`}
    >
      <body className="noise">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Barlow_Condensed, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const display = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ameri-Climate | Commercial HVAC, Southern California",
  description:
    "Speculative redesign concept: Ameri-Climate is a Yucaipa-based commercial HVAC contractor serving Southern California hospitality and public-sector projects.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} h-full antialiased`}>
      <body className="min-h-full bg-[var(--paper)] font-[family-name:var(--font-sans)] text-[var(--ink)]">
        {children}
      </body>
    </html>
  );
}

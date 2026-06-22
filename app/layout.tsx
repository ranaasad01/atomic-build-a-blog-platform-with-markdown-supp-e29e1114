import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Inkwell — A Blog for Thoughtful Writing",
    template: "%s | Inkwell",
  },
  description:
    "Inkwell is a content-first editorial blog platform for long-form writing, ideas, and stories worth reading.",
  keywords: ["blog", "writing", "essays", "technology", "design", "culture"],
  authors: [{ name: "Inkwell Editorial" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Inkwell",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${lora.variable} font-sans antialiased bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-100 transition-colors duration-300`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
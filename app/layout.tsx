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
    default: "Datics AI — A Blog for Thoughtful Writing",
    template: "%s | Datics AI",
  },
  description:
    "Datics AI is a content-first editorial blog platform for long-form writing, ideas, and stories worth reading.",
  keywords: ["blog", "writing", "essays", "technology", "design", "culture"],
  authors: [{ name: "Datics AI Editorial" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Datics AI",
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
        className={`${inter.variable} ${lora.variable} font-sans antialiased bg-white text-blue-950 dark:bg-blue-950 dark:text-blue-50 transition-colors duration-300`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

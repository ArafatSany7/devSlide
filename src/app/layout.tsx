import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "devSlide | Seamless Presentation Management",
  description: "Create secure, password-protected collections for class presentations. Simple submission management for students and instructors globally.",
  keywords: ["devSlide", "Presentation Management", "Student Uploads", "Class Slides", "Secure Presentations"],
  authors: [{ name: "devSlide Team" }],
  creator: "devSlide",
  publisher: "devSlide",
  openGraph: {
    title: "devSlide",
    description: "devSlide - Your Gateway to Seamless Presentations",
    url: "https://devslide.vercel.app/",
    siteName: "devSlide",
    images: [
      {
        url: "https://devslide.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "devSlide Presentation Manager",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "devSlide",
    description: "devSlide - Your Gateway to Seamless Presentations",
  },
  icons: {
    icon: "/favicon3.svg",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} scroll-smooth antialiased dark`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#020617] text-white overflow-x-hidden" suppressHydrationWarning>{children}</body>
    </html>
  );
}

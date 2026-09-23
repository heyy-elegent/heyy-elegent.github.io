import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const soriaFont = localFont({
  src: "../public/soria-font.ttf",
  variable: "--font-soria",
});

const vercettiFont = localFont({
  src: "../public/Vercetti-Regular.woff",
  variable: "--font-vercetti",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://heyy-elegent.github.io/'),
  title: "Lalit Kumar ✌️",
  description: "Full Stack & AI/ML Engineer who turns complex problems into clean, intelligent code.",
  keywords: "Lalit Kumar, Full Stack Developer, AI ML Engineer, Deep Learning, React, Node.js, Three.js, Creative Developer, Web Development, Python, PyTorch, Portfolio",
  authors: [{ name: "Lalit Kumar" }],
  creator: "Lalit Kumar",
  publisher: "Lalit Kumar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Lalit Kumar - Full Stack & AI/ML Engineer",
    description: "Full Stack & AI/ML Engineer. Like a Rubik's Cube, every complex problem has an elegant solution.",
    siteName: "Lalit Kumar's Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lalit Kumar - Full Stack & AI/ML Engineer",
    description: "Full Stack & AI/ML Engineer. Like a Rubik's Cube, every complex problem has an elegant solution.",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-y-none">
      <body
        className={`${soriaFont.variable} ${vercettiFont.variable} font-sans antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''}/>
    </html>
  );
}

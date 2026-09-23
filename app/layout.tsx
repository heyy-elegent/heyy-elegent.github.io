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
  title: "Lalit Kumar | Full Stack & AI/ML Engineer",
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
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              '<div style="padding:2rem;color:#fff;background:#000;font-family:system-ui">' +
              '<h1>Lalit Kumar - Full Stack &amp; AI/ML Engineer</h1>' +
              '<ul><li>BGMI Marketplace - <a href="https://bgmi-frontend.vercel.app">bgmi-frontend.vercel.app</a></li>' +
              '<li>Facial Emotion Recognition - <a href="https://github.com/heyy-elegent/Face-Intelligence-Project">GitHub</a></li>' +
              '<li>Age &amp; Gender Prediction - <a href="https://github.com/heyy-elegent/age-gender-emotion-prediction">GitHub</a></li>' +
              '<li>Weather App - <a href="https://github.com/heyy-elegent/weather">GitHub</a></li>' +
              '<li>Velox - <a href="https://github.com/codeby-Lalit/velox">GitHub</a></li></ul>' +
              '<p>B.Tech CSE (AI &amp; Data Science) \u00A0|\u00A0 Poornima University</p>' +
              '<p>GitHub: <a href="https://github.com/codeby-Lalit">codeby-Lalit</a> | LinkedIn: <a href="https://www.linkedin.com/in/lalit-kushwaha-dev">lalit-kushwaha-dev</a></p>' +
              '<p>This portfolio is a 3D WebGL experience; enable JavaScript to view it.</p>' +
              '</div>',
          }}
        />
        <noscript style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }} />
        <section aria-label="Portfolio summary" className="sr-only">
          <h1>Lalit Kumar - Full Stack &amp; AI/ML Engineer</h1>
          <p>Final-year B.Tech CSE (AI &amp; Data Science) student at Poornima University, Jaipur (CGPA 8.7). I build full-stack web applications, 3D interactive experiences and AI/ML models.</p>
          <nav aria-label="Primary">
            <ul>
              <li><a href="https://github.com/codeby-Lalit">GitHub: codeby-Lalit</a></li>
              <li><a href="https://www.linkedin.com/in/lalit-kushwaha-dev">LinkedIn</a></li>
            </ul>
          </nav>
          <h2>Notable projects</h2>
          <ul>
            <li>BGMI Marketplace - <a href="https://bgmi-frontend.vercel.app">bgmi-frontend.vercel.app</a></li>
            <li>Facial Emotion Recognition - <a href="https://github.com/heyy-elegent/Face-Intelligence-Project">GitHub repository</a></li>
            <li>Age &amp; Gender Prediction - <a href="https://github.com/heyy-elegent/age-gender-emotion-prediction">GitHub repository</a></li>
            <li>Weather App - <a href="https://github.com/heyy-elegent/weather">GitHub repository</a></li>
            <li>Velox Manuscript Engine - <a href="https://github.com/codeby-Lalit/velox">GitHub repository</a></li>
          </ul>
        </section>
        {children}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}

import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Lalit Kumar",
  "jobTitle": "Full Stack Developer & AI/ML Engineer",
  "url": "https://heyy-elegent.github.io/",
  "sameAs": [
    "https://github.com/codeby-Lalit",
    "https://www.linkedin.com/in/lalit-kushwaha-dev",
    "https://leetcode.com/u/lalit__kushwaha/",
  ],
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "Poornima University, Jaipur"
  },
  "knowsAbout": ["Full Stack Development", "AI/ML", "Deep Learning", "React", "Next.js", "Three.js", "Python", "PyTorch", "Node.js"],
  "hasCredential": { "@type": "EducationalOccupationalCredential", "credentialCategory": "degree", "name": "B.Tech CSE (AI & Data Science)", "associatedWith": "Poornima University" },
};

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              '<div style="padding:2rem;color:#fff;background:#000;font-family:system-ui">' +
              '<h1>Lalit Kumar - Full Stack &amp; AI/ML Engineer</h1>' +
              '<p>Final-year B.Tech CSE (AI &amp; Data Science) at Poornima University, Jaipur (CGPA 8.7). I build full-stack web applications, 3D interactive experiences and AI/ML models.</p>' +
              '<p><a href="/resume.pdf" style="color:#7dd3fc">↓ Download Resume (PDF)</a></p>' +
              '<h2>Projects &amp; case studies</h2>' +
              '<ul>' +
              '<li><strong>BGMI Marketplace (2026)</strong> - microservices marketplace for BGMI IDs: UPI escrow, real-time buyer-seller chat via API gateway, admin moderation. <a href="https://bgmi-frontend.vercel.app">bgmi-frontend.vercel.app</a> | <a href="https://github.com/codeby-Lalit/bgmi-frontend">GitHub</a></li>' +
              '<li><strong>Facial Emotion Recognition (2025)</strong> - VGG-style CNN (1.5M params) on FER2013, 7 emotions, \u224862-65% validation accuracy, real-time webcam demo. <a href="https://github.com/heyy-elegent/Face-Intelligence-Project">GitHub</a></li>' +
              '<li><strong>Age &amp; Gender Prediction (2025)</strong> - end-to-end pandas + CNN notebook with emotion-aware prediction. <a href="https://github.com/heyy-elegent/age-gender-emotion-prediction">GitHub</a></li>' +
              '<li><strong>Velox Manuscript Engine (2023)</strong> - offline DOCX formatting engine: heading/caption classification, publisher profiles, SHA-256 content integrity, explainable audits, desktop EXE. <a href="https://github.com/codeby-Lalit/velox">GitHub</a></li>' +
              '<li><strong>Weather App (2024)</strong> - zero-build client-side app, 5-day forecast via OpenWeatherMap. <a href="https://github.com/heyy-elegent/weather">GitHub</a></li>' +
              '<li><strong>Stable Diffusion Image Gen (2024)</strong> - Gradio app on SD 1.5 with 5 schedulers, auto GPU/CPU detection.</li>' +
              '</ul>' +
              '<h2>Skills</h2>' +
              '<p>Languages: TypeScript, JavaScript, Python, Java, C++ \u00B7 Frontend: React, Next.js, Tailwind, Three.js, GSAP \u00B7 Backend: Node.js, Express, FastAPI, PostgreSQL, Redis \u00B7 ML/AI: PyTorch, TensorFlow, OpenCV, HuggingFace \u00B7 Tools: Git, Docker, Firebase, Vercel, GitHub Pages</p>' +
              '<h2>Education</h2>' +
              '<ul><li>B.Tech CSE (AI &amp; Data Science), Poornima University, Jaipur - CGPA 8.7 (2023-present)</li>' +
              '<li>Class XII, 93% (2022) \u00B7 Class X, 85% (2020)</li></ul>' +
              '<p>GitHub: <a href="https://github.com/codeby-Lalit">codeby-Lalit</a> | LinkedIn: <a href="https://www.linkedin.com/in/lalit-kushwaha-dev">lalit-kushwaha-dev</a> | Email: <a href="mailto:L4kushwaha@gmail.com">L4kushwaha@gmail.com</a></p>' +
              '<p><em>This portfolio is a 3D WebGL experience; enable JavaScript to view it.</em></p>' +
              '</div>',
          }}
        />
        <noscript style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }} />
        <section aria-label="Portfolio summary" className="sr-only">
          <h1>Lalit Kumar - Full Stack &amp; AI/ML Engineer</h1>
          <p>Final-year B.Tech CSE (AI &amp; Data Science) student at Poornima University, Jaipur (CGPA 8.7). I build full-stack web applications, 3D interactive experiences and AI/ML models.</p>
          <p><a href="/resume.pdf">Download Resume (PDF)</a></p>
          <nav aria-label="Primary">
            <ul>
              <li><a href="https://github.com/codeby-Lalit">GitHub: codeby-Lalit</a></li>
              <li><a href="https://www.linkedin.com/in/lalit-kushwaha-dev">LinkedIn</a></li>
              <li><a href="mailto:L4kushwaha@gmail.com">Email: L4kushwaha@gmail.com</a></li>
            </ul>
          </nav>
          <h2>Projects and case studies</h2>
          <ul>
            <li>BGMI Marketplace (2026) - microservices marketplaces for BGMI IDs: UPI escrow, real-time buyer-seller chat, API gateway, admin moderation. <a href="https://bgmi-frontend.vercel.app">Live app</a> | <a href="https://github.com/codeby-Lalit/bgmi-frontend">GitHub</a>.</li>
            <li>Facial Emotion Recognition (2025) - VGG-style CNN, 1.5M params, FER2013, 7 emotions, ~62-65% validation accuracy, real-time webcam demo. <a href="https://github.com/heyy-elegent/Face-Intelligence-Project">GitHub repository</a>.</li>
            <li>Age &amp; Gender Prediction (2025) - end-to-end pandas + CNN notebook, emotion-aware. <a href="https://github.com/heyy-elegent/age-gender-emotion-prediction">GitHub repository</a>.</li>
            <li>Velox Manuscript Engine (2023) - offline DOCX formatting engine, heading/caption classification, publisher profiles, SHA-256 integrity, explainable audits, desktop EXE. <a href="https://github.com/codeby-Lalit/velox">GitHub repository</a>.</li>
            <li>Weather App (2024) - zero-build client-side app, OpenWeatherMap, 5-day forecast. <a href="https://github.com/heyy-elegent/weather">GitHub repository</a>.</li>
            <li>Stable Diffusion Image Gen (2024) - Gradio app on SD 1.5, 5 schedulers, auto GPU/CPU.</li>
          </ul>
          <h2>Skills</h2>
          <p>Languages: TypeScript, JavaScript, Python, Java, C++. Frontend: React, Next.js, Tailwind, Three.js, GSAP. Backend: Node.js, Express, FastAPI, PostgreSQL, Redis. ML/AI: PyTorch, TensorFlow, OpenCV, HuggingFace. Tools: Git, Docker, Firebase, Vercel, GitHub Pages.</p>
          <h2>Education</h2>
          <ul>
            <li>B.Tech CSE (AI &amp; Data Science), Poornima University, Jaipur - CGPA 8.7 (2023-present)</li>
            <li>Class XII, 93% (2022)</li>
            <li>Class X, 85% (2020)</li>
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

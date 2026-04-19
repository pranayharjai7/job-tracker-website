import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "JobTrack — Smart Job Application Tracker",
  description: "The intelligent Android assistant that automates your job search. Sync with Gmail, visualize your journey with AI, and track search intensity with ease.",
  keywords: ["job tracker", "job application", "career tool", "gmail sync", "AI career assistant", "Kotlin", "Android app"],
  authors: [{ name: "Pranay Harjai" }],
  openGraph: {
    title: "JobTrack — Smart Job Application Tracker",
    description: "The intelligent way to manage your job search. Private, fast, and powered by AI.",
    url: "https://jobtrack.app",
    siteName: "JobTrack",
    images: [
      {
        url: "https://raw.githubusercontent.com/pranayharjai7/JobApplicationTracker/main/JobTrackIcon.png",
        width: 512,
        height: 512,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JobTrack — Smart Job Application Tracker",
    description: "Automate your job search with AI and Gmail sync. Privacy-first, on-device tracking.",
    images: ["https://raw.githubusercontent.com/pranayharjai7/JobApplicationTracker/main/JobTrackIcon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased text-white bg-[#09090b]`}>
        <main className="min-h-screen flex flex-col items-center">
          <div className="w-full">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}

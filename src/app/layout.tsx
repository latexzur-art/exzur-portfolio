import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Exzur A. Lat — Aspiring Software Developer | Techtal Studios",
    template: "%s | Exzur A. Lat",
  },
  description:
    "Personal developer portfolio of Exzur A. Lat — Computer Science student and aspiring software developer building web apps, desktop software, indie games, and 3D assets under Techtal Studios.",
  keywords: [
    "Exzur A. Lat",
    "Techtal Studios",
    "Software Developer Portfolio",
    "Computer Science Student",
    "STI College Lucena",
    "Game Development",
    "3D Modeling",
    "StoryForge",
    "Last Haven",
    "Forged Edge",
    "Philippines Developer",
  ],
  authors: [{ name: "Exzur A. Lat", url: "https://github.com/latexzur-art" }],
  creator: "Exzur A. Lat",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Exzur A. Lat — Aspiring Software Developer & Techtal Studios",
    description:
      "Building software, exploring technology, and creating digital experiences. Featuring independent projects and Techtal Studios.",
    siteName: "Exzur A. Lat · Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Exzur A. Lat — Aspiring Software Developer & Techtal Studios",
    description:
      "Building software, exploring technology, and creating digital experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body className="font-sans bg-[#080808] text-white antialiased selection:bg-sky-500/20 selection:text-white min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}

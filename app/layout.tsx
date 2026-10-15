import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://akmalahamath.dev"),
  title: "Akmal Ahamath | AI Engineer & Full-Stack Developer",
  description:
    "Portfolio of Akmal Ahamath, a Computer Science undergraduate focused on Artificial Intelligence, Machine Learning, Full-Stack Development and intelligent software solutions.",
  keywords: [
    "Akmal Ahamath",
    "AI Engineer",
    "Machine Learning",
    "Full-Stack Developer",
    "Computer Science",
    "University of Plymouth",
    "Generative AI",
    "Sri Lanka",
  ],
  authors: [{ name: "Akmal Ahamath", url: "https://www.linkedin.com/in/akmalahamath" }],
  creator: "Akmal Ahamath",
  openGraph: {
    title: "Akmal Ahamath | AI Engineer & Full-Stack Developer",
    description:
      "Portfolio of Akmal Ahamath, a Computer Science undergraduate focused on Artificial Intelligence, Machine Learning, Full-Stack Development and intelligent software solutions.",
    url: "https://akmalahamath.dev",
    siteName: "Akmal Ahamath Portfolio",
    images: [
      {
        url: "/images/akmal-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Akmal Ahamath - AI Engineer & Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akmal Ahamath | AI Engineer & Full-Stack Developer",
    description:
      "Portfolio of Akmal Ahamath, a Computer Science undergraduate focused on Artificial Intelligence, Machine Learning, Full-Stack Development and intelligent software solutions.",
    images: ["/images/akmal-portrait.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/images/akmal-round-logo.png", type: "image/png" },
    ],
    apple: "/images/akmal-round-logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#020B14",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${plusJakartaSans.variable} ${spaceGrotesk.variable}`}
    >
      <body className="bg-[#020B14] text-slate-100 font-sans antialiased selection:bg-cyan-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}

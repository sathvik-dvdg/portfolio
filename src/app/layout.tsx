import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sathvik-dvdg.github.io/portfolio"),
  title: {
    default: "Sathvik T Devadiga - Backend, Cloud & ML Portfolio",
    template: "%s | Sathvik T Devadiga"
  },
  description:
    "Portfolio of Sathvik T Devadiga, a Computer Science student building cloud-native backends, cyber defense systems, and ML-powered applications.",
  keywords: [
    "Sathvik T Devadiga",
    "Backend Engineer",
    "Cloud Infrastructure",
    "Machine Learning",
    "Cybersecurity",
    "FastAPI",
    "Node.js",
    "AWS",
    "GraphSAGE"
  ],
  authors: [{ name: "Sathvik T Devadiga" }],
  creator: "Sathvik T Devadiga",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sathvik-dvdg.github.io/portfolio",
    title: "Sathvik T Devadiga - Backend, Cloud & ML Portfolio",
    description:
      "Cloud-native microservices, graph-based intrusion detection, healthcare workflows, and ML inference systems.",
    siteName: "Sathvik T Devadiga Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Sathvik T Devadiga - Backend, Cloud & ML Portfolio",
    description:
      "Software engineering student building cloud-native microservices, cyber defense systems, and ML-powered applications."
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.svg"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050D1A"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import "../styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sahil Lavingia",
  description: "A writer, painter, and founder.",
  openGraph: {
    title: "Sahil Lavingia",
    description: "A writer, painter, and founder.",
    images: ["https://sahillavingia.com/og.png"],
  },
  twitter: {
    title: "Sahil Lavingia",
    description: "A writer, painter, and founder.",
    images: ["https://sahillavingia.com/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

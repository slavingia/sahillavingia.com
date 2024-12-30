import "../styles/globals.css";
import { Metadata } from "next";
import { Suspense } from "react";

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        }>
          {children}
        </Suspense>
      </body>
    </html>
  );
}

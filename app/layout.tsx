import "../styles/globals.css";
import { Metadata } from "next";
import { Suspense } from "react";
import { DarkModeProvider } from "@/lib/DarkModeContext";
import DarkModeToggle from "@/components/ui/DarkModeToggle";
import { themeScript } from "@/lib/theme-script";

function FallbackUI() {
  return (
    <div className="min-h-screen flex items-center bg-white dark:bg-black">
      <main className="py-6 sm:py-10 px-4 sm:px-8 mx-auto max-w-4xl w-full">
        <div className="space-y-6 animate-pulse">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <div className="h-8 w-48 bg-gray-200 dark:bg-neutral-800 rounded"></div>
              <div className="flex mt-2 space-x-2">
                <div className="h-4 w-16 bg-gray-200 dark:bg-neutral-800 rounded"></div>
                <div className="h-4 w-12 bg-gray-200 dark:bg-neutral-800 rounded"></div>
                <div className="h-4 w-14 bg-gray-200 dark:bg-neutral-800 rounded"></div>
              </div>
            </div>
            <div className="h-8 w-8 bg-gray-200 dark:bg-neutral-800 rounded"></div>
          </div>

          {/* Content */}
          <div className="space-y-4 pt-10">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="h-6 w-3/4 bg-gray-200 dark:bg-neutral-800 rounded"></div>
                <div className="h-4 w-12 bg-gray-200 dark:bg-neutral-800 rounded"></div>
              </div>
            ))}
          </div>

          {/* Image Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-[300px] bg-gray-200 dark:bg-neutral-800 rounded"></div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: themeScript
          }}
        />
      </head>
      <body>
        <DarkModeProvider>
          <div className="fixed top-4 right-4 z-50">
            <DarkModeToggle />
          </div>
          <Suspense fallback={<FallbackUI />}>
            {children}
          </Suspense>
        </DarkModeProvider>
      </body>
    </html>
  );
}

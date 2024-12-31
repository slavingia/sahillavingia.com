import "../styles/globals.css";
import { DarkModeProvider } from "@/lib/DarkModeContext";
import { themeScript } from "@/lib/theme-script";

export const metadata = {
  title: "Sahil Lavingia",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
          {children}
        </DarkModeProvider>
      </body>
    </html>
  );
}

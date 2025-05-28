import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Sahil Lavingia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

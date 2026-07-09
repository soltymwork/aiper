import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aiper Slovensko – prémiové robotické vysávače bazénov",
  description: "Prémiový custom e-shop koncept pre robotické bazénové vysávače Aiper.",
  viewport: "width=device-width, initial-scale=1"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk">
      <body>{children}</body>
    </html>
  );
}

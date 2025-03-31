import { Metadata } from "next";
import "./globals.css";
import "../styles/style.css";

export const metadata: Metadata = {
  title: "Agatha Ambrose",
  description: "Limitless",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

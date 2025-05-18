import { Metadata } from "next";
import "./globals.css";
import "../styles/style.css";
import { Toaster } from "sonner";

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
      <body className="antialiased ">
        <main>{children}</main>
        <Toaster position="bottom-left" />
      </body>
    </html>
  );
}

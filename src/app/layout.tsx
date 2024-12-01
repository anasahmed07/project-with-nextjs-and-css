import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "app with css",
  description: "agram bagram sagram",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

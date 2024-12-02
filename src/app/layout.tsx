import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/fav-icon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/fav-icon/favicon.svg" />
        <link rel="shortcut icon" href="/fav-icon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/fav-icon/apple-touch-icon.png" />
        <link rel="manifest" href="/fav-icon/site.webmanifest" />
      </head>
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

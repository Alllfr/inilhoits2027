import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "INI LHO ITS 2027",
  description: "Rangkaian acara open house Institut Teknologi Sepuluh Nopember 2027",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;700;800&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

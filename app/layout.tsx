import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const ivy = localFont({
  src: "./fonts/Ivy.woff",
  variable: "--font-ivy",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gihan - UI/UX Designer",
  description: "Human centered design experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ivy.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
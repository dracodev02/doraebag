import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGrotesk-Regular.ttf",
  variable: "--font-space-grotesk",
  weight: "400",
});
const archivo = localFont({
  src: "./fonts/Archivo_ExtraCondensed-Regular.ttf",
  variable: "--font-archivo",
  weight: "400",
});

export const metadata: Metadata = {
  title: "doraEbag",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${archivo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

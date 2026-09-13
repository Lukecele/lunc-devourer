import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "LUNC Devourer ($DEVOUR) | The Ultimate Burning Beast on Terra Classic",
  description: "LUNC Devourer ($DEVOUR) feeds on trading volume to permanently incinerate LUNC supply. Powered by automated Creator Swap Fees on Terraport LaunchPump.",
  keywords: ["LUNC Devourer", "DEVOUR", "LUNC", "Terra Classic", "Terraport", "LaunchPump", "Token Burn", "Crypto", "LUNC Burn"],
  openGraph: {
    title: "LUNC Devourer ($DEVOUR) | Permanent LUNC Incinerator",
    description: "Feeding on volume to permanently incinerate LUNC supply. Powered by Terraport LaunchPump.",
    images: [{ url: "/ca.jpeg", width: 1200, height: 630, alt: "LUNC Devourer Logo" }],
  },
  icons: {
    icon: "/ca.jpeg",
    shortcut: "/ca.jpeg",
    apple: "/ca.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/ca.jpeg" type="image/jpeg" />
      </head>
      <body>{children}</body>
    </html>
  );
}

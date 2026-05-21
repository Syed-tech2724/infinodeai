import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Infinode AI - Automate the Impossible",
  description: "AI automation agency specializing in n8n workflows, lead management, and intelligent integrations",
  keywords: ["AI automation", "n8n", "workflow automation", "WhatsApp automation", "Discord bots", "AI agents"],
  icons: {
    icon: "/Firefly (1).png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="min-h-screen bg-[#0A0A0A] text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

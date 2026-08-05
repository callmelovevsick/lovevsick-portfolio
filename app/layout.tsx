import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Background } from "@/components/ui/Background";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { CommandPalette } from "@/components/layout/CommandPalette";
import { CommandPaletteProvider } from "@/context/command-palette";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = "https://lovevsick.dev";
const title = "lovevsick — developer / pentester / competitive programmer";
const description =
  "The personal digital garden of lovevsick — developer, pentester, and competitive programmer.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "lovevsick",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#09050f",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${inter.variable}`}>
      <body className="relative flex min-h-screen flex-col bg-void font-sans text-bone antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:rounded-md focus:bg-surface2 focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-bone"
        >
          Skip to content
        </a>
        <Background />
        <CustomCursor />
        <CommandPaletteProvider>
          <Navbar />
          <CommandPalette />
          <div id="main-content" className="flex flex-1 flex-col pt-24">
            <PageTransition>{children}</PageTransition>
            <Footer />
          </div>
        </CommandPaletteProvider>
      </body>
    </html>
  );
}

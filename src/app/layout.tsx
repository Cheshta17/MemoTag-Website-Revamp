import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MemoTag - AI-Powered Dementia Care Platform",
  description: "MemoTag is an innovative AI-powered platform designed to support dementia care through advanced monitoring and personalized assistance.",
  keywords: ["dementia care", "AI healthcare", "memory assistance", "cognitive health", "elderly care"],
  authors: [{ name: "MemoTag Team" }],
  openGraph: {
    title: "MemoTag - AI-Powered Dementia Care Platform",
    description: "Revolutionizing dementia care with AI technology",
    url: "https://memotag.io",
    siteName: "MemoTag",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}

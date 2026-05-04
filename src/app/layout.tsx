import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hamza Daniyal — Lead Frontend Engineer",
  description:
    "Lead Frontend Engineer specializing in Angular 18, RxJS, NgRx, and scalable frontend architecture. Building high-performance, enterprise-grade applications.",
  keywords: [
    "Hamza Daniyal",
    "Lead Frontend Engineer",
    "Angular",
    "RxJS",
    "NgRx",
    "TypeScript",
    "Frontend Architecture",
  ],
  authors: [{ name: "Hamza Daniyal" }],
  openGraph: {
    title: "Hamza Daniyal — Lead Frontend Engineer",
    description:
      "Building scalable, high-performance Angular applications with modern architecture.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7fefc" },
    { media: "(prefers-color-scheme: dark)", color: "#061615" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${mono.variable}`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

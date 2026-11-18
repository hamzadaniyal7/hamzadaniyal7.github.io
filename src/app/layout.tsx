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
  title: "Hamza Daniyal — Frontend & AI Engineer",
  description:
    "Frontend & AI Engineer building AI-powered SaaS — agent consoles, streaming conversational UIs, observability dashboards, and the enterprise apps around them. Angular, React, TypeScript, LLMs and AI agents.",
  keywords: [
    "Hamza Daniyal",
    "Frontend & AI Engineer",
    "Angular",
    "React",
    "Next.js",
    "TypeScript",
    "LLM Applications",
    "AI Agents",
    "RAG",
    "Agent Observability",
    "Frontend Architecture",
  ],
  authors: [{ name: "Hamza Daniyal" }],
  openGraph: {
    title: "Hamza Daniyal — Frontend & AI Engineer",
    description:
      "Building the interfaces behind AI-powered SaaS — agent consoles, streaming conversational UIs, and observability dashboards.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f6f1" },
    { media: "(prefers-color-scheme: dark)", color: "#141413" },
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

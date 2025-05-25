import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AUXAMATE - AI Services & Tools Platform",
  description: "Advanced AI agents, tools, and services for modern businesses",
  icons: {
    icon: [
      { url: "/logo2.png" },
      { url: "/logo2.png", sizes: "16x16", type: "image/png" },
      { url: "/logo2.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/logo2.png", sizes: "32x32", type: "image/png" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo2.png" sizes="32x32" />
        {/* <link rel="icon" href="/logo2.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/logo2.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/logo2.png" /> */}
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

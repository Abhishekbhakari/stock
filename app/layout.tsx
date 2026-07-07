import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"
import MouseMoveEffect from "@/components/mouse-move-effect"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gaurav Kulkarni - Research Analyst",
  description: "Gaurav Kulkarni - Research Analyst.",
  generator: 'v0.dev',
  verification: {
    other: {
      "facebook-domain-verification": "37vdfu83091zodyqfa5wi4qm14rztt",
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-[100] focus:rounded focus:bg-black focus:px-4 focus:py-2 focus:text-white focus:outline focus:outline-2 focus:outline-white"
        >
          Skip to main content
        </a>
        <MouseMoveEffect />
        {children}
      </body>
    </html>
  )
}



import './globals.css'
import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
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

        {/*
          EnableUser accessibility widget.
          #8a6a00 is the site's dark gold (see testimonialssection.tsx). The widget
          paints the primary both on its launcher (white icon over it) and as the menu
          icons on its fixed near-white panel, so the accent has to clear 4.5:1 in both
          directions — the brighter site golds (#FDCD00 / yellow-400/500) sit at ~1.5:1
          and would make the menu icons unreadable. This shade reads as the same gold
          and measures 5.07:1 on the launcher, 4.66:1 on the panel.
        */}
        <Script id="enablestack-config" strategy="beforeInteractive">
          {`window.ENABLESTACK_CONFIG = {
  colors: { primary: '#8a6a00', secondary: '#ffffff' },
  icon: 'default',
  widgetPosition: { side: 'left' },
  accessibilityStatementUrl: '/accessibility'
};`}
        </Script>
        <Script src="/enablestack-widget.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}



import './globals.css'
"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">Stock</span>
        </Link>
        <nav className="hidden md:flex flex-1 items-center space-x-6 text-sm font-medium">
          {/* <Link href="/solutions" className="transition-colors hover:text-primary">
            Solutions
          </Link>
          <Link href="/industries" className="transition-colors hover:text-primary">
            Industries
          </Link> */}
         
          
          <Link href="/InvestmentPhilosophy" className="transition-colors hover:text-primary" onClick={() => setIsOpen(false)}>
            Investment Philosophy
          </Link>
         
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          {/* <Link href="https://github.com/amanesoft" target="_blank" rel="noreferrer"> */}
            {/* <Button variant="ghost" size="icon">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link> */}
          <Link href="/contact">
            <Button variant="ghost" size="sm">
              Contact
            </Button>
          </Link>
          <Button size="sm">Get a Demo</Button>
        </div>
        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-14 left-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link href="/solutions" className="transition-colors hover:text-primary" onClick={() => setIsOpen(false)}>
              Solutions
            </Link>
            <Link href="/industries" className="transition-colors hover:text-primary" onClick={() => setIsOpen(false)}>
              Industries
            </Link>
            <Link href="/about" className="transition-colors hover:text-primary" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <Link href="/investorcharter" className="transition-colors hover:text-primary" onClick={() => setIsOpen(false)}>
              Investor Charter
            </Link>
            <Link href="https://github.com/amanesoft" target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" size="sm">
                Contact
              </Button>
            </Link>
            <Button size="sm" onClick={() => setIsOpen(false)}>Get a Demo</Button>
          </nav>
        </div>
      )}
    </header>
  )
}


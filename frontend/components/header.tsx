"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/infrastructure", label: "Infrastructure" },
    { href: "/mission-vision", label: "Mission & Vision" },
    { href: "/events", label: "Events" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact Us" },
  ]

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-sm md:text-base">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span>Email: info@abhimanyuschool.in</span>
          <span>Phone: +91 98765 43210</span>
        </div>
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-muted">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo - Updated to "APS" with professional serif font */}
          <Link href="/" className="font-serif text-3xl font-bold text-primary whitespace-nowrap">
            APS
          </Link>

          {/* Desktop Navigation - Improved spacing and responsive text sizing */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.slice(0, -1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors text-base font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons - Hidden on medium screens, visible on large screens */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact Us
            </Link>
            <Link
              href="/query"
              className="bg-accent text-accent-foreground px-6 py-2 rounded font-semibold hover:opacity-90 transition"
            >
              Submit Query
            </Link>
          </div>

          {/* Mobile Menu Button - Enhanced for medium and small screens */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-muted rounded transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-primary" />}
          </button>
        </nav>

        {/* Mobile Navigation - Improved styling and organization */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-muted shadow-md">
            <div className="px-4 py-6 flex flex-col gap-4 max-w-7xl mx-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors py-2 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-muted pt-4 mt-2">
                <Link
                  href="/contact"
                  className="block text-foreground hover:text-primary transition-colors py-2 font-medium mb-3"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
                <Link
                  href="/query"
                  className="block bg-accent text-accent-foreground px-4 py-2 rounded font-semibold text-center hover:opacity-90 transition"
                  onClick={() => setIsOpen(false)}
                >
                  Submit Query
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

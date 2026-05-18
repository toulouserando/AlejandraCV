"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/about" },
    { name: "Personnalité", href: "/personality" },
    { name: "Expériences", href: "/#experience" },
    { name: "Formations", href: "/#education" },
    { name: "Synchroniseur", href: "/#ai-sync" },
  ]

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      scrolled || pathname !== "/" ? "bg-background/80 backdrop-blur-md border-b shadow-sm py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="font-headline text-2xl font-bold text-accent">
          Alejandra<span className="text-primary"> CV</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors text-foreground/80 hover:text-primary",
                pathname === item.href && "text-primary font-bold"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Me contacter
          </Link>
        </div>
      </div>
    </nav>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ShoppingBag, User, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center gap-4 md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] p-0 overflow-hidden">
              <div className="relative h-full w-full">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-20 dark:opacity-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                  <div className="absolute h-[800px] w-[800px] animate-pattern">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_0%_0%,transparent_0%,rgba(0,0,0,0.07)_100%)] dark:bg-[radial-gradient(circle_500px_at_0%_0%,transparent_0%,rgba(255,255,255,0.07)_100%)] blur-xl" />
                  </div>
                </div>
                {/* Menu Content */}
                <div className="relative h-full p-6">
                  <nav className="flex flex-col space-y-4 mt-8">
                    <Link
                      href="/"
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium hover:text-primary transition-colors"
                    >
                      Home
                    </Link>
                    <Link
                      href="/menu"
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium hover:text-primary transition-colors"
                    >
                      Menu
                    </Link>
                    <Link
                      href="/locations"
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium hover:text-primary transition-colors"
                    >
                      Locations
                    </Link>
                    <Link
                      href="/inspiration"
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium hover:text-primary transition-colors"
                    >
                      Daily Inspiration
                    </Link>
                  </nav>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/404528-OemuItO4Ul8oAPGKZBIXOGOGYx8Myk.png"
              alt="Blessed Nutrition"
              width={100}
              height={33}
              className="dark:brightness-200"
            />
          </Link>
        </div>
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/cart">
                <ShoppingBag className="h-5 w-5" />
                <span className="sr-only">Shopping cart</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/account">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Link>
            </Button>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}


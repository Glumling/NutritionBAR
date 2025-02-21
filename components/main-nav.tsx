"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/404528-OemuItO4Ul8oAPGKZBIXOGOGYx8Myk.png"
          alt="Blessed Nutrition"
          width={120}
          height={40}
          className="dark:brightness-200"
        />
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Button
          variant="ghost"
          asChild
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/menu" ? "text-foreground" : "text-foreground/60",
          )}
        >
          <Link href="/menu">Menu</Link>
        </Button>
        <Button
          variant="ghost"
          asChild
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/locations" ? "text-foreground" : "text-foreground/60",
          )}
        >
          <Link href="/locations">Locations</Link>
        </Button>
        <Button
          variant="ghost"
          asChild
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/inspiration" ? "text-foreground" : "text-foreground/60",
          )}
        >
          <Link href="/inspiration">Daily Inspiration</Link>
        </Button>
      </nav>
    </div>
  )
}


import Link from "next/link"

import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            Built with faith and love for our community.{" "}
            <Button variant="link" asChild className="p-0">
              <Link href="/prayer-requests">Submit Prayer Request</Link>
            </Button>
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Button variant="ghost" asChild>
            <Link href="/terms">Terms</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/privacy">Privacy</Link>
          </Button>
        </div>
      </div>
    </footer>
  )
}


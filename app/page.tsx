import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DailyVerse } from "@/components/daily-verse"

export default function Home() {
  return (
    <div className="flex-1">
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Blessed Nutrition <span className="text-primary">Nourish Body & Soul</span>
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Healthy nutrition meets spiritual wellness. Discover our protein-packed smoothies, wholesome treats, and
            daily inspiration to fuel your journey.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg">
              <Link href="/menu">
                View Menu <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/locations">Find Location</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto max-w-[800px]">
          <DailyVerse />
        </div>
      </section>
    </div>
  )
}


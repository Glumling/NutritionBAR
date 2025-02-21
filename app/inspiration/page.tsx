import { DailyVerse } from "@/components/daily-verse"
import { InspirationGrid } from "@/components/inspiration-grid"
import { PrayerRequestForm } from "@/components/prayer-request-form"

export default function InspirationPage() {
  return (
    <div className="container py-10 space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-primary">Daily Inspiration</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Find strength in faith and fitness. Let these daily devotionals and motivational content inspire your journey
          to better health - body, mind, and spirit.
        </p>
      </div>

      <div className="grid gap-8">
        <DailyVerse />
        <InspirationGrid />
        <div className="max-w-xl mx-auto">
          <PrayerRequestForm />
        </div>
      </div>
    </div>
  )
}


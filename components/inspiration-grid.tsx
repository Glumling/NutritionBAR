"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dumbbell, Heart, Brain, PlayIcon as Pray, ShoppingBag } from "lucide-react"

// Expanded list of inspirational content
const allInspirations = [
  {
    title: "Physical Wellness",
    icon: Dumbbell,
    quote: "Your body is a temple of the Holy Spirit",
    reference: "1 Corinthians 6:19",
    message:
      "Honor your body through healthy choices and regular exercise. Every step towards better health is a step closer to fulfilling God's purpose for your life.",
  },
  {
    title: "Spiritual Growth",
    icon: Pray,
    quote: "But the fruit of the Spirit is love, joy, peace, patience...",
    reference: "Galatians 5:22",
    message:
      "Nurture your spirit daily through prayer, meditation, and studying His word. Let your healthy choices be guided by faith.",
  },
  {
    title: "Mental Strength",
    icon: Brain,
    quote: "Be transformed by the renewing of your mind",
    reference: "Romans 12:2",
    message:
      "A healthy mind supports a healthy body. Practice positive thinking and let God's wisdom guide your decisions.",
  },
  {
    title: "Emotional Balance",
    icon: Heart,
    quote: "Cast all your anxiety on him because he cares for you",
    reference: "1 Peter 5:7",
    message:
      "Find emotional balance through faith. Remember that your journey to health includes nurturing your emotional well-being.",
  },
  {
    title: "Daily Strength",
    icon: Dumbbell,
    quote: "I can do all things through Christ who strengthens me",
    reference: "Philippians 4:13",
    message:
      "Let your fitness journey be powered by faith. Each rep, each step is a celebration of the strength God provides.",
  },
  {
    title: "Mindful Eating",
    icon: ShoppingBag,
    quote: "Whether you eat or drink, do it all for the glory of God",
    reference: "1 Corinthians 10:31",
    message:
      "Make mindful choices about your nutrition. Your body is a gift from God - nourish it with intention and gratitude.",
  },
  {
    title: "Community Support",
    icon: Heart,
    quote: "For where two or three gather in my name, there am I with them",
    reference: "Matthew 18:20",
    message:
      "Find strength in community. Together we can encourage each other in both our spiritual and fitness journeys.",
  },
  {
    title: "Purpose-Driven Health",
    icon: Brain,
    quote: "For we are God's handiwork, created in Christ Jesus to do good works",
    reference: "Ephesians 2:10",
    message: "Your health journey has purpose. Take care of your body so you can serve God and others effectively.",
  },
]

export function InspirationGrid() {
  const [currentInspirations, setCurrentInspirations] = useState(allInspirations.slice(0, 4))

  useEffect(() => {
    // Get today's date and use it to determine which inspirations to show
    const today = new Date()
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000)

    // Rotate through inspirations based on the day of the year
    const startIndex = dayOfYear % (allInspirations.length - 3) // -3 to always show 4 items
    const selectedInspirations = [
      ...allInspirations.slice(startIndex, startIndex + 4),
      ...allInspirations.slice(0, Math.max(0, 4 - (allInspirations.length - startIndex))),
    ]

    setCurrentInspirations(selectedInspirations)
  }, [])

  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        {currentInspirations.map((content) => (
          <Card key={content.title} className="overflow-hidden">
            <CardHeader className="bg-accent/50 pb-4">
              <div className="flex items-center gap-3">
                <content.icon className="h-6 w-6 text-primary" />
                <CardTitle className="text-xl">{content.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="space-y-2">
                <p className="italic text-lg">&ldquo;{content.quote}&rdquo;</p>
                <p className="text-sm text-muted-foreground">— {content.reference}</p>
              </div>
              <p className="text-muted-foreground">{content.message}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Square POS Integration Notice */}
      <Card className="bg-accent/20">
        <CardContent className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-primary" />
            <p className="text-sm text-muted-foreground">We accept payments through Square POS for your convenience</p>
          </div>
          <img
            src="/square-pos-logo.svg"
            alt="Square POS"
            className="h-8 w-auto"
            onError={(e) => {
              e.currentTarget.src = "https://squareup.com/favicon.ico"
            }}
          />
        </CardContent>
      </Card>
    </div>
  )
}


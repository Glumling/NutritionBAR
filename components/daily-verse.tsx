"use client"

import { useEffect, useState } from "react"
import { Quote } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Expanded daily verses database
const verses = [
  {
    text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
    reference: "Jeremiah 29:11",
  },
  {
    text: "I can do all things through Christ who strengthens me.",
    reference: "Philippians 4:13",
  },
  {
    text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
    reference: "Joshua 1:9",
  },
  {
    text: "Trust in the Lord with all your heart and lean not on your own understanding.",
    reference: "Proverbs 3:5",
  },
  {
    text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
    reference: "Isaiah 40:31",
  },
  {
    text: "Therefore, whether you eat or drink, or whatever you do, do all to the glory of God.",
    reference: "1 Corinthians 10:31",
  },
  {
    text: "Do you not know that your bodies are temples of the Holy Spirit, who is in you, whom you have received from God?",
    reference: "1 Corinthians 6:19",
  },
  {
    text: "The Lord is my strength and my shield; my heart trusts in him, and he helps me.",
    reference: "Psalm 28:7",
  },
  {
    text: "But they who wait for the Lord shall renew their strength; they shall mount up with wings like eagles.",
    reference: "Isaiah 40:31",
  },
  {
    text: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.",
    reference: "Colossians 3:23",
  },
]

export function DailyVerse() {
  const [verse, setVerse] = useState(verses[0])

  useEffect(() => {
    // Get today's date
    const today = new Date()
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000)

    // Use the day of the year to select a verse
    const verseIndex = dayOfYear % verses.length
    setVerse(verses[verseIndex])

    // Store the last update date in localStorage
    const lastUpdate = localStorage.getItem("lastVerseUpdate")
    const currentDate = today.toDateString()

    if (lastUpdate !== currentDate) {
      localStorage.setItem("lastVerseUpdate", currentDate)
    }
  }, [])

  return (
    <Card className="relative overflow-hidden border-none">
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10"
        style={{
          backgroundImage: `
            radial-gradient(circle at top left, rgba(255, 255, 255, 0.4), transparent),
            linear-gradient(to bottom right, rgba(200, 220, 255, 0.5), rgba(230, 240, 255, 0.2))
          `,
        }}
      />
      <div className="absolute inset-0 backdrop-blur-[2px]" />
      <div className="relative">
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-2xl md:text-3xl font-serif">Daily Word of Grace</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex flex-col items-center gap-4 p-4 text-center">
            <Quote className="h-8 w-8 text-primary rotate-180" />
            <p className="text-xl md:text-2xl font-medium leading-relaxed max-w-2xl">{verse.text}</p>
            <p className="text-lg font-serif text-muted-foreground">— {verse.reference}</p>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}


"use client"

import type React from "react"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

export function PrayerRequestForm() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsLoading(false)
    toast({
      title: "Prayer Request Received",
      description: "We will keep you in our prayers. God bless!",
    })

    // Reset form
    event.currentTarget.reset()
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Prayer Request</CardTitle>
        <CardDescription>
          Share your prayer requests with our community. We believe in the power of prayer and would be honored to pray
          for you.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name (Optional)</Label>
            <Input id="name" placeholder="Your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="request">Prayer Request</Label>
            <Textarea id="request" placeholder="Share your prayer request..." required className="min-h-[100px]" />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Submit Prayer Request
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}


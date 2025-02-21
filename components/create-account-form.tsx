"use client"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"
import { useActionState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useToast } from "@/components/ui/use-toast"
import { createAccount } from "@/app/actions/auth"

export function CreateAccountForm() {
  const [state, formAction, isPending] = useActionState(createAccount)
  const { toast } = useToast()
  const router = useRouter()

  // Show toast and redirect on success
  if (state?.success) {
    toast({
      title: "Welcome to Blessed Nutrition!",
      description: state.message,
    })
    router.push("/account")
  }

  return (
    <Card>
      <form action={formAction}>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Create your account to save orders and receive personalized content</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" placeholder="John Doe" required autoComplete="name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                required
                autoComplete="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" name="phone" type="tel" placeholder="(555) 555-5555" required autoComplete="tel" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required autoComplete="new-password" />
              <p className="text-sm text-muted-foreground">Must be at least 8 characters</p>
            </div>
          </div>

          {/* Preferences */}
          <div className="space-y-4">
            <h3 className="font-medium">Communication Preferences</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="dailyVerses">Daily Bible Verses</Label>
                  <p className="text-sm text-muted-foreground">Receive daily inspiration from Scripture</p>
                </div>
                <Switch id="dailyVerses" name="dailyVerses" value="true" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="promotions">Promotions</Label>
                  <p className="text-sm text-muted-foreground">Get updates about special offers and deals</p>
                </div>
                <Switch id="promotions" name="promotions" value="true" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="orderUpdates">Order Updates</Label>
                  <p className="text-sm text-muted-foreground">Receive notifications about your orders</p>
                </div>
                <Switch id="orderUpdates" name="orderUpdates" value="true" defaultChecked />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full" disabled={isPending}>
            {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Create Account
          </Button>
          {state?.success === false && <p className="text-sm text-destructive text-center">{state.message}</p>}
          <p className="text-sm text-muted-foreground text-center">
            By creating an account, you agree to our{" "}
            <Button variant="link" className="p-0 h-auto" asChild>
              <a href="/terms">Terms of Service</a>
            </Button>{" "}
            and{" "}
            <Button variant="link" className="p-0 h-auto" asChild>
              <a href="/privacy">Privacy Policy</a>
            </Button>
          </p>
        </CardFooter>
      </form>
    </Card>
  )
}


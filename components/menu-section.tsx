"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface MenuItem {
  name: string
  description?: string
  price?: string
  size?: string
}

interface AddOn {
  name: string
  price: string
}

interface MenuSectionProps {
  title: string
  description?: string
  price?: string
  items: MenuItem[]
  addOns?: AddOn[]
}

export function MenuSection({ title, description, price, items, addOns }: MenuSectionProps) {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>{title}</CardTitle>
            {description && <CardDescription className="mt-1">{description}</CardDescription>}
          </div>
          {price && (
            <div className="text-right">
              <span className="text-2xl font-bold text-primary">{price}</span>
              <CardDescription>Base Price</CardDescription>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        {items.map((item) => (
          <Dialog key={item.name}>
            <DialogTrigger asChild>
              <div className="flex flex-col gap-2 p-4 rounded-lg border cursor-pointer hover:bg-accent transition-colors">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    {item.description && <p className="text-sm text-muted-foreground">{item.description}</p>}
                  </div>
                  {item.price && <span className="font-bold text-primary">{item.price}</span>}
                </div>
                {item.size && <Badge variant="secondary">{item.size}</Badge>}
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{item.name}</DialogTitle>
                {item.description && <DialogDescription>{item.description}</DialogDescription>}
              </DialogHeader>
              <div className="grid gap-4 py-4">
                {item.price && <p className="font-bold text-lg text-primary">Price: {item.price}</p>}
                {item.size && <Badge variant="secondary">{item.size}</Badge>}
              </div>
            </DialogContent>
          </Dialog>
        ))}
        {addOns && addOns.length > 0 && (
          <div className="mt-4 p-4 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2">Add-ons:</h4>
            <div className="grid grid-cols-2 gap-2">
              {addOns.map((addOn) => (
                <div key={addOn.name} className="flex justify-between items-center p-2 bg-background rounded-md">
                  <span>{addOn.name}</span>
                  <span className="font-semibold text-primary">{addOn.price}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}


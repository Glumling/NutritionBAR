import { MenuSection } from "@/components/menu-section"
import { Card, CardContent } from "@/components/ui/card"

const menuData = {
  energyRefreshers: {
    title: "Energy Refreshers",
    description:
      "Vitamins B,C Antioxidants, 30 Cal, 122 mg Caffeine Energy Focus & Alertness, healthy heart & blood flow 32 OZ.",
    price: "$10",
    items: [
      {
        name: "Mango Lemon",
        description: "Green tea lemon, ED lime, mango, aloe mango, tajin.",
      },
      {
        name: "Captain America",
        description: "Green tea raspberry, ED pomegranate, blue raspberry aloe cranberry.",
      },
      {
        name: "The Cobra",
        description: "Green tea peach, ED tropical fruit, coconut, aloe mandarin.",
      },
      {
        name: "Fruit Coconut",
        description: "Green tea lemon, ED orange, coconut, aloe mango.",
      },
      {
        name: "Immune Booster",
        description: "1000mg Vitamin C, aloe mandarin, passion fruit flavor, green tea lemon ED orange.",
      },
      {
        name: "Collagen Loaded",
        description: "ED pomegranate, Vitamins A, C, antioxidants, hydrolyzed pink lemonade collagen, biotin.",
      },
    ],
    addOns: [
      { name: "Pre-Workout", price: "$2.50" },
      { name: "BCAA", price: "$2.50" },
      { name: "5g Creatine", price: "$2.50" },
    ],
  },
  proteinShakes: {
    title: "Protein Shakes",
    description:
      "24g Protein, 200-250 calories, Vitamins & Minerals, Gluten free, No Sugar Added, Low Glycemic, Organic, 24 OZ.",
    price: "$12",
    items: [
      {
        name: "Banana Nut",
        description: "Banana caramel, peanut cookies, granola, syrup caramel sugar free.",
      },
      {
        name: "Strawberry Cheesecake",
        description: "Strawberry cheesecake, vanilla, syrup strawberry, almonds on top.",
      },
      {
        name: "Mocha",
        description: "Cafe latte, chocolate, chocolate syrup, granola on top.",
      },
      {
        name: "Choco-Coco",
        description: "Chocolate coconut, chocolate, caramel syrup, oreo on top.",
      },
      {
        name: "Captain Crunch",
        description: "Pina colada, pralines & cream, caramel syrup, cinnamon toast.",
      },
      {
        name: "Pumpkin Spice",
        description: "Pumpkin spice, vanilla, syrup caramel, dash of cinnamon.",
      },
      {
        name: "Caramel Frappe",
        description: "Caffe latte, dulce de leche, vanilla, syrup caramel, granola on top.",
      },
      {
        name: "Muscle Recovery",
        description: "Rebuild chocolate, peanut butter, BCAAs, L-Glutamine. (30g Protein)",
      },
      {
        name: "Zero Carbs",
        description: "Just whey protein, white chocolate",
      },
    ],
    addOns: [
      { name: "Fat Reduce", price: "$5.50" },
      { name: "Fiber", price: "$2.50" },
      { name: "Creatine", price: "$2.50" },
      { name: "Protein", price: "$2.50" },
    ],
  },
  waffles: {
    title: "Protein Waffles",
    description: "300 Cal, 30g Protein",
    price: "$13",
    items: [
      {
        name: "Protein Waffle",
        description: "Strawberries, blueberries, caramel syrup sugar free, cinnamon",
      },
    ],
  },
  donuts: {
    title: "Protein Donuts",
    description: "75 Cal, 8g Protein",
    price: "$2.50",
    items: [
      { name: "Coconut" },
      { name: "Marshmallow" },
      { name: "Almonds" },
      { name: "Peanut" },
      { name: "Oreo" },
      { name: "Fruit" },
    ],
  },
  oatmeal: {
    title: "Protein Oatmeal",
    description: "330 Cal, 22g Protein",
    price: "$10",
    items: [
      {
        name: "Protein Oatmeal",
        description: "Vanilla protein, fruit on top, syrup caramel or chocolate",
      },
    ],
  },
  otherItems: {
    title: "Other Items",
    items: [
      {
        name: "Ice-Protein Coffee",
        description: "100 Cal, 15g Protein",
        price: "$7.50",
        size: "24oz",
      },
      {
        name: "Green Tea (Hot)",
        description: "Coconut Lime or Cucumber Lime",
        price: "$4.50",
      },
      {
        name: "Hot Coffee",
        description: "Medium Roast Coffee",
        price: "$4",
      },
      {
        name: "7 Days Plan Probiotics",
        description: "Probiotics, Green Booster, Antioxidants, Green Tea, Healthy Digestion",
        price: "$70",
      },
    ],
  },
}

export default function MenuPage() {
  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Our Menu</h1>
          <p className="text-muted-foreground">
            Protein-packed options crafted with nutritious ingredients, perfect for your healthy lifestyle
          </p>
        </div>
        <Card>
          <CardContent className="p-4">
            <h2 className="font-semibold mb-2">Pricing Guide:</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <span className="font-medium">Base Price:</span> Shown at the top of each section for standard items
              </li>
              <li>
                <span className="font-medium">Individual Prices:</span> Listed next to items with unique pricing
              </li>
              <li>
                <span className="font-medium">Add-ons:</span> Additional options with separate pricing
              </li>
            </ul>
          </CardContent>
        </Card>
        <div className="space-y-12">
          {Object.entries(menuData).map(([key, section]) => (
            <MenuSection key={key} {...section} />
          ))}
        </div>
      </div>
    </div>
  )
}


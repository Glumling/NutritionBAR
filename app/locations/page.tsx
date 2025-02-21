import { LocationMap } from "@/components/location-map"

export default function LocationsPage() {
  const location = {
    name: "Blessed Nutrition at Species Gym",
    address: "23347 Clay Rd, Katy, TX 77493",
    coordinates: { lat: 29.8007, lng: -95.7471 }, // Coordinates for the address
    hours: [
      { day: "Monday - Friday", hours: "6:00 AM - 8:00 PM" },
      { day: "Saturday", hours: "7:00 AM - 6:00 PM" },
      { day: "Sunday", hours: "Closed" },
    ],
  }

  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Visit Us</h1>
          <p className="text-muted-foreground">Find us inside Species Gym, serving healthy and delicious treats</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">{location.name}</h2>
            <p className="text-muted-foreground">{location.address}</p>
            <div className="space-y-2">
              <h3 className="font-medium">Hours of Operation</h3>
              <ul className="space-y-1">
                {location.hours.map((schedule) => (
                  <li key={schedule.day} className="text-sm">
                    <span className="font-medium">{schedule.day}:</span> {schedule.hours}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="aspect-square md:aspect-auto">
            <LocationMap location={location} />
          </div>
        </div>
      </div>
    </div>
  )
}


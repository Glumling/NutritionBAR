"use client"

import { useEffect, useRef, useState } from "react"
import { Loader } from "@googlemaps/js-api-loader"
import { MapPin } from "lucide-react"

interface Location {
  name: string
  address: string
  coordinates: {
    lat: number
    lng: number
  }
}

interface LocationMapProps {
  location: Location
}

export function LocationMap({ location }: LocationMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [mapError, setMapError] = useState(false)

  useEffect(() => {
    const initMap = async () => {
      try {
        const loader = new Loader({
          apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
          version: "weekly",
        })

        const { Map } = await loader.importLibrary("maps")
        const { Marker } = (await loader.importLibrary("marker")) as google.maps.MarkerLibrary

        const map = new Map(mapRef.current as HTMLElement, {
          center: location.coordinates,
          zoom: 15,
          mapId: "BLESSED_NUTRITION_MAP",
        })

        new Marker({
          map,
          position: location.coordinates,
          title: location.name,
        })
      } catch (error) {
        console.error("Error loading Google Maps:", error)
        setMapError(true)
      }
    }

    initMap()
  }, [location])

  if (mapError) {
    return (
      <div className="w-full h-full min-h-[300px] rounded-lg bg-accent/50 flex items-center justify-center">
        <div className="text-center p-4">
          <MapPin className="h-8 w-8 mx-auto mb-2 text-primary" />
          <p className="font-medium">Find us at:</p>
          <p className="text-muted-foreground">{location.address}</p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline mt-2 inline-block"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    )
  }

  return <div ref={mapRef} className="w-full h-full min-h-[300px] rounded-lg" />
}


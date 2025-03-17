"use client";

import { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 37.98541,
  lng: -1.12470,
};

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY!,
      version: "beta", 
      libraries: ["marker"], 
    });

    loader.load().then(() => {
      if (!window.google) {
        console.error("Google Maps API no está disponible");
        return;
      }

      const { Map } = window.google.maps;
      const { AdvancedMarkerElement } = window.google.maps.marker;

      if (!AdvancedMarkerElement) {
        console.error("AdvancedMarkerElement no está disponible");
        return;
      }

      const mapInstance = new Map(mapRef.current!, {
        center,
        zoom: 15,
        mapId: process.env.NEXT_PUBLIC_MAP_ID!,
      });

      new AdvancedMarkerElement({
        position: center,
        map: mapInstance,
      });

      setMap(mapInstance);
    }).catch(error => {
      console.error("Error cargando Google Maps API:", error);
    });
  }, []);

  return <div ref={mapRef} style={containerStyle} />;
}
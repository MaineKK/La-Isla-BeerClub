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
      version: "weekly",
    });

    loader.load().then(() => {
      const google = window.google;
      const mapInstance = new google.maps.Map(mapRef.current, {
        center,
        zoom: 15,
      });
      new google.maps.Marker({ position: center, map: mapInstance });
      setMap(mapInstance);
    });
  }, []);

  return <div ref={mapRef} style={containerStyle} />;
}

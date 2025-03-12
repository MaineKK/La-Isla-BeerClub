"use client";

import { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 37.98541, 
  lng: -1.12470,
};

export default function Map() {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={(mapInstance) => setMap(mapInstance)} 
      >
        {map && <Marker position={center} />} 
      </GoogleMap>
    </LoadScript>
  );
}
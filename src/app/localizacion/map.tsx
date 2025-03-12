"use client";

import { useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

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
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onLoad={(mapInstance) => setMap(mapInstance)} 
    >
      {map && <Marker position={center} />} 
    </GoogleMap>
  );
}

"use client";
import React, { useState } from "react"
import { Map, Marker, ZoomControl } from "pigeon-maps"



export default function MapComponent() {
  const [center, setCenter] = useState<[number, number]>([28.641799381305614, -106.1468868844885])
  const [zoom, setZoom] = useState(16)

  return (
    <div className="w-[100%] h-[250px] md:h-[400px] ">
      <Map 
        center={center} 
        zoom={zoom} 
        onBoundsChanged={({ center, zoom }) => { 
          if (center.length === 2) {
            setCenter(center as [number, number])
            setZoom(zoom) 
          }
        }}
      >
        <ZoomControl/>
        <Marker width={50} anchor={[28.641799381305614, -106.1468868844885]}  />
      </Map>
    </div>
  )
}
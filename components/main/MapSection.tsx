'use client'
import React, { useState } from 'react'
import MapComponent from '../sub/MapComponent'

function MapSection() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div className="mx-auto w-[100%] md:max-w-7xl py-12 px-12">
        <div className="relative isolate overflow-hidden bg-gray-900 bg-opacity-50 rounded-3xl pb-20">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle
              cx="512"
              cy="512"
              r="512"
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fill-opacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stop-color="#7775D6" />
                <stop offset="1" stop-color="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className='text-center p-12'>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Where can you find <span className="text-purple-500">us?</span>
            </h2>
          </div>
          <div className='w-full h-full flex items-center justify-center'>
            <div className='w-[75%] bg-amber-50 flex items-center justify-center rounded-md overflow-hidden'>
              <MapComponent />
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default MapSection
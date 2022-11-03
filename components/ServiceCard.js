import React from 'react'
import Image from 'next/image'

const ServiceCard = ({ children, icon }) => {
  return (
    <div className="py-8 px-6 flex items-center  bg-[#f5f5f5] hover:invert focus:ring-gray-500 focus:ring-offset-gray-200 text-gray-700 w-full transition ease-in duration-200 text-center text-2xl font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 gap-3 rounded-r-full h-12">
      <Image
        src={icon}
        alt="icon"
        width={35}
        height={50}
        className="inline h-auto"
      />
      {children}
    </div>
  )
}

export default ServiceCard

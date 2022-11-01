import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Stories = () => {
  return (
    <div className="container mx-auto px-4 flex relative">
      <div className="grid gap-4 md:grid-cols-2 align-middle justify-between w-full">
        <div className="flex flex-col justify-center relative z-20 gap-6">
          <h3 className="text-4xl sm:text-4xl font-semibold flex flex-col text-gray-900">
            RE/MAX Website Design
          </h3>
          <p className="text-sm sm:text-lg text-gray-600">
            We worked with Remax on their website
            <br />
            providing the best of technology and reach.
          </p>
          <div className="flex items-center justify-center md:justify-start">
            <Link className="py-2 font-bold sm:text-lg" href="#">
              <div className="flex items-center gap-2">
                <span>Explore Website</span>
                <Image
                  src="/icons/arrow_right.svg"
                  alt="phone"
                  width={18}
                  height={18}
                  className="inline invert"
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start relative">
          <Image
            src="/img/stories/Mockups.png"
            alt="service"
            width={1209.96}
            height={766.66}
          />
        </div>
      </div>
    </div>
  )
}

export default Stories

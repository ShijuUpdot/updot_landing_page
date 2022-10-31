import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="container mx-auto px-4 flex relative py-8">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col justify-center relative z-20 gap-6 order-last md:order-first">
          <h1
            className="text-4xl sm:text-5xl xl:text-6xl font-extrabold flex flex-col text-gray-900"
            style={{
              lineHeight: '114%',
            }}
          >
            Agency to provide
            <span>top-notch digital</span>
            <span>experience</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing
            <br />
            elit. Vehicula massa in enim luctus. Rutrum arcu.
          </p>

          <div className="flex">
            <Link
              href="#"
              className="py-2 px-4 rounded-lg bg-gray-900 border-2 border-transparent text-white text-base sm:text-lg mr-4 hover:bg-gray-800"
            >
              Read Success Stories
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start relative z-20">
          <Image src="/img/hero.svg" alt="hero" width={1000} height={1000} />
        </div>
      </div>
    </div>
  )
}

export default Hero

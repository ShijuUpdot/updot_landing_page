import React from 'react'
import Link from 'next/link'
import HeroForm from './HeroForm'
// import HeroImg from '../assets/Hero.svg'

const Hero = () => {
  return (
    <div className="container mx-auto px-4 py-20 flex relative md:top-4 md:h-screen">
      <div className="grid gap-y-10 md:gap-x-24 md:grid-cols-2">
        <div className="flex flex-col justify-center relative z-20 gap-3 md:gap-6">
          <h1 className="text-4xl sm:text-4xl xl:text-5xl font-extrabold flex flex-col text-gray-900 gap-y-2">
            Professional
            <span>Website Design and</span>
            <span>Development</span>
            <span>Company</span>
          </h1>
          <p className="text-sm sm:text-sm xl:text-base text-gray-600 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula
            massa in enim luctus. Rutrum arcu.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum
            arcu.
          </p>

          <div className="flex">
            <Link
              href="#stories"
              className="py-2 px-4 rounded-lg bg-gray-900 border-2 border-transparent text-white text-base sm:text-lg mr-4 hover:bg-gray-800"
            >
              Read Success Stories
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start relative z-20 ">
          <HeroForm />
        </div>
      </div>
    </div>
  )
}

export default Hero

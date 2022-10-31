import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ServiceCard from './ServiceCard'

const Services = () => {
  const services = [
    'Web Development',
    'Applicaton Development',
    'Chatbot Development',
    'UI/UX Design',
    'Game Development',
    'AR/VR Development',
    'Maintenance & Upgrade',
    'DevOps & Cloud',
  ]

  return (
    <div className="container mx-auto px-4 flex relative">
      <div className="grid gap-4 md:grid-cols-2 align-middle justify-between w-full">
        <div className="flex flex-col justify-center items-start relative">
          <Image
            src="/img/services.png"
            alt="hero"
            width={430}
            height={595.79}
            className="max-w-full"
          />
        </div>
        <div className="flex flex-col justify-center relative z-20 gap-6">
          <h3 className="text-4xl sm:text-4xl font-semibold flex flex-col text-gray-900">
            Our Mastered Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 grid-flow-row">
            {services.map((service, index) => (
              <ServiceCard
                key={service}
                icon={`/icons/services/${index + 1}.svg`}
              >
                {service}
              </ServiceCard>
            ))}
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <Link className="py-2 font-bold sm:text-lg" href="#">
              <div className="flex items-center gap-2">
                <span>Explore Services</span>
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
      </div>
    </div>
  )
}

export default Services

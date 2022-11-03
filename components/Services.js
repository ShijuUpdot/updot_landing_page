import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ServiceCard from './ServiceCard'
import ServiceImg from '../assets/Services.svg'

const Services = () => {
  const services = [
    'Web Development',
    // 'Applicaton Development',
    // 'Chatbot Development',
    // 'UI/UX Design',
    // 'Game Development',
    // 'AR/VR Development',
    // 'Maintenance & Upgrade',
    // 'DevOps & Cloud',
  ]

  return (
    <div className="container mx-auto px-4s flex relative">
      <div className="grid gap-4 md:grid-cols-2 align-middle justify-between w-full">
        <div className="flex flex-col justify-center items-start relative order-last sm:order-first">
          <Image src={ServiceImg} alt="hero" />
        </div>
        <div className="flex flex-col justify-center relative z-20 gap-6">
          <div className="ml-auto max-w-md flex flex-col gap-5">
            {services.map((service, index) => (
              <ServiceCard
                key={service}
                icon={`/icons/services/${index + 1}.svg`}
              >
                {service}
              </ServiceCard>
            ))}
            <p className="text-sm sm:text-base text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula
              massa in enim luctus. Rutrum arcu.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum
              arcu.
            </p>
            <Link className="py-2 font-bold text-xl" href="#">
              <div className="flex items-center gap-2">
                <span>Contact&nbsp;Us</span>
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

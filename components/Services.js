import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ServiceCard from './ServiceCard'
import ServiceImg from '../assets/webp/Web_development-Mockup.webp'

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
    <div className="container mx-auto px-4 flex relative">
      <div className="grid gap-4 md:grid-cols-2 align-middle justify-between w-full">
        <div className="flex flex-col justify-center items-start relative">
          <Image src={ServiceImg} alt="hero" />
        </div>
        <div className="flex flex-col justify-center relative z-20 gap-6">
          <div className="mt-5 md:mt-0 ml-auto max-w-md flex flex-col gap-5">
            {services.map((service, index) => (
              <ServiceCard
                key={service}
                icon={`/icons/services/${index + 1}.svg`}
              >
                {service}
              </ServiceCard>
            ))}
            <p className="text-sm sm:text-base text-gray-600">
              We are developers by profession and artists by passion. Leveraging
              the use of the latest tech and trends in the field, we offer the
              best web design solutions for any business needs.
            </p>
            <Link className="py-2" href="#contact">
              <div className="flex items-center gap-2">
                <span className="font-bold text-base md:text-xl text-gray-900">
                  Contact&nbsp;Us
                </span>
                <Image
                  src="/icons/arrow_right.svg"
                  alt="phone"
                  width={18}
                  height={18}
                  className="inline invert select-none"
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

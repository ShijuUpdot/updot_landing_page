import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div className="container mx-auto px-4 relative flex flex-col md:flex-row  justify-center items-center gap-16">
      {/* Left Side */}
      <div className="w-full md:w-1/2 flex flex-col self-start relative order-1 md:order-first">
        <div className="py-9 px-2">
          <Image
            src="/logo-alt.png"
            alt="Logo"
            width={200}
            height={200}
            className="mb-4"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="px-2 md:py-3">
            <h3 className="text-xl font-semibold mb-4 text-[#090914]">
              Our Address
            </h3>
            <div className="flex items-center justify-start">
              <div className="mr-1 flex items-center">
                <Image
                  src="/icons/location.svg"
                  alt="Location"
                  width={20}
                  height={20}
                />
              </div>
              <p className="ml-2 text-[#090914] text-base">
                No.32, next to spring valley club, Bengaluru,
                <br />
                Karnataka 560090
              </p>
            </div>
          </div>
          <hr className="border-[#95959F] mb-4 max-w-xl" />
          <div className="px-2 py-3">
            <h3 className="text-xl font-semibold mb-4 text-[#090914]">
              Call Us
            </h3>
            <div className="flex items-center justify-start">
              <div className="mr-1 flex items-center">
                <Image
                  src="/icons/telephone.svg"
                  alt="Location"
                  width={20}
                  height={20}
                />
              </div>
              <Link
                href="tel:+917353311555"
                className="ml-2 text-[#090914] text-base"
              >
                +91 7353311555
              </Link>
            </div>
          </div>
          <hr className="border-[#95959F] mb-4 max-w-xl" />
          <div className="px-2 py-3">
            <h3 className="text-xl font-semibold mb-4 text-[#090914]">
              Our Email
            </h3>
            <div className="flex items-center justify-start">
              <div className="mr-1 flex items-center">
                <Image
                  src="/icons/envelope.svg"
                  alt="Mail"
                  width={20}
                  height={20}
                />
              </div>
              <Link
                href="mailto:hello@updot.in"
                className="ml-2 text-[#090914] text-base"
              >
                hello@updot.in
              </Link>
            </div>
          </div>
          <hr className="border-[#95959F] mb-4 max-w-xl" />
        </div>
      </div>
      {/* Right Side */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start relative">
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact

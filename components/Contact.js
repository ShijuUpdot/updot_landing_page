import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [companyWebsite, setCompanyWebsite] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('Submit')

  return (
    <div className="container mx-auto px-4 relative flex flex-col md:flex-row  justify-center items-center gap-10">
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
          <div className="px-2 py-3">
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
              Our Address
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
        <form action="#" method="GET" className="w-full pl-0 md:pl-4">
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base md:text-xl font-medium text-[#1C1C1C]"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full name"
              min="0"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full appearance-none rounded-xl border border-[#1C1C1C] bg-white py-3 px-6 text-base md:text-xl font-medium text-[#6B7280] outline-none focus:border-[#1C1C1C] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-3 block text-base md:text-xl font-medium text-[#1C1C1C]"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              min="0"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full appearance-none rounded-xl border border-[#1C1C1C] bg-white py-3 px-6 text-base md:text-xl font-medium text-[#6B7280] outline-none focus:border-[#1C1C1C] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="companyName"
              className="mb-3 block text-base md:text-xl font-medium text-[#1C1C1C]"
            >
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              placeholder="Company name"
              min="0"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full appearance-none rounded-xl border border-[#1C1C1C] bg-white py-3 px-6 text-base md:text-xl font-medium text-[#6B7280] outline-none focus:border-[#1C1C1C] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="companyWebsite"
              className="mb-3 block text-base md:text-xl font-medium text-[#1C1C1C]"
            >
              Company Website
            </label>
            <input
              type="text"
              name="companyWebsite"
              id="companyWebsite"
              placeholder="Company website"
              min="0"
              value={companyWebsite}
              onChange={(e) => setCompanyWebsite(e.target.value)}
              className="w-full appearance-none rounded-xl border border-[#1C1C1C] bg-white py-3 px-6 text-base md:text-xl font-medium text-[#6B7280] outline-none focus:border-[#1C1C1C] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="companyWebsite"
              className="mb-3 block text-base md:text-xl font-medium text-[#1C1C1C]"
            >
              Choose the services that best fits your need.
            </label>
            <div className="grid grid-col-1 md:grid-cols-2 grid-rows-3 gap-4">
              <div className="flex items-center">
                <input
                  id="service1"
                  type="checkbox"
                  value=""
                  name="bordered-checkbox"
                  className="w-5 h-5 accent-gray-900 rounded border-gray-300"
                />
                <label
                  htmlFor="service1"
                  className="ml-2 w-full text-base md:text-xl font-normal text-[#1C1C1C]"
                >
                  UI/UX Design
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="service1"
                  type="checkbox"
                  value=""
                  name="bordered-checkbox"
                  className="w-5 h-5 accent-gray-900 rounded border-gray-300"
                />
                <label
                  htmlFor="service1"
                  className="ml-2 w-full text-base md:text-xl font-normal text-[#1C1C1C]"
                >
                  Marketing & Content
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="service1"
                  type="checkbox"
                  value=""
                  name="bordered-checkbox"
                  className="w-5 h-5 accent-gray-900 rounded border-gray-300"
                />
                <label
                  htmlFor="service1"
                  className="ml-2 w-full text-base md:text-xl font-normal text-[#1C1C1C]"
                >
                  Web Development
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="service1"
                  type="checkbox"
                  value=""
                  name="bordered-checkbox"
                  className="w-5 h-5 accent-gray-900 rounded border-gray-300"
                />
                <label
                  htmlFor="service1"
                  className="ml-2 w-full text-base md:text-xl font-normal text-[#1C1C1C]"
                >
                  User Research Workshop
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="service1"
                  type="checkbox"
                  value=""
                  name="bordered-checkbox"
                  className="w-5 h-5 accent-gray-900 rounded border-gray-300"
                />
                <label
                  htmlFor="service1"
                  className="ml-2 w-full text-base md:text-xl font-normal text-[#1C1C1C]"
                >
                  Brand Strategy
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="service1"
                  type="checkbox"
                  value=""
                  name="bordered-checkbox"
                  className="w-5 h-5 accent-gray-900 rounded border-gray-300"
                />
                <label
                  htmlFor="service1"
                  className="ml-2 w-full text-base md:text-xl font-normal text-[#1C1C1C]"
                >
                  Other
                </label>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <label
              htmlFor="details"
              className="mb-3 block text-base md:text-xl font-medium text-[#1C1C1C]"
            >
              Message
            </label>
            <textarea
              rows={5}
              name="details"
              id="details"
              placeholder="Type your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full appearance-none rounded-xl border border-[#1C1C1C] bg-white py-3 px-6 text-base md:text-xl font-medium text-[#6B7280] outline-none focus:border-[#1C1C1C] focus:shadow-md"
            />
          </div>

          <div className="px-2 py-3">
            <button className="hover:shadow-form rounded-xl bg-gray-900 py-2 px-16 text-center text-lg md:text-xl font-semibold text-white outline-none">
              {status}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact

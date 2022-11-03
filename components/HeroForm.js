import React, { useState } from 'react'
import IconButton from './IconButton'
import Title from './Title'

const HeroForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('Submit')
  return (
    <div className="flex flex-col justify-center items-start relative bg-white rounded-xl justify-self-center py-8 px-12 w-full max-w-lg">
      <h3 className="uppercase text-2xl font-bold text-gray-900 text-center w-full pb-4">
        Get in Touch
      </h3>
      <form action="#" method="GET" className="w-full">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-3 text-xl hidden font-medium text-[#1C1C1C]"
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            min="0"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full appearance-none rounded-xl border border-[#1C1C1C] bg-white py-3 px-6 text-xl font-medium text-[#6B7280] outline-none focus:border-[#1C1C1C] focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-3 text-xl hidden font-medium text-[#1C1C1C]"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            min="0"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full appearance-none rounded-xl border border-[#1C1C1C] bg-white py-3 px-6 text-xl font-medium text-[#6B7280] outline-none focus:border-[#1C1C1C] focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="companyName"
            className="mb-3 text-xl hidden font-medium text-[#1C1C1C]"
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
            className="w-full appearance-none rounded-xl border border-[#1C1C1C] bg-white py-3 px-6 text-xl font-medium text-[#6B7280] outline-none focus:border-[#1C1C1C] focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="mobileNumber"
            className="mb-3 text-xl hidden font-medium text-[#1C1C1C]"
          >
            Mobile Number
          </label>
          <input
            type="text"
            name="mobileNumber"
            id="mobileNumber"
            placeholder="Mobile Number"
            min="0"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className="w-full appearance-none rounded-xl border border-[#1C1C1C] bg-white py-3 px-6 text-xl font-medium text-[#6B7280] outline-none focus:border-[#1C1C1C] focus:shadow-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="details"
            className="mb-3 text-xl hidden font-medium text-[#1C1C1C]"
          >
            Message
          </label>
          <textarea
            rows={5}
            name="details"
            id="details"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full appearance-none rounded-xl border border-[#1C1C1C] bg-white py-3 px-6 text-xl font-medium text-[#6B7280] outline-none focus:border-[#1C1C1C] focus:shadow-md"
          />
        </div>

        <div className="px-2 py-3 w-fit mx-auto">
          <IconButton icon="/icons/arrow_right.svg" order={2}>
            Send Message
          </IconButton>
        </div>
      </form>
    </div>
  )
}

export default HeroForm

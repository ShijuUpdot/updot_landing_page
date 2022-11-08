import React, { useState } from 'react'
import IconButton from './IconButton'
import { useForm, ValidationError } from '@formspree/react'
import Thanks from './Thanks'

const HeroForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [message, setMessage] = useState('')
  const [state, handleSubmit] = useForm('xgeqrepg')

  if (state.succeeded) {
    return <Thanks />
  }

  return (
    <div className="flex flex-col justify-center items-start relative bg-white rounded-xl justify-self-center w-full md:max-w-md lg:max-w-lg  xl:max-w-xl ml-auto px-6 xl:px-12 md:px-8 py-6 xl:py-6 drop-shadow-xl">
      <h3 className="uppercase lg:text-xl xl:text-2xl font-bold text-gray-900 text-center w-full pb-4">
        Get in Touch
      </h3>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-3 text-base md:text-xl hidden font-medium text-[#1C1C1C]"
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
            className="w-full appearance-none rounded-xl border border-[#1C1C1C] bg-white py-2 px-2 xl:py-3 xl:px-3 text-base font-medium text-[#6D6969] outline-none focus:border-[#1C1C1C] focus:shadow-md placeholder-[#6D6969]"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-3 text-base md:text-xl hidden font-medium text-[#1C1C1C]"
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
            className="w-full appearance-none rounded-xl border border-[#1C1C1C] bg-white py-2 px-2 xl:py-3 xl:px-3 text-base font-medium text-[#6D6969] outline-none focus:border-[#1C1C1C] focus:shadow-md placeholder-[#6D6969]"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="mb-5">
          <label
            htmlFor="companyName"
            className="mb-3 text-base md:text-xl hidden font-medium text-[#1C1C1C]"
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
            className="w-full appearance-none rounded-xl border border-[#1C1C1C] bg-white py-2 px-2 xl:py-3 xl:px-3 text-base font-medium text-[#6D6969] outline-none focus:border-[#1C1C1C] focus:shadow-md placeholder-[#6D6969]"
          />
          <ValidationError
            prefix="Company Name"
            field="companyName"
            errors={state.errors}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="mobileNumber"
            className="mb-3 text-base md:text-xl hidden font-medium text-[#1C1C1C]"
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
            className="w-full appearance-none rounded-xl border border-[#1C1C1C] bg-white py-2 px-2 xl:py-3 xl:px-3 text-base font-medium text-[#6D6969] outline-none focus:border-[#1C1C1C] focus:shadow-md placeholder-[#6D6969]"
          />
          <ValidationError
            prefix="Mobile Number"
            field="mobileNumber"
            errors={state.errors}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="details"
            className="mb-3 text-base md:text-xl hidden font-medium text-[#1C1C1C]"
          >
            Message
          </label>
          <textarea
            rows={3}
            name="details"
            id="details"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full appearance-none rounded-xl border border-[#1C1C1C] bg-white py-2 px-2 xl:py-3 xl:px-3 text-base font-medium text-[#6D6969] outline-none focus:border-[#1C1C1C] focus:shadow-md placeholder-[#6D6969]"
          />
          <ValidationError
            prefix="Message"
            field="details"
            errors={state.errors}
          />
        </div>

        <div className="px-2 py-1 w-fit mx-auto">
          <IconButton icon="/icons/arrow_right.svg" order={2} type="submit">
            Send Message
          </IconButton>
        </div>
      </form>
    </div>
  )
}

export default HeroForm

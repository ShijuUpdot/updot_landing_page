import React from 'react'

const Contact = () => {
  return (
    <div className="container mx-auto px-4 flex relative">
      <form
        action="#"
        method="GET"
        className="w-full max-w-full py-4 sm:px-24 xl:px-40  mx-auto"
      >
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-3 block text-xl font-medium text-[#1C1C1C]"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            min="0"
            className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-xl font-medium text-[#6B7280] outline-none focus:border-[#1C1C1C] focus:shadow-md"
          />
        </div>
        <div className="-mx-3 flex flex-wrap">
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="companyName"
                className="mb-3 block text-xl font-medium text-[#1C1C1C]"
              >
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                id="companyName"
                placeholder="Company name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-xl font-medium text-[#6B7280] outline-none focus:border-[#1C1C1C] focus:shadow-md"
              />
            </div>
          </div>
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="Company Website"
                className="mb-3 block text-xl font-medium text-[#1C1C1C]"
              >
                Company Website
              </label>
              <input
                type="text"
                name="Company Website"
                id="Company Website"
                placeholder="Company Website"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-xl font-medium text-[#6B7280] outline-none focus:border-[#1C1C1C] focus:shadow-md"
              />
            </div>
          </div>
        </div>

        <div className="-mx-3 flex flex-wrap">
          <div className="w-full flex flex-wrap px-3 sm:w-1/2">
            <div className="mb-5 md:pr-3 sm:w-1/4">
              <label
                htmlFor="phoneNumber"
                className="mb-3 block text-xl font-medium text-[#1C1C1C]"
              >
                Phone&nbsp;Number
              </label>
              <select
                type="text"
                name="countryCode"
                id="countryCode"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-2 text-xl font-medium text-[#6B7280] outline-none focus:border-[#1C1C1C] focus:shadow-md"
              >
                <option>IND(+91)</option>
                <option>EUR(+43)</option>
                <option>US(+1)</option>
              </select>
            </div>
            <div className="mb-5 md:pl-3 sm:w-3/4">
              <label
                htmlFor="countryCode"
                className="mb-3 text-xl font-medium text-[#1C1C1C] hidden md:block"
              >
                &nbsp;
              </label>
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Phone number"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-xl font-medium text-[#6B7280] outline-none focus:border-[#1C1C1C] focus:shadow-md"
              />
            </div>
          </div>
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-xl font-medium text-[#1C1C1C]"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-xl font-medium text-[#6B7280] outline-none focus:border-[#1C1C1C] focus:shadow-md"
              />
            </div>
          </div>
        </div>

        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-3 block text-xl font-medium text-[#1C1C1C]"
          >
            Project Details (optional)
          </label>
          <textarea
            rows={5}
            name="details"
            id="details"
            placeholder="Please discribe the project in brief"
            className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-xl font-medium text-[#6B7280] outline-none focus:border-[#1C1C1C] focus:shadow-md"
          />
        </div>

        <div className="flex justify-center">
          <button className="hover:shadow-form rounded-md bg-gray-900 py-3 px-16 text-center text-xl font-semibold text-white outline-none">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact

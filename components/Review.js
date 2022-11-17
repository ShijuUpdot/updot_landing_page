import React from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'

const Review = ({ stars, name, desc, image, title }) => {
  return (
    <div>
      <div className="max-w-lg rounded-md bg-white">
        <div className="flex space-x-0.5 pb-2 justify-center items-center md:justify-start">
          {[...Array(stars)].map((e, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-[#FDB241]"
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
          ))}
        </div>
        <div className="">
          <h3 className="font-semibold text-gray-900 text-center md:text-start mb-2">
            {title}
          </h3>
          <p className="text-sm font-normal leading-5 text-gray-700 max-w-sm text-center md:text-start py-1">
            {desc}
          </p>
        </div>
        <div className="mt-2 flex items-center space-x-2 justify-center md:justify-start">
          <div className="flex flex-shrink-0 rounded-full border border-gray-200">
            <Image
              className="w-8 h-8 object-cover rounded-full"
              src={image}
              alt=""
            />
          </div>
          <span className="text-sm font-semibold leading-5 text-gray-900">
            {name}
          </span>
        </div>
      </div>
    </div>
  )
}

Review.propTypes = {
  stars: PropTypes.number,
  name: PropTypes.string,
  desc: PropTypes.string,
  image: PropTypes.object,
  title: PropTypes.string,
}

export default Review

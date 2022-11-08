import React from 'react'
import ThanksImage from '../assets/thanks.png'
import Image from 'next/image'

const Thanks = () => {
  return (
    <div className="flex flex-col justify-center items-center relative bg-white rounded-xl justify-self-center w-full md:max-w-md lg:max-w-lg  xl:max-w-xl ml-auto px-6 xl:px-12 md:px-8 py-8 xl:py-6 drop-shadow-xl h-full md:h-1/2">
      <Image src={ThanksImage} alt="thanks" width={300} height={300} />
      <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-black text-center w-full pb-4 mt-5">
        Thank you
      </h3>
      <p className="text-base md:text-xl text-gray-600 text-center w-full pb-4">
        One of our executive will get in touch with you.
      </p>
    </div>
  )
}

export default Thanks

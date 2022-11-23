import React from 'react'
import ThanksImage from '../assets/thanks.png'
import Image from 'next/image'

const Message = () => {
  return (
    <div className="h-screen w-full top-0 left-0">
      <div className="flex h-full w-full flex-col justify-center items-center relative bg-white rounded-xl justify-self-center px-6 xl:px-12 md:px-8  drop-shadow-xl">
        <Image
          src={ThanksImage}
          alt="thanks"
          width={300}
          height={300}
          className="pt-8"
        />
        <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-black text-center w-full pb-4 mt-5">
          Thank you
        </h3>
        <p className="text-base md:text-xl text-gray-600 text-center w-full pb-4">
          One of our executive will get in touch with you.
        </p>
      </div>
    </div>
  )
}

export default Message

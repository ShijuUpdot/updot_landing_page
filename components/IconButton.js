import React from 'react'
import Image from 'next/image'

const IconButton = ({ children, icon, style, onClick, order = 1 }) => {
  return (
    <button
      type="button"
      className="py-2 px-4 flex justify-center items-center  bg-black hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg gap-1"
      style={style}
      onClick={onClick}
    >
      <span className={`order-${order}`}>{children}</span>
      <Image src={icon} alt="icon" width={15} height={15} />
    </button>
  )
}

export default IconButton

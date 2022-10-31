import React from 'react'

const IconButton = ({ children, icon, style }) => {
  return (
    <button
      type="button"
      className="py-2 px-4 flex justify-center items-center  bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
      style={style}
    >
      {children}
      {icon}
    </button>
  )
}

export default IconButton

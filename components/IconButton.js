import React from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'

const IconButton = ({ children, icon, style, onClick, order = 1 }) => {
  return (
    <button
      type="button"
      className="py-3 px-6 flex justify-center items-center  bg-black hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg gap-1"
      style={style}
      onClick={onClick}
    >
      <span className={`order-${order}`}>{children}</span>
      <Image src={icon} alt="icon" width={20} height={20} />
    </button>
  )
}

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.string.isRequired,
  style: PropTypes.object,
  onClick: PropTypes.func,
  order: PropTypes.number,
}

export default IconButton

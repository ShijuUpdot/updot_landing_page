import React from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'

const IconButton = ({
  children,
  icon,
  style,
  onClick,
  order = 1,
  type = 'button',
}) => {
  return (
    <button
      type={type}
      className={`py-3 px-6 flex justify-center items-center  bg-gray-900 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-sm md:text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg gap-2 ${
        order == 1 ? 'flex-row-reverse' : ''
      } `}
      style={style}
      onClick={onClick}
    >
      {children}
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

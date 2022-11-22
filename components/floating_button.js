import React from 'react'

import Link from 'next/link'
import PropTypes from 'prop-types'
const FloatingButton = ({ link, children }) => {
  return (
    <div className="fixed bottom-12 right-12 w-16 h-16 z-30 bg-white rounded-full flex items-center justify-center shadow-2xl shadow-slate-800 cursor-pointer">
      <Link href={link} target="_blank">
        {children}
      </Link>
    </div>
  )
}
FloatingButton.propTypes = {
  children: PropTypes.node,
  link: PropTypes.string.isRequired,
}
export default FloatingButton

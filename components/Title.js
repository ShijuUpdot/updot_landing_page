import React from 'react'

const Title = ({ children, style }) => {
  return (
    <h2
      className="py-10 xl:py-16 text-2xl sm:text-4xl md:text-5xl font-bold text-center"
      style={style}
    >
      {children}
    </h2>
  )
}

export default Title

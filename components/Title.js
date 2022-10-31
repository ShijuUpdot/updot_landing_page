import React from 'react'

const Title = ({ children }) => {
  return (
    <h2 className="sm:py-10 xl:py-16 text-4xl font-bold text-center">
      {children}
    </h2>
  )
}

export default Title

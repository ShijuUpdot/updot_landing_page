import React from 'react'
import IconButton from './IconButton'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="bg-white">
      <div className="max-w-full mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          <div className="w-full justify-between flex items-center">
            <a className="flex-shrink-0" href="#">
              <Image
                className="h-8 w-8"
                src="/logo.svg"
                alt="Workflow"
                width={100}
                height={100}
              />
            </a>
            <div>
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  className="text-gray-300 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium hidden md:block"
                  href="tel:917353311555"
                >
                  +91&nbsp;7353311555
                </a>
                <IconButton style={{ backgroundColor: 'black' }}>
                  Lets talk
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

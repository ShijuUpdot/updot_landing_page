import React from 'react'
import IconButton from './IconButton'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <div className="max-w-full mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          <div className="w-full justify-between flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link className="flex-shrink-0" href="#">
                <Image
                  className="h-8 w-8"
                  src="/logo.svg"
                  alt="logo"
                  width={100}
                  height={100}
                />
              </Link>
              <div className="px-4 hidden md:block">
                <hr className="h-8 border-[#1C1C1C] border-l-2" />
              </div>
              <div className="hidden md:block">
                <Link href={'#'} className="text-sm font-normal text-[#333334]">
                  hello@updot.in
                </Link>
              </div>
            </div>
            <div>
              <div className="ml-10 flex items-center space-x-10">
                <div className="hidden md:block">
                  <Link
                    className="text-gray-300 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium hidden md:block"
                    href="tel:917353311555"
                  >
                    +91&nbsp;7353311555
                  </Link>
                </div>
                <IconButton icon={'/icons/arrow_right.svg'}>
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

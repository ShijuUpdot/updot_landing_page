import React from 'react'
import IconButton from './IconButton'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="w-full relative bg-[#f5f5f5] ">
      <div className="max-w-full mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <div className="w-full justify-between flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link className="flex-shrink-0" href="/">
                <Image
                  src="/logo.svg"
                  alt="logo"
                  width={65}
                  height={65}
                  className="h-14 w-auto"
                />
              </Link>
              <div className="px-4 hidden md:block">
                <hr className="h-8 border-[#1C1C1C] border-l-2" />
              </div>
              <div className="hidden md:block">
                <Link
                  href={'mailto:hello@updot.in'}
                  className="text-sm font-normal text-[#333334]"
                >
                  hello@updot.in
                </Link>
              </div>
            </div>
            <div>
              <div className="ml-10 flex items-center space-x-10">
                <div className="block">
                  <Link
                    className="text-black hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                    href="tel:917907589188"
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        src="/icons/telephone.svg"
                        alt="phone"
                        width={18}
                        height={18}
                        className="inline"
                      />
                      <span>+91&nbsp;7907589188</span>
                    </div>
                  </Link>
                </div>
                <div className="hidden md:block">
                  <IconButton
                    icon={'/icons/arrow_right.svg'}
                    order={2}
                    onClick={() => {
                      window.location.href = '#contact'
                    }}
                  >
                    Lets talk
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

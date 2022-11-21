import React from 'react'
import Image from 'next/image'
import IconButton from './IconButton'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="container mx-auto px-4 py-10">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center flex-shrink-0 ">
          <Image
            src="/logo.svg"
            alt="Updot Logo"
            width={50}
            height={50}
            className="w-auto h-14"
          />
        </Link>
        <div className="sm:flex sm:items-center sm:justify-between">
          <span
            className="text-sm text-gray-900 sm:text-center"
            style={{ fontFeatureSettings: `'salt' on` }}
          >
            © 2022{' '}
            <Link href="/" className="hover:underline">
              Updot{' '}
            </Link>
            All Rights Reserved.
          </span>
        </div>
      </div>
      {/* <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" /> */}
    </footer>
  )
}

export default Footer

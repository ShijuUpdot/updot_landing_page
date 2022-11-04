import React from 'react'
import Image from 'next/image'
import IconButton from './IconButton'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="container mx-auto px-4 py-10">
      <div className="grid grid-col-2 md:grid-cols-3 gap-4 md:justify-items-between w-full grid-flow-col">
        <div className="flex flex-col">
          <Link
            href="https://updot.in/"
            className="flex items-center flex-shrink-0 "
          >
            <Image src="/logo.svg" alt="Updot Logo" width={50} height={50} />
          </Link>
          {/* For Mobile View */}
          <div className="flex-col w-fit mt-8 md:hidden flex">
            <IconButton icon={'/icons/web.svg'} order={2}>
              Visit Website
            </IconButton>
          </div>
        </div>
        <div className="flex-col w-fit text-center self-center justify-self-center hidden md:flex">
          <IconButton icon={'/icons/web.svg'} order={2}>
            Visit Website
          </IconButton>
        </div>

        <div className="flex gap-5 self-start md:self-center justify-end">
          <Link
            href="#"
            className="bg-gray-100 h-14 w-14 rounded-full flex items-center justify-center"
          >
            <Image
              alt="facebook"
              src="/icons/fb.svg"
              className="mx-auto object-contain w-5 h-5"
              width={18}
              height={18}
            />
          </Link>
          <Link
            href="#"
            className="bg-gray-100 h-14 w-14 rounded-full flex items-center justify-center"
          >
            <Image
              alt="instagram"
              src="/icons/insta.svg"
              className="mx-auto object-contain w-5 h-5"
              width={18}
              height={18}
            />
          </Link>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span
          className="text-sm text-gray-900 sm:text-center"
          style={{ fontFeatureSettings: `'salt' on` }}
        >
          © 2022{' '}
          <Link href="https://updot.in/" className="hover:underline">
            Updot{' '}
          </Link>
          All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer

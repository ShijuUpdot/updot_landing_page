import React from 'react'
import Image from 'next/image'
import IconButton from './IconButton'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="container mx-auto p-4 bg-white sm:p-6">
      <div className="grid grid-cols-3 gap-4 justify-items-between w-full">
        <div>
          <Link href="https://updot.in/" className="flex items-center">
            <Image
              src="/logo.svg"
              className="mr-3"
              alt="Updot Logo"
              width={65}
              height={65}
            />
          </Link>
        </div>
        <div className="flex flex-col w-fit text-center self-center justify-self-center">
          <IconButton
            icon={'/icons/web.svg'}
            order="2"
            style={{
              backgroundColor: '#18181B',
            }}
          >
            Visit Website
          </IconButton>
        </div>
        <div className="flex gap-5 self-center justify-end">
          <Link
            href="#"
            class="bg-gray-100 h-14 w-14 rounded-full flex items-center justify-center"
          >
            <Image
              alt="facebook"
              src="/icons/fb.svg"
              class="mx-auto object-contain "
              width={20}
              height={20}
            />
          </Link>
          <Link
            href="#"
            class="bg-gray-100 h-14 w-14 rounded-full flex items-center justify-center"
          >
            <Image
              alt="instagram"
              src="/icons/insta.svg"
              class="mx-auto object-contain "
              width={20}
              height={20}
            />
          </Link>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{' '}
          <Link href="https://updot.in/" className="hover:underline">
            Updot.in
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer

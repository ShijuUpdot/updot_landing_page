import React, { useState, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import remaxDesk from '../assets/webp/remax.webp'
import bookyanDesk from '../assets/webp/bookyan.webp'
import envntDesk from '../assets/webp/envnt.webp'
import taibaDesk from '../assets/webp/taiba.webp'
import remaxMob from '../assets/webp/remax-mobile.webp'
import bookyanMob from '../assets/webp/bookyan-mobile.webp'
import taibaMob from '../assets/webp/taiba-mobile.webp'
import envntMob from '../assets/webp/envnt-mobile.webp'
import Review from './Review'
import Avatar from '../assets/svg/Frame.svg'
import Avatar1 from '../assets/stories/avatars/1.png'
import Avatar2 from '../assets/stories/avatars/2.png'
import Avatar3 from '../assets/stories/avatars/3.png'
import { Navigation, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}
const Stories = () => {
  const [currentReview, setCurrentReview] = useState(0)
  const [swiper, setSwiper] = useState()

  const stories = [
    {
      name: 'RE/MAX Website Design And Development',
      imageDesktop: remaxDesk,
      imageMobile: remaxMob,
      link: 'https://www.remax.in/',
      details: (
        <>
          Remax is one our estimable clients and
          <br />
          we&apos;ve worked on their website for Remax Infinity.
        </>
      ),
      review: {
        name: 'Ankush',
        desc: `I would highly recommend UPDOT Solutions. They are great to work with and for the work they've done for us we have already recommended them to many of our partners.`,
        title: 'Best Web development Agency in Market',
        image: Avatar,
        stars: 5,
      },
    },
    {
      name: 'BOOKYAN Website Design And Development',
      imageDesktop: bookyanDesk,
      imageMobile: bookyanMob,
      link: 'https://bookyanholidays.com/',
      details: (
        <>
          We are more than happy to have provided a full fledged digital
          solutions package to Bookyan, which is a Kerala based Travel agency.
        </>
      ),
      review: {
        name: 'Shijo',
        desc: `With UPDOT's help, our website is now much more easy to use, has tons of more features than before and is incredibly easy to maintain.`,
        title: 'Updot is amazing agency in Web development',
        image: Avatar,
        stars: 5,
      },
    },
    {
      name: 'ENVNT Website Design And Development',
      imageDesktop: envntDesk,
      imageMobile: envntMob,
      link: 'https://envnt.co/',
      details: (
        <>
          Envnt is an attractive addition to our clientele. We worked together
          to solve their digital concerns for Gitex Global event.
        </>
      ),
      review: {
        name: 'Ibrahim',
        desc: `UPDOT has proven to be an outstanding design agency. I wasn't aware how to add value to my brand until I met the folks at UPDOT. Much thanks to the team.`,
        title: 'Really nice website',
        image: Avatar,
        stars: 5,
      },
    },
    {
      name: 'TAIBA Website Design And Development',
      imageDesktop: taibaDesk,
      imageMobile: taibaMob,
      link: 'https://taibarare.com/',
      details: (
        <>
          UPDOT is pleased to have Taiba on it&apos;s clientele and to have
          joined hands to work on their website development.
        </>
      ),
      review: {
        name: 'Shanon',
        desc: `We were thoroughly impressed with UPDOT's quality of design and overall working style. They took the time to discuss each project in detail, worked on it as per our needs and met our expectations. I can't thank them enough.`,
        title: 'Highly impressed with the work.',
        image: Avatar,
        stars: 5,
      },
    },
  ]

  return (
    <div className="relative">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides
        onSlideChange={(swiper) => setCurrentReview(swiper.activeIndex)}
        onSwiper={(swiper) => setSwiper(swiper)}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        speed={1500}
        navigation={{ nextEl: '#swiper-forward', prevEl: '#swiper-back' }}
        className="flex flex-col relative px-2 md:px-0"
      >
        {stories.map((slide, id) => (
          <SwiperSlide key={id} className="flex w-full">
            <div className="grid gap-4 md:gap-0 md:grid-cols-2 align-middle justify-between w-full h-full relative">
              <div className="flex flex-col justify-center z-20 gap-6 pl-0 md:pl-[19%] xl:pl-[20%] order-1 md:order-first md:pt-20 md:pb-10">
                <div className="md:px-0 px-4">
                  <h3 className="md:pb-2 text-lg sm:text-4xl font-semibold flex flex-col text-gray-900">
                    {slide.name}
                  </h3>
                  <p className="text-sm sm:text-lg text-gray-600 pt-2 md:pt-0 md:max-w-md">
                    {slide.details}
                  </p>
                  <div className="flex items-center md:justify-start">
                    <Link
                      className="pt-4 md:pb-10 font-bold text-base"
                      href={slide.link}
                      target={'_blank'}
                    >
                      <div className="flex items-center gap-2">
                        <span>Explore Website</span>
                        <Image
                          src="/icons/arrow_right.svg"
                          alt="phone"
                          width={18}
                          height={18}
                          className="inline invert"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="mt-2 md:mt-6">
                    <Review {...slide.review} />
                  </div>
                </div>
              </div>
              <div className="w-full ">
                <Image
                  src={slide.imageDesktop}
                  alt="service"
                  style={{
                    objectFit: 'cover',
                  }}
                  className="hidden md:block"
                  width={'100%'}
                  height={'100%'}
                />
                <Image
                  src={slide.imageMobile}
                  alt="service"
                  className="md:hidden"
                  style={{ width: '100%', objectFit: 'fill', maxWidth: '100%' }}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="md:absolute md:bottom-0 md:left-0 md:right-[50%] py-8 flex justify-center items-center gap-4 z-30 md:py-0 select-none">
          <div
            className={`rotate-180 flex items-center justify-center w-8 h-8 rounded-full cursor-pointer ${
              currentReview === 0 ? 'invisible' : ''
            }`}
            id={'swiper-back'}
          >
            <Image
              src="/icons/arrow_right.svg"
              alt="arrow"
              width={20}
              height={20}
              className="invert"
            />
          </div>
          {stories.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                currentReview === index ? 'bg-gray-900' : 'bg-gray-300'
              }`}
              onClick={() => swiper.slideTo(index)}
            />
          ))}
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-full cursor-pointer ${
              currentReview === stories.length - 1 ? 'invisible' : ''
            }`}
            id={'swiper-forward'}
          >
            <Image
              src="/icons/arrow_right.svg"
              alt="arrow"
              width={20}
              height={20}
              className="invert"
            />
          </div>
        </div>
      </Swiper>
    </div>
  )
}

export default Stories

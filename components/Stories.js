import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MockupImg1 from '../assets/stories/Mockup1.png'
import MockupImg2 from '../assets/stories/Mockup2.png'
import MockupImg3 from '../assets/stories/Mockup3.png'
import MockupImg4 from '../assets/stories/Mockup4.png'
import MockupMobImg1 from '../assets/stories/MockupMob1.png'
import MockupMobImg2 from '../assets/stories/MockupMob2.png'
import MockupMobImg3 from '../assets/stories/MockupMob3.png'
import MockupMobImg4 from '../assets/stories/MockupMob4.png'
import Review from './Review'
import Avatar1 from '../assets/stories/avatars/1.png'
import Avatar2 from '../assets/stories/avatars/2.png'
import Avatar3 from '../assets/stories/avatars/3.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const Stories = () => {
  const [currentReview, setCurrentReview] = useState(0)
  const stories = [
    {
      name: 'RE/MAX Website',
      imageDesktop: MockupImg1,
      imageMobile: MockupMobImg1,
      link: 'https://www.remax.in/',
      details: (
        <>
          We worked with Remax on their website
          <br />
          providing the best of technology and reach.
        </>
      ),
      review: {
        name: 'Shreya',
        desc: 'Consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu, aliquam nulla tincidunt gravida. Cursus convallis dolor semper pretium ornare.',
        title: 'Best Web development Agency in Market',
        image: Avatar1,
        stars: 5,
      },
    },
    {
      name: 'BOOKYAN Website',
      imageDesktop: MockupImg2,
      imageMobile: MockupMobImg2,
      link: 'https://bookyanholidays.com/',
      details: (
        <>
          We worked with Bookyan on their website
          <br />
          providing the best of technology and reach.
        </>
      ),
      review: {
        name: 'Karan',
        desc: 'Consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu, aliquam nulla tincidunt gravida. Cursus convallis dolor semper pretium ornare.',
        title: 'Updot is amazing agency in Web development',
        image: Avatar2,
        stars: 5,
      },
    },
    {
      name: 'ENVNT Website',
      imageDesktop: MockupImg3,
      imageMobile: MockupMobImg3,
      link: 'https://envnt.co/',
      details: (
        <>
          We worked with Envnt on their website
          <br />
          providing the best of technology and reach.
        </>
      ),
      review: {
        name: 'Aman',
        desc: 'Consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu, aliquam nulla tincidunt gravida. Cursus convallis dolor semper pretium ornare.',
        title: 'Really nice website',
        image: Avatar3,
        stars: 5,
      },
    },
    {
      name: 'TAIBA Website',
      imageDesktop: MockupImg4,
      imageMobile: MockupMobImg4,
      link: 'https://taibarare.com/',
      details: (
        <>
          We worked with TAIBA on their website
          <br />
          providing the best of technology and reach.
        </>
      ),
      review: {
        name: 'Karan',
        desc: 'Consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu, aliquam nulla tincidunt gravida. Cursus convallis dolor semper pretium ornare.',
        title: 'Really nice website',
        image: Avatar2,
        stars: 5,
      },
    },
  ]

  const handleControl = (type) => {
    if (type === 'prev') {
      if (currentReview === 0) {
        setCurrentReview(stories.length - 1)
      } else {
        setCurrentReview(currentReview - 1)
      }
    }
    if (type === 'next') {
      if (currentReview === stories.length - 1) {
        setCurrentReview(0)
      } else {
        setCurrentReview(currentReview + 1)
      }
    }
  }

  return (
    <>
      <div className="hidden md:flex flex-col relative px-2 md:px-0">
        <div className="flex">
          <div className="grid gap-4 md:grid-cols-2 align-middle justify-between w-full">
            <div className="flex flex-col justify-center z-20 gap-6 pl-0 md:pl-[19%] xl:pl-[20%] order-1 md:order-first md:py-20">
              <div className="md:px-0 px-4">
                <h3 className="md:pb-2 text-lg sm:text-4xl font-semibold flex flex-col text-gray-900">
                  {stories[currentReview].name}
                  <br className="hidden md:block" />
                  Design
                </h3>
                <p className="text-sm sm:text-lg text-gray-600 pt-2 md:pt-0">
                  {stories[currentReview].details}
                </p>
                <div className="flex items-center md:justify-start">
                  <Link
                    className="pt-4 md:pb-10 font-bold text-base"
                    href={stories[currentReview].link}
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
                  <Review {...stories[currentReview].review} />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-start relative">
              <Image
                src={stories[currentReview].imageDesktop}
                alt="service"
                className="hidden md:block"
                style={{
                  width: 'auto',
                  objectFit: 'cover',
                  maxWidth: '100%',
                  height: '100%',
                }}
              />
              {/* <Image
                src={stories[currentReview].imageMobile}
                alt="service"
                className="md:hidden"
                style={{ width: '100%', objectFit: 'fill', maxWidth: '100%' }}
              /> */}
            </div>
          </div>
        </div>
        {/* Controls */}
        <div className="md:absolute md:bottom-0 md:left-0 md:right-[50%] py-8 flex justify-center items-center gap-4 z-30 md:py-0 select-none">
          <div
            className={`rotate-180 flex items-center justify-center w-8 h-8 rounded-full cursor-pointer ${
              currentReview === 0 ? 'invisible' : ''
            }`}
            onClick={() => handleControl('prev')}
          >
            <Image
              src="/icons/arrow_right.svg"
              alt="arrow"
              width={20}
              height={20}
              className="invert"
            />
          </div>

          <div className="flex items-center justify-center gap-2">
            {stories.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  currentReview === index ? 'bg-gray-900' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentReview(index)}
              />
            ))}
          </div>

          <div
            className={`flex items-center justify-center w-8 h-8 rounded-full cursor-pointer ${
              currentReview === stories.length - 1 ? 'invisible' : ''
            }`}
            onClick={() => handleControl('next')}
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
      </div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides
        onSlideChange={(swiper) => setCurrentReview(swiper.activeIndex)}
        // onSwiper={(swiper) => console.log(swiper)}
        className="block md:hidden"
      >
        {stories.map((slide, id) => (
          <SwiperSlide key={id} className="w-full px-4">
            <Image
              src={slide.imageMobile}
              width={'1000'}
              height={'1000'}
              alt={slide.name}
              style={{ width: '100%', objectFit: 'fill', maxWidth: '100%' }}
            />
            <div className="px-3">
              <h3 className="text-lg font-semibold flex flex-col text-gray-900">
                {slide.name} Design
              </h3>
              <p className="text-sm text-gray-600 pt-2">{slide.details}</p>
              <div className="flex items-center pb-6">
                <Link
                  className="pt-4 font-bold text-base"
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
              <div className="mt-2">
                <Review {...slide.review} />
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="flex items-center justify-center gap-2 pt-10">
          {stories.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                currentReview === index ? 'bg-gray-900' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </Swiper>
    </>
  )
}

export default Stories

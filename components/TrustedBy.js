import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const TrustedBy = () => {
  const trustedBy = [
    {
      name: 'Remax',
      logo: '/img/trustedBy/Remax.svg',
    },
    {
      name: 'KIA',
      logo: '/img/trustedBy/KIA.svg',
    },
    {
      name: 'Chaumet',
      logo: '/img/trustedBy/Chaumet.svg',
    },
    {
      name: 'Hyundai',
      logo: '/img/trustedBy/Hyundai.svg',
    },
    {
      name: 'Bookyan Holidays',
      logo: '/img/trustedBy/BookyanHolidays.svg',
    },
    {
      name: 'Agthia',
      logo: '/img/trustedBy/Agthia.svg',
    },
    {
      name: 'Modon',
      logo: '/img/trustedBy/Modon.svg',
    },
    {
      name: 'Hudayriyat',
      logo: '/img/trustedBy/Hudayriyat.svg',
    },
    {
      name: 'Fortune Avenue',
      logo: '/img/trustedBy/FortuneAvenue.svg',
    },
    {
      name: 'Zero Litre',
      logo: '/img/trustedBy/ZeroLitre.svg',
    },
    {
      name: 'Wolf Wizard',
      logo: '/img/trustedBy/WolfWizard.svg',
    },
    {
      name: 'Taiba',
      logo: '/img/trustedBy/Taiba.svg',
    },
    {
      name: 'Envnt',
      logo: '/img/trustedBy/Envnt.svg',
    },
    {
      name: 'Sombrero Tortilla',
      logo: '/img/trustedBy/SombreroTortilla.svg',
    },
    {
      name: 'Skullcandy',
      logo: '/img/trustedBy/Skullcandy.svg',
    },
    {
      name: 'Novo Cinemas',
      logo: '/img/trustedBy/NovoCinemas.svg',
    },
    {
      name: 'Genesis',
      logo: '/img/trustedBy/Genesis.svg',
    },
    {
      name: 'Hi-Sense',
      logo: '/img/trustedBy/Hi-Sense.svg',
    },
    {
      name: 'Alain',
      logo: '/img/trustedBy/Alain.svg',
    },
    {
      name: 'Meat House',
      logo: '/img/trustedBy/MeatHouse.svg',
    },
  ]

  return (
    <div className="container mx-auto px-4 flex relative">
      <div className="grid gap-x-36 gap-y-9 md:grid-cols-4 align-middle justify-between w-full">
        {trustedBy.map((item) => (
          <div
            key={item.name}
            className="flex flex-col justify-center items-center relative"
          >
            <Image
              src={item.logo}
              alt={item.name}
              width={300}
              height={200}
              style={{
                objectFit: 'fill',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrustedBy

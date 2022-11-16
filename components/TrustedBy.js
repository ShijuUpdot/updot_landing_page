import React from 'react'
import Image from 'next/image'
import RemaxImg from '../assets/trustedby/Remax.svg'
import KiaImg from '../assets/trustedby/Kia.svg'
import ChaumetImg from '../assets/trustedby/Chaumet.svg'
import AgthiaImg from '../assets/trustedby/Agthia.svg'
import HyundaiImg from '../assets/trustedby/Hyundai.svg'
import BookyanHolidaysImg from '../assets/trustedby/BookyanHolidays.svg'
import ModonImg from '../assets/trustedby/Modon.svg'
import HudayriyatImg from '../assets/trustedby/Hudayriyat.svg'
import FortuneAvenueImg from '../assets/trustedby/FortuneAvenue.svg'
import ZeroLitreImg from '../assets/trustedby/ZeroLitre.svg'
import WolfWizardImg from '../assets/trustedby/WolfWizard.svg'
import TaibaImg from '../assets/trustedby/Taiba.svg'
import EnvntImg from '../assets/trustedby/Envnt.svg'
import SombreroTortillaImg from '../assets/trustedby/SombreroTortilla.svg'
import SkullcandyImg from '../assets/trustedby/Skullcandy.svg'
import NovoCinemasImg from '../assets/trustedby/NovoCinemas.svg'
import GenesisImg from '../assets/trustedby/Genesis.svg'
import HiSenseImg from '../assets/trustedby/Hi-Sense.svg'
import AlainImg from '../assets/trustedby/Alain.svg'
import MeatHouseImg from '../assets/trustedby/MeatHouse.svg'

const TrustedBy = () => {
  const trustedBy = [
    {
      name: 'Remax',
      logo: RemaxImg,
    },
    {
      name: 'KIA',
      logo: KiaImg,
    },
    {
      name: 'Chaumet',
      logo: ChaumetImg,
    },
    {
      name: 'Hyundai',
      logo: HyundaiImg,
    },
    {
      name: 'Bookyan Holidays',
      logo: BookyanHolidaysImg,
    },
    {
      name: 'Agthia',
      logo: AgthiaImg,
    },
    {
      name: 'Modon',
      logo: ModonImg,
    },
    {
      name: 'Hudayriyat',
      logo: HudayriyatImg,
    },
    {
      name: 'Fortune Avenue',
      logo: FortuneAvenueImg,
    },
    {
      name: 'Zero Litre',
      logo: ZeroLitreImg,
    },
    {
      name: 'Wolf Wizard',
      logo: WolfWizardImg,
    },
    {
      name: 'Taiba',
      logo: TaibaImg,
    },
    {
      name: 'Envnt',
      logo: EnvntImg,
    },
    {
      name: 'Sombrero Tortilla',
      logo: SombreroTortillaImg,
    },
    {
      name: 'Skullcandy',
      logo: SkullcandyImg,
    },
    {
      name: 'Novo Cinemas',
      logo: NovoCinemasImg,
    },
    {
      name: 'Genesis',
      logo: GenesisImg,
    },
    {
      name: 'Hi-Sense',
      logo: HiSenseImg,
    },
    {
      name: 'Alain',
      logo: AlainImg,
    },
    {
      name: 'Meat House',
      logo: MeatHouseImg,
    },
  ]

  return (
    <div className="container mx-auto px-4 flex relative">
      <div className="grid gap-x-8 md:gap-x-36 gap-y-9 grid-cols-4 align-middle justify-center w-full">
        {trustedBy.map((item) => (
          <div
            key={item.name}
            className="flex flex-col justify-center items-center relative p-1 md:p-0"
          >
            <Image
              src={item.logo}
              alt={item.name}
              width={130}
              height={130}
              style={{
                objectFit: 'contain',
                maxWidth: '100%',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrustedBy

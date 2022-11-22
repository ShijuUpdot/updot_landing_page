import React from 'react'
import Image from 'next/image'
import RemaxImg from '../assets/trustedby/Remax.svg'
import KiaImg from '../assets/webp/kia.webp'
import ChaumetImg from '../assets/webp/chaumet1-1.webp'
import AgthiaImg from '../assets/trustedby/Agthia.svg'
import HyundaiImg from '../assets/webp/hyundai.webp'
import BookyanHolidaysImg from '../assets/webp/bookyanholidays.webp'
import ModonImg from '../assets/webp/Modon.webp'
import HudayriyatImg from '../assets/webp/hudayriyat1.webp'
import FortuneAvenueImg from '../assets/webp/fortune.webp'
import ZeroLitreImg from '../assets/svg/zero-litre.svg'
import WolfWizardImg from '../assets/webp/wolf-wizard.webp'
import TaibaImg from '../assets/webp/taiba-1.webp'
import EnvntImg from '../assets/trustedby/Envnt.svg'
import SombreroTortillaImg from '../assets/webp/sombrero.webp'
import SkullcandyImg from '../assets/webp/skullcandy-1.webp'
import NovoCinemasImg from '../assets/webp/novo.webp'
import GenesisImg from '../assets/webp/Genesis-Motor.webp'
import HiSenseImg from '../assets/webp/hisense.webp'
import AlainImg from '../assets/webp/al-ain-1.webp'
import MeatHouseImg from '../assets/webp/meat-house.webp'

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

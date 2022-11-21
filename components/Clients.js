import React from 'react'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import RemaxImg from '../assets/clients/remax.svg'
import KiaImg from '../assets/webp/kia.webp'
import ChaumetImg from '../assets/webp/chaumet1-1.webp'
import AgthiaImg from '../assets/clients/agthia.svg'
import HyundaiImg from '../assets/webp/hyundai.webp'

const Clients = () => {
  const clients = [
    {
      name: 'Remax',
      logo: RemaxImg,
    },
    {
      name: 'Kia',

      logo: KiaImg,
    },
    {
      name: 'Chaumet',
      logo: ChaumetImg,
    },
    {
      name: 'Agthia',
      logo: AgthiaImg,
    },
    {
      name: 'Hyundai',
      logo: HyundaiImg,
    },
  ]
  return (
    <div className="flex relative py-10 md:py-8 xl:py-10 bg-gray-100">
      <Marquee gradient={false} speed={75}>
        <div className="flex justify-between w-full">
          {clients.map((client) => (
            <div
              className="flex flex-row md:flex-col justify-center px-16"
              key={client.name}
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={130}
                height={130}
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  )
}

export default Clients

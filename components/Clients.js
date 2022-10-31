import React from 'react'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

const Clients = () => {
  const clients = [
    {
      name: 'Remax',
      logo: '/img/clients/remax.svg',
    },
    {
      name: 'Kia',

      logo: '/img/clients/kia.svg',
    },
    {
      name: 'Chaumet',
      logo: '/img/clients/chaumet.svg',
    },
    {
      name: 'Agthia',
      logo: '/img/clients/agthia.svg',
    },
    {
      name: 'Hyundai',
      logo: '/img/clients/Hyundai.svg',
    },
  ]
  return (
    <div className="container mx-auto px-5 flex relative py-10">
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

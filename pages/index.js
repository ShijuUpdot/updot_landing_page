import Head from 'next/head'
import Clients from '../components/Clients'
import Contact from '../components/Contact'
import FloatingButton from '../components/floating_button'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Stories from '../components/Stories'
import Title from '../components/Title'
import TrustedBy from '../components/TrustedBy'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import wplogo from '../assets/whatsapp.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          UPDOT | Best Web Development & Design Company in Bangalore
        </title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        ></meta>
      </Head>
      <section className="">
        <Navbar />
      </section>
      {/* Hero Section */}
      <section>
        <Hero />
      </section>
      {/* Clients Section */}
      <Clients />
      {/* Service Section */}
      <section>
        <Title>Why partner with UPDOT</Title>
        <Services />
      </section>
      {/* Success Stories */}
      <section className="pt-4 md:py-10 px-0" id="stories">
        <Title>Our Success Stories</Title>
        <Stories />
      </section>
      {/* Trusted By */}
      <section className="pt-4 mb:pt-0 md:pb-10">
        <Title>Trusted By</Title>
        <TrustedBy />
      </section>
      {/* Let's Talk */}
      <section className="pt-10 md:py-10" id="contact">
        <Title>Let’s Talk</Title>
        <Contact />
      </section>
      <section className="md:py-10 bg-[#FAFAFA]">
        <Footer />
      </section>
      <FloatingButton link={'https://api.whatsapp.com/send?phone=7907589188'}>
        <Image
          src={wplogo}
          width={'50'}
          height={'50'}
          alt={'whatsapp logo'}
          className="opacity-75 hover:opacity-100 transition-opacity ease-linear"
        />
      </FloatingButton>
    </>
  )
}

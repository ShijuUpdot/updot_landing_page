import Head from 'next/head'
import Clients from '../components/Clients'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Stories from '../components/Stories'
import Title from '../components/Title'
import TrustedBy from '../components/TrustedBy'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
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
      </Head>

      {/* Hero Section */}
      <Navbar />
      <section className={styles.hero}>
        <Hero />
      </section>
      {/* Clients Section */}
      <section className="bg-[#f5f5f5] px-0">
        <Clients />
      </section>
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
      <section className="pt-4 md:py-10">
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
    </>
  )
}

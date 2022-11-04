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
      </Head>
      {/* Hero Section */}
      <Navbar />
      <section className={styles.hero}>
        <Hero />
      </section>
      {/* Clients Section */}
      <section>
        <Clients />
      </section>
      {/* Service Section */}
      <section>
        <Title>Why partner with UPDOT</Title>
        <Services />
      </section>
      {/* Success Stories */}
      <section className="md:py-10">
        <Title>Our Success Stories</Title>
        <Stories />
      </section>
      {/* Trusted By */}
      <section className="md:py-10">
        <Title>Trusted By</Title>
        <TrustedBy />
      </section>
      {/* Let's Talk */}
      <section className="md:py-10">
        <Title>Let’s Talk</Title>
        <Contact />
      </section>
      <section className="md:py-10 bg-[#FAFAFA]">
        <Footer />
      </section>
    </>
  )
}

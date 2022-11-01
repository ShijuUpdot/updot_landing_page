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
      <section className={styles.hero}>
        <Navbar />
        <Hero />
        <Clients />
      </section>
      {/* Service Section */}
      <section>
        <Title>Our Services</Title>
        <Services />
      </section>
      {/* Success Stories */}
      <section>
        <Title>Our Success Stories</Title>
        <Stories />
      </section>
      {/* Trusted By */}
      <section>
        <Title>Trusted By</Title>
        <TrustedBy />
      </section>
      {/* Let's Talk */}
      <section>
        <Title>Let’s Talk</Title>
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </>
  )
}

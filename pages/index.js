import Head from 'next/head'
import Clients from '../components/Clients'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Title from '../components/Title'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <section className={styles.hero}>
        <Navbar />
        <Hero />
        <Clients />
      </section>
      <section className={styles.services}>
        <Title>Our Services</Title>
        <Services />
      </section>
    </>
  )
}

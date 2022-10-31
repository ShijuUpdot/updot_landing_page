import Head from 'next/head'
import Clients from '../components/Clients'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.hero}>
        <Navbar />
        <Hero />
        <Clients />
      </div>
    </>
  )
}

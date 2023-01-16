import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>GDSC ADGITM</title>
          <link rel='website icon' type='webp' href='gdscicon.webp'/>
        </Head>

        <Navbar />
        <Main/>
        <Footer />
      </div>
    </>
  )
}

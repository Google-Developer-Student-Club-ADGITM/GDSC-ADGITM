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

        <Navbar />
        <Main/>
        <Footer />
      </div>
    </>
  )
}

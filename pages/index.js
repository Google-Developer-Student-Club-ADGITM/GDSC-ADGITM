import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import navbar from "../components/header.js"

export default function Home() {
  return (
     <>
     <div>
      <navbar/>
      {/* <img src="assets/GDSC-Logo.png" /> */}
      <h1>lets Start</h1>
     </div>
     </>
  )
}

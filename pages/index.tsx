import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Dropdown from '../components/Dropdown/Dropdown'
import { ButtonLaptop } from '../components/Button/Button'
import { Body1, Body2, H1, SH1 } from '../components/Typography/Typography'

const Home: NextPage = () => {
  return (
    // <div style={{backgroundColor: "#d9d9d9", height: "100vh"}}>
    //   {/* <Dropdown>
    //     Kategori
    //   </Dropdown> */}
    //   <ButtonLaptop>Lihat Semua Laptop</ButtonLaptop>
    // </div>
    <div>
      <H1>Nofath</H1>
      <SH1>Nofath</SH1>
      <Body1>Nofath</Body1>
      <Body2>Nofath</Body2>
    </div>
  )
}

export default Home

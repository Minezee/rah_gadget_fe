import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Dropdown from '../components/Dropdown/Dropdown'

const Home: NextPage = () => {
  return (
    <div style={{backgroundColor: "#d9d9d9", height: "100vh"}}>
      <Dropdown>
        Kategori
      </Dropdown>
      
    </div>
  )
}

export default Home

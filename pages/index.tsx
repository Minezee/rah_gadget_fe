import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Dropdown from "../components/dropdown/dropdown";
import {
  ButtonCarouselLeft,
  ButtonCarouselRight,
  ButtonCTA,
  ButtonArrow,
  ButtonLink,
  ButtonAlternativeLink
} from "../components/button/button";
import { Body1, Body2, H1, SH1 } from "../components/typography/typography";

const Home: NextPage = () => {
  return (
    // <div style={{backgroundColor: "#d9d9d9", height: "100vh"}}>
    //   {/* <Dropdown>
    //     Kategori
    //   </Dropdown> */}
    //   {/* <ButtonArrow>Lihat Semua Laptop</ButtonArrow> */}
    // </div>

    <div>
      <ButtonArrow>Lihat Semua Laptop</ButtonArrow>
      <ButtonCTA>Lihat Produk</ButtonCTA>
      <ButtonCarouselLeft></ButtonCarouselLeft>
      <ButtonCarouselRight></ButtonCarouselRight>

      <ButtonLink>Shopee Link 1</ButtonLink>
      <ButtonAlternativeLink>Shopee Alternative Link</ButtonAlternativeLink>
    </div>
    // <div>
    //   <H1>Nofath</H1>
    //   <SH1>Nofath</SH1>
    //   <Body1>Nofath</Body1>
    //   <Body2>Nofath</Body2>
    // </div>
    // <div>
    //   <ButtonCTA>NOfath</ButtonCTA>
    // </div>
  );
};

export default Home;

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
import { Container, ContainerFluid } from "../components/container/container";

const Home: NextPage = () => {
  return (
    // <div style={{backgroundColor: "#d9d9d9", height: "100vh"}}>
    //   {/* <Dropdown>
    //     Kategori
    //   </Dropdown> */}
    //   {/* <ButtonArrow>Lihat Semua Laptop</ButtonArrow> */}
    // </div>

    // <div>
    //   <ButtonArrow>Lihat Semua Laptop</ButtonArrow>
    //   <ButtonCTA>Lihat Produk</ButtonCTA>
    //   <ButtonCarouselLeft></ButtonCarouselLeft>
    //   <ButtonCarouselRight></ButtonCarouselRight>

    //   <ButtonLink>Shopee Link 1</ButtonLink>
    //   <ButtonAlternativeLink>Shopee Alternative Link</ButtonAlternativeLink>
    // </div>

    // <Container>Nofath</Container>
    <Container>Nofath</Container>
  );
};

export default Home;

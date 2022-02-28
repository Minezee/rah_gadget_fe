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
  ButtonAlternativeLink,
} from "../components/button/button";
import { Body1, Body2, H1, SH1 } from "../components/typography/typography";
import { Container, ContainerFluid } from "../components/container/container";
import Navbar from "../components/navbar/navbar";
import Indicator from "../components/indicator/indicator";
import { useEffect, useState } from "react";
import Footer from "../components/footer/footer";
import CardProduct from "../components/card/card-product/card-product";

const Home: NextPage = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = scrollTop / (docHeight - winHeight);
    let scrollPercentRounded = Math.round(scrollPercent * 100);

    setScrollPercentage(scrollPercentRounded);
  };

  return (
    <div style={{background: "black", height: "100vh"}}>
      {/* <Navbar>
        <Indicator percentage={scrollPercentage}></Indicator>
      </Navbar> */}
      {/* <Footer></Footer> */}
      <CardProduct rating={2.9}></CardProduct>
    </div>
  );
};

export default Home;

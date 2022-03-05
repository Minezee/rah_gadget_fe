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
import CardReview from "../components/card/card-review/card-review";
import CardReviewSideBar from "../components/card/card-review-side-bar/card-review-side-bar";
import CardRecommendationSideBar from "../components/card/card-recommendation-side-bar/card-recommendation-side-bar";
import CardArticle from "../components/card/card-article/card-article";
import CardShopeeLink from "../components/card/card-shopee-link/card-shopee-link";

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
    <div>
      {/* <Navbar>
        <Indicator percentage={scrollPercentage}></Indicator>
      </Navbar> */}
      {/* <Footer></Footer> */}
      {/* <CardProduct rating={2.5} type={"bisnis"} label={"Bisnis"}></CardProduct> */}
      {/* <CardReview /> */}
      {/* <CardReviewSideBar /> */}
      {/* <CardRecommendationSideBar /> */}
      {/* <CardArticle></CardArticle> */}
      {/* <ButtonArrow>sdsada</ButtonArrow> */}
      {/* <ButtonLink>adada</ButtonLink> */}
      {/* <CardShopeeLink></CardShopeeLink> */}
      <ButtonArrow>Beli di Shopee</ButtonArrow>
      <ButtonCTA>Beli di Shopee</ButtonCTA>
      <ButtonLink>Beli di Shopee</ButtonLink>
      <ButtonCarouselRight></ButtonCarouselRight>
      <ButtonCarouselLeft></ButtonCarouselLeft>
      <ButtonAlternativeLink>Beli di Shopee</ButtonAlternativeLink>
    </div>
  );
};

export default Home;

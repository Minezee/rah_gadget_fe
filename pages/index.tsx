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
import {
  Body1,
  Body2,
  H1,
  SH1,
  SH2,
} from "../components/typography/typography";
import { Container, ContainerFluid } from "../components/container/container";
import Navbar from "../components/navbar/navbar";
import { NavbarItem } from "../components/navbar/navbar.elements";
import { useEffect, useState } from "react";
import Footer from "../components/footer/footer";
import CardProduct from "../components/card/card-product/card-product";
import CardReview from "../components/card/card-review/card-review";
import CardReviewSideBar from "../components/card/card-review-side-bar/card-review-side-bar";
import CardRecommendationSideBar from "../components/card/card-recommendation-side-bar/card-recommendation-side-bar";
import CardArticle from "../components/card/card-article/card-article";
import CardShopeeLink from "../components/card/card-shopee-link/card-shopee-link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/reducers";
import { setSearchAttr } from "../store/actions/search";
import ArticleList from "../components/article-list/article.list";

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

  const dispatch = useDispatch();
  const { searchLoading, searchResult, searchError } = useSelector(
    (state: RootState) => state.searchReducer
  );

  const handleBtn = () => {
    const data = {
      priceMax: 1000,
      priceMin: 2000,
      brand: ["gege"],
      category: ["goks"],
    };
    dispatch(setSearchAttr(data));

    console.log(searchResult);
  };

  return (
    <div>
      <Navbar indicator={true} percentage={scrollPercentage}>
        <NavbarItem>Home</NavbarItem>
        <NavbarItem>Rekomendasi</NavbarItem>
        <NavbarItem>Review</NavbarItem>
        <NavbarItem>Katalog</NavbarItem>
        <NavbarItem>Tentang Kami</NavbarItem>
      </Navbar>

      <Container>
        <SH2>Cari laptop ____</SH2>
        <H1>Buat Kuliah?</H1>
        <div
          style={{
            width: "100%",
            height: "50px",
            textAlign: "center",
            color: "white",
            background: "black",
          }}
        >
          TEMPAT SEARCH BAR DAN FILTER
        </div>
      </Container>

      <Container>
        <SH2>Artikel Terbaru</SH2>
        <ArticleList>
          <CardArticle></CardArticle>
          <CardArticle></CardArticle>
          <CardArticle></CardArticle>
          <CardArticle></CardArticle>
          <CardArticle></CardArticle>
          <CardArticle></CardArticle>
          <CardArticle></CardArticle>
          <CardArticle></CardArticle>
          <CardArticle></CardArticle>
        </ArticleList>
      </Container>
    </div>
  );
};

export default Home;

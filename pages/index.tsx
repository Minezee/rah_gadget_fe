import type { NextPage } from "next";
import {
  H1,
  SH2,
} from "../components/typography/Typography";
import { useEffect, useState } from "react";
import { Container } from "../components/container/Container";
import Navbar from "../components/navbar/Navbar";
import { NavbarItem } from "../components/navbar/Navbar.elements";
import Footer from "../components/footer/Footer";
import CardProduct from "../components/card/card-product/CardProduct";
import CardReview from "../components/card/card-review/CardReview";
import CardArticle from "../components/card/card-article/CardArticle";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/reducers";
import { setSearchAttr } from "../store/actions/search";
import SliderList from "../components/slider-list/SliderList";
import ProductList from "../components/product-list/ProductList";
import {
  RGAdsContainer,
  RGAdsLeft,
  RGAdsRight,
} from "../components/index/index.elements";
import CardLaptopCat from "../components/card/card-laptop-cat/CardLaptopCat";
import BrandCard from "../components/card/brand-card/BrandCard";
import { ButtonArrow } from "../components/button/Button";

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

      <Container style={{marginTop: "40px"}}>
        <SH2>Rekomendasi Laptop</SH2>
        <SliderList sliderWidth={370} id={"1"}>
          <CardArticle></CardArticle>
          <CardArticle></CardArticle>
          <CardArticle></CardArticle>
          <CardArticle></CardArticle>
          <CardArticle></CardArticle>
          <CardArticle></CardArticle>
          <CardArticle></CardArticle>
          <CardArticle></CardArticle>
          <CardArticle></CardArticle>
        </SliderList>
      </Container>

      <Container style={{marginTop: "56px"}}>
        <SH2>Laptop terbaik harga 7 Jutaan</SH2>
        <ProductList gridCount={4} itemWidth={250}>
          <CardProduct rating={3} label="Gamink" type="gaming"></CardProduct>
          <CardProduct rating={3} label="Gamink" type="gaming"></CardProduct>
          <CardProduct rating={3} label="Gamink" type="gaming"></CardProduct>
          <CardProduct rating={3} label="Gamink" type="gaming"></CardProduct>
          <CardProduct rating={3} label="Gamink" type="gaming"></CardProduct>
          <CardProduct rating={3} label="Gamink" type="gaming"></CardProduct>
        </ProductList>
        <ButtonArrow style={{margin: "48px auto 0 auto"}}>Lihat Semua Laptop</ButtonArrow>
      </Container>

      <Container style={{marginTop: "56px"}}>
        <RGAdsContainer>
          <RGAdsLeft></RGAdsLeft>
          <RGAdsRight></RGAdsRight>
        </RGAdsContainer>
      </Container>

      <Container style={{marginTop: "56px"}}>
        <SH2>Ulasan Produk</SH2>
        <ProductList gridCount={3} itemWidth={340}>
          <CardReview></CardReview>
          <CardReview></CardReview>
          <CardReview></CardReview>
          <CardReview></CardReview>
          <CardReview></CardReview>
          <CardReview></CardReview>
        </ProductList>
      </Container>

      <Container style={{marginTop: "56px"}}>
        <SH2>Kategori Laptop</SH2>
        <ProductList gridCount={4} itemWidth={250}>
          <CardLaptopCat></CardLaptopCat>
          <CardLaptopCat></CardLaptopCat>
          <CardLaptopCat></CardLaptopCat>
          <CardLaptopCat></CardLaptopCat>
        </ProductList>
      </Container>

      <Container style={{marginTop: "56px"}}>
        <SH2>Brand paling dicari</SH2>
        <SliderList sliderWidth={276} id={"2"}>
          <BrandCard></BrandCard>
          <BrandCard></BrandCard>
          <BrandCard></BrandCard>
          <BrandCard></BrandCard>
          <BrandCard></BrandCard>
          <BrandCard></BrandCard>
          <BrandCard></BrandCard>
          <BrandCard></BrandCard>
          <BrandCard></BrandCard>
          <BrandCard></BrandCard>
          <BrandCard></BrandCard>
        </SliderList>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default Home;

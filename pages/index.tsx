import type { NextPage } from "next";
import { H1, Label3, Lead2, SH2 } from "../components/typography/typography";
import { useEffect, useState } from "react";
import { Container } from "../components/container/container";
import Navbar from "../components/navbar/navbar";
import { NavbarItem } from "../components/navbar/navbar.elements";
import Footer from "../components/footer/footer";
import CardProduct from "../components/card/card-product/card-product";
import CardReview from "../components/card/card-review/card-review";
import CardArticle from "../components/card/card-article/card-article";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/reducers";
import { setSearchAttr } from "../store/actions/search";
import SliderList from "../components/slider-list/slider-list";
import ProductList from "../components/product-list/product-list";
import {
  InputField,
  Jumbotron,
  JumbotronCirle1,
  JumbotronCirle2,
  JumbotronContainer,
  JumbotronLaptop,
  JumbotronSearch,
  JumbotronSearchButton,
  JumbotronSearchCat,
  JumbotronSearchField,
  JumbotronSearchItem,
  JumbotronSearchWrapper,
  RGAdsContainer,
  RGAdsLeft,
  RGAdsRight,
} from "../components/pages-component/index/index.elements";
import CardLaptopCat from "../components/card/card-laptop-cat/card-laptop-cat";
import BrandCard from "../components/card/brand-card/brand-card";
import { ButtonArrow } from "../components/button/button";
import { HomeDropdownBrand, HomeDropdownHarga, HomeDropdownKategori } from "../components/dropdown/dropdown";
import LayoutIndicator from "../layouts/layout-indicator";
import LayoutNonIndicator from "../layouts/layout-non-indicator";

const Home: NextPage = () => {
  const [searchItemActive, setSearchItemActive] = useState([]);
  const [titleType] = useState(["Gaming", "Kuliah", "Bisnis", "Editing"]);
  const [noType, setNoType] = useState(0);

  useEffect(() => {
    let current = (noType % 3) + 1;
    setTimeout(() => {
      setNoType(current);
    }, 3000);
  }, [noType]);

  // CONTOH REDUX NANTINYA
  // const dispatch = useDispatch();
  // const { searchLoading, searchResult, searchError } = useSelector(
  //   (state: RootState) => state.searchReducer
  // );
  // const handleBtn = () => {
  //   const data = {
  //     priceMax: 1000,
  //     priceMin: 2000,
  //     brand: ["gege"],
  //     category: ["goks"],
  //   };
  //   dispatch(setSearchAttr(data));
  //   console.log(searchResult);
  // };

  return (
    <div>
      <LayoutIndicator>
        <Jumbotron>
          <JumbotronCirle1></JumbotronCirle1>
          <JumbotronCirle2></JumbotronCirle2>
          <JumbotronLaptop></JumbotronLaptop>
          <JumbotronSearch>
            <JumbotronContainer>
              <SH2 style={{ margin: "0 0 50px 0" }}>Cari laptop ____</SH2>
              <H1 style={{ margin: "0 0 50px 0" }}>{`Buat ${titleType[noType]}?`}</H1>
              <JumbotronSearchWrapper>
                <JumbotronSearchField>
                  {searchItemActive.map((item, idx) => (
                    <JumbotronSearchItem key={idx}>
                      <Label3 style={{ margin: "0 18px 0 0" }}>{item}</Label3>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 4L4 12"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4 4L12 12"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </JumbotronSearchItem>
                  ))}
                  <InputField type="text" style={{ paddingLeft: "16px" }} placeholder="Cari laptop ..." />
                </JumbotronSearchField>
                <JumbotronSearchButton>
                  <Lead2>Cari</Lead2>
                </JumbotronSearchButton>
              </JumbotronSearchWrapper>
              <JumbotronSearchCat>
                <HomeDropdownHarga itemActive={searchItemActive} setItemActive={setSearchItemActive} style={{ marginRight: "8px" }} label="harga">
                  <Lead2>Harga</Lead2>
                </HomeDropdownHarga>
                <HomeDropdownBrand itemActive={searchItemActive} setItemActive={setSearchItemActive} style={{ marginRight: "8px" }} label="brand">
                  <Lead2>Brand</Lead2>
                </HomeDropdownBrand>
                <HomeDropdownKategori itemActive={searchItemActive} setItemActive={setSearchItemActive} style={{ marginRight: "8px" }} label="brand">
                  <Lead2>Brand</Lead2>
                </HomeDropdownKategori>
              </JumbotronSearchCat>
            </JumbotronContainer>
          </JumbotronSearch>
        </Jumbotron>

        <Container style={{ marginTop: "40px" }}>
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

        <Container style={{ marginTop: "56px" }}>
          <SH2>Laptop terbaik harga 7 Jutaan</SH2>
          <ProductList gridCount={4} itemWidth={250}>
            <CardProduct rating={3} label="Gamink" type="gaming"></CardProduct>
            <CardProduct rating={3} label="Gamink" type="gaming"></CardProduct>
            <CardProduct rating={3} label="Gamink" type="gaming"></CardProduct>
            <CardProduct rating={3} label="Gamink" type="gaming"></CardProduct>
            <CardProduct rating={3} label="Gamink" type="gaming"></CardProduct>
            <CardProduct rating={3} label="Gamink" type="gaming"></CardProduct>
          </ProductList>
          <ButtonArrow style={{ margin: "48px auto 0 auto" }}>
            Lihat Semua Laptop
          </ButtonArrow>
        </Container>

        <Container style={{ marginTop: "56px" }}>
          <RGAdsContainer>
            <RGAdsLeft></RGAdsLeft>
            <RGAdsRight></RGAdsRight>
          </RGAdsContainer>
        </Container>

        <Container style={{ marginTop: "56px" }}>
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

        <Container style={{ marginTop: "56px" }}>
          <SH2>Kategori Laptop</SH2>
          <ProductList gridCount={4} itemWidth={250}>
            <CardLaptopCat></CardLaptopCat>
            <CardLaptopCat></CardLaptopCat>
            <CardLaptopCat></CardLaptopCat>
            <CardLaptopCat></CardLaptopCat>
          </ProductList>
        </Container>

        <Container style={{ marginTop: "56px" }}>
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
      </LayoutIndicator>
    </div>
  );
};

export default Home;

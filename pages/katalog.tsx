import Image from "next/image";
import { useState } from "react";
import BrandCard from "../components/card/brand-card/brand-card";
import CardArticle from "../components/card/card-article/card-article";
import CardInfoShopeeLink from "../components/card/card-info-shopee-link/card-info-shopee-link";
import CardLaptopCat from "../components/card/card-laptop-cat/card-laptop-cat";
import CardProduct from "../components/card/card-product/card-product";
import CardRecommendationSideBar from "../components/card/card-recommendation-side-bar/card-recommendation-sidebar";
import CardReview from "../components/card/card-review/card-review";
import CardShopeeLink from "../components/card/card-shopee-link/card-shopee-link";
import { Container } from "../components/container/container";
import {
  HomeDropdownBrand,
  HomeDropdownHarga,
  HomeDropdownKategori,
  KatalogDropdownBrand,
  KatalogDropdownHarga,
  KatalogDropdownKategori,
} from "../components/dropdown/dropdown";
import { InputField } from "../components/pages-component/index/index.elements";
import {
  KatalogFilter,
  KatalogFilterBody,
  KatalogFilterHead,
  KatalogMainContent,
  KatalogSearchbar,
  KatalogSortType,
  KatalogSortTypeWrapper,
  KatalogSortWrapper,
  KatalogWrapper,
  ListProduct,
  NumberList,
  PaginationWrapper,
  PagingButtonArrow,
} from "../components/pages-component/katalog/katalog.elements";
import {
  Lead1,
  Lead2,
  Lead3,
  Lead5,
  SH3,
} from "../components/typography/typography";
import LayoutNonIndicator from "../layouts/layout-non-indicator";

const Katalog = () => {
  const [searchItemActive, setSearchItemActive] = useState([]);
  const [titleType] = useState(["Gaming", "Kuliah", "Bisnis", "Editing"]);
  const [noType, setNoType] = useState(0);

  return (
    <LayoutNonIndicator style={{ paddingTop: "150px" }}>
      <Container style={{ maxWidth: "1188px" }}>
        <KatalogWrapper>
          <KatalogFilter>
            <KatalogFilterHead>
              <Lead1>Filter Pencarian</Lead1>
              <Image src="/refresh-filter-logo.svg" width={24} height={24} alt="refresh-logo" />
            </KatalogFilterHead>
            <KatalogFilterBody>
              <KatalogDropdownHarga label={"harga"} style={{width: "100%", height: "100%", margin: "0 0 16px 0"}}>
                <Lead1 style={{ margin: "0" }}>Harga</Lead1>
              </KatalogDropdownHarga>
              <KatalogDropdownBrand label={"brand"} style={{width: "100%", height: "100%", margin: "0 0 16px 0"}}>
                <Lead1 style={{ margin: "0" }}>Brand</Lead1>
              </KatalogDropdownBrand>
              <KatalogDropdownKategori label={"kategori"} style={{width: "100%", height: "100%", margin: "0 0 16px 0"}}>
                <Lead1 style={{ margin: "0" }}>Kategori</Lead1>
              </KatalogDropdownKategori>
            </KatalogFilterBody>
          </KatalogFilter>
          <KatalogMainContent>
            <KatalogSearchbar>
              <Image src="/katalog-search-logo.svg" width={24} height={24} alt="search-logo" />
              <InputField
                type="text"
                style={{ paddingLeft: "36px" }}
                placeholder="Cari laptop ..."
              />
            </KatalogSearchbar>
            <KatalogSortWrapper>
              <Lead5>
                Hasil pencarian <b>20 laptop</b>
              </Lead5>
              <KatalogSortTypeWrapper>
                <KatalogSortType>
                  <Lead3>Berdasarkan harga</Lead3>
                </KatalogSortType>
                <Image src="/arrow-down-sort.svg" width={24} height={24} alt="arrow-logo" />
              </KatalogSortTypeWrapper>
            </KatalogSortWrapper>
            <ListProduct>
              <CardInfoShopeeLink></CardInfoShopeeLink>
              <CardInfoShopeeLink></CardInfoShopeeLink>
              <PaginationWrapper>
                <PagingButtonArrow>
                  <Image src="/paging-arrow-left.svg" width={32} height={32} alt="arrow-logo" />
                </PagingButtonArrow>
                <NumberList>
                  <SH3>1</SH3>
                  <SH3>2</SH3>
                  <SH3>3</SH3>
                </NumberList>
                <PagingButtonArrow>
                  <Image src="/paging-arrow-right.svg" width={32} height={32} alt="arrow-logo" />
                </PagingButtonArrow>
              </PaginationWrapper>
            </ListProduct>
          </KatalogMainContent>
        </KatalogWrapper>
      </Container>
    </LayoutNonIndicator>
  );
};

export default Katalog;

import styled from "styled-components";
import { backgroundColor, mainColor, textColor } from "../../../styles/mixin";

const KatalogWrapper = styled.div`
  display: grid;
  grid-template-columns: 320px auto;
  grid-column-gap: 16px;
`;

const KatalogFilter = styled.div``;

const KatalogMainContent = styled.div``;

const KatalogFilterHead = styled.div`
  padding: 20px;
  width: 100%;
  height: 64px;
  background: ${mainColor.primary};
  color: ${textColor.white};
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const KatalogFilterBody = styled.div`
  width: 100%;
  padding: 20px;
  background: ${backgroundColor.whiteCard};
`;

const KatalogSearchbar = styled.div`
  width: 100%;
  padding: 23px 27px;
  background: ${mainColor.rating_unactive};
  border-radius: 5px;
  display: grid;
  grid-template-columns: 22px auto;
`;

const KatalogSortWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const KatalogSortTypeWrapper = styled.div`
  display: flex;

  & > :first-child {
    margin: 0 16px 0 0;
  }
`;

const KatalogSortType = styled.div``;

const ListProduct = styled.div``;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 370px;
  margin: 60px auto 0 auto;
`;

const PagingButtonArrow = styled.span`
  cursor: pointer;
`;

const NumberList = styled.span`
  display: flex;

  & > h1 {
    margin: 0 16px;
    cursor: pointer;
    color: ${textColor.text_unable};
    // color ${mainColor.secondary}; Kalau button active, nanti dicek lewat path nya aja
  }
`;

export {
  KatalogWrapper,
  KatalogFilter,
  KatalogMainContent,
  KatalogFilterHead,
  KatalogFilterBody,
  KatalogSearchbar,
  KatalogSortWrapper,
  KatalogSortTypeWrapper,
  KatalogSortType,
  ListProduct,
  PaginationWrapper,
  PagingButtonArrow,
  NumberList,
};

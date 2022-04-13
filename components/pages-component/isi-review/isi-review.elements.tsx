import styled from "styled-components";
import {
  backgroundColor,
  labelColor,
  labelColorTypes,
  mainColor,
  textColor,
} from "../../../styles/mixin";
import { ContainerStyle } from "../../container/container.elements";

const IsiReviewContainer = styled(ContainerStyle)`
  display: grid;
  grid-template-columns: auto 370px;
  grid-column-gap: 24px;
`;

const IsiReviewMainContent = styled.div`
  width: 100%;
`;

const MainContentTypeInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MainContentLabelDate = styled.div`
  display: flex;
  align-items: center;
`;

const MainContentLabelWrapper = styled.div`
  display: inline-block;
  // white-space: nowrap;
`;

const MainContentLabel = styled.div<{ label: labelColorTypes }>`
  display: inline-block;
  padding: 3.5px 6px;
  background: ${(props) => labelColor[props.label]};
  border-radius: 2px;
  color: white;
  margin-right: 4px;
`;

const MainContentDateWrapper = styled.div`
  display: inline-block;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const MainContentDateCircle = styled.div`
  display: inline-block;
  width: 24px;
  height: 24px;
  background: ${mainColor.secondary};
  border-radius: 100%;
  margin: 0 8px 0 24px;
`;

const MainContentTimeRead = styled.div``;

const IsiReviewSideContent = styled.div`
  // background: blue;
  width: 370px;
  // height: 2000px;
  // margin-left: 24px;
  padding-bottom: 300px;
  // position: -webkit-sticky;
  // position: sticky;
  // top: 0;
`;

const MainContent = styled.div`
  padding: 0 0 24px 0;
  border-bottom: 2px solid ${mainColor.primary};
`;

const MainContentIntroImage = styled.div`
  background: ${backgroundColor.whiteCard};
  width: 100%;
  height: 350px;
  position: relative;
  border-radius: 5px;
`;

const MainContentBoxDesc = styled.div`
  width: 100%;
  height: 32px;
  border-radius: 5px;
  text-align: center;
  margin-top: 8px;
  display: flex;
  align-items: center;
`;

const DoubleImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContentImageWrapper = styled.div``;
const ImageBox = styled.div`
  width: 335px;
  height: 240px;
  border-radius: 5px;
  position: relative;
  background: ${backgroundColor.whiteCard};
`;

const ProductLinkWrapper = styled.div`
  margin: 32px 0 0 0;

  & > .logo-link-margin {
    margin: 24px 0 0 0;
  }
`;

const ProductSpecWrapper = styled.div`
  margin: 0 0 16px 0;
`;
const ProductSpec = styled.div``;
const ProductSpecTitle = styled.div`
  width: 100%;
  background: ${mainColor.primary};
  border-radius: 5px;
  padding: 16px;
  margin: 16px 0 4px 0;
`;

const ProductSpecDescWrapper = styled.div`
  display: grid;
  grid-template-columns: 240px auto;
  grid-column-gap: 4px;
  margin: 0 0 4px 0;
`;

const ProductSpecDescKey = styled.div`
  width: 100%;
  padding: 18px;
  border-radius: 5px;
  background: ${mainColor.rating_unactive};
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ProductSpecDescValue = styled.div`
  width: 100%;
  padding: 18px;
  border-radius: 5px;
  background: ${backgroundColor.whiteCard};
`;

const RatingBox = styled.div`
  width: 100px;
  height: 100px;
  background: #434343;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${mainColor.rating_active};
`;

const ConclusionBox = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
  grid-column-gap: 24px;
  margin: 0 0 24px 0;
`;

const PlusMinusBox = styled.div`
  width: 100%;
  background: ${backgroundColor.whiteCard};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 24px;
  margin: 0 0 8px 0;

  display: flex;
  justify-content: space-between;

  & > div {
    width: 49%;
  }
`;

const PlusMinusItem = styled.div`
  display: flex;
  margin: 5px 0;

  & > h1 {
    margin: 0 0 0 15px;
  }
`;

const ConclusionRating = styled.div`
  display: grid;
  grid-template-columns: 335px 335px;
  grid-column-gap: 15px;
  margin: 0 0 40px 0;

  & > div {
    background: ${backgroundColor.whiteCard};
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 24px;
  }
`;

const ConclusionRatingItem = styled.div`
  margin: 0 0 10px 0;
`;

const ConclusionRatingItemStar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${mainColor.rating_active};
`;

const ReviewScoreWrapper = styled.div`
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  margin: 8px 0 24px 0;
`;
const ReviewScoreTitle = styled.div`
  width: 100%;
  border-radius: 5px 5px 0 0;
  background: ${mainColor.primary};
  padding: 28px 19px;
  color: ${textColor.white};

  display: flex;
  justify-content: space-between;
  align-items: center;

  & > .rating-value {
    color: ${mainColor.rating_active};
    display: flex;
  }
`;
const ReviewScoreDetail = styled.div`
  border-radius: 0 0 5px 5px;
  padding: 20px 19px;
  width: 100%;
  background: ${backgroundColor.whiteCard};
`;
const NewestReview = styled.div``;

export {
  IsiReviewContainer,
  IsiReviewMainContent,
  IsiReviewSideContent,
  MainContentTypeInfo,
  MainContentLabelDate,
  MainContentLabelWrapper,
  MainContentLabel,
  MainContentDateWrapper,
  MainContentDateCircle,
  MainContentTimeRead,
  MainContent,
  MainContentIntroImage,
  MainContentBoxDesc,
  DoubleImageWrapper,
  ContentImageWrapper,
  ImageBox,
  ProductLinkWrapper,
  ProductSpecWrapper,
  ProductSpec,
  ProductSpecTitle,
  ProductSpecDescWrapper,
  ProductSpecDescKey,
  ProductSpecDescValue,
  RatingBox,
  ConclusionBox,
  PlusMinusBox,
  PlusMinusItem,
  ConclusionRating,
  ConclusionRatingItemStar,
  ConclusionRatingItem,
  ReviewScoreWrapper,
  ReviewScoreTitle,
  ReviewScoreDetail,
  NewestReview,
};

import {
  CardReviewDesc,
  CardReviewInfo,
  CardReviewLabel,
  CardReviewTitle,
  CardReviewWrapper,
} from "../card-review/card-review.elements";

const CardRecommendationSideBar = () => {
  return (
    <CardReviewWrapper>
      <CardReviewInfo>
        <CardReviewLabel>Kuliah</CardReviewLabel>
        <CardReviewTitle>Asus VivoBook TM420</CardReviewTitle>
        <CardReviewDesc>Affordable dan simpel banget</CardReviewDesc>
      </CardReviewInfo>
    </CardReviewWrapper>
  );
};

export default CardRecommendationSideBar;

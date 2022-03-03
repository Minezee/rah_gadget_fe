import {
  CardReviewDesc,
  CardReviewInfo,
  CardReviewLabel,
  CardReviewTitle,
} from "../card-review/card-review.elements";
import { CardRecommendationSidebarWrapper } from "./card-recommendation-side-bar.elements";

const CardRecommendationSideBar = () => {
  return (
    <CardRecommendationSidebarWrapper>
      <CardReviewInfo>
        <CardReviewLabel>Kuliah</CardReviewLabel>
        <CardReviewTitle>Asus VivoBook TM420</CardReviewTitle>
        <CardReviewDesc>Affordable dan simpel banget</CardReviewDesc>
      </CardReviewInfo>
    </CardRecommendationSidebarWrapper>
  );
};

export default CardRecommendationSideBar;

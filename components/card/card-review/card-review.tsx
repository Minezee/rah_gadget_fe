import { Lead2 } from "../../typography/typography";
import {
  CardReviewDesc,
  CardReviewInfo,
  CardReviewLabel,
  CardReviewRating,
  CardReviewTitle,
  CardReviewWrapper,
} from "./card-review.elements";

const CardReview = () => {
  return (
    <CardReviewWrapper>
      <CardReviewRating>
        <Lead2>4.3</Lead2>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.52447 0.463526C4.67415 0.00287056 5.32585 0.00286996 5.47553 0.463525L6.23483 2.80041C6.30176 3.00642 6.49374 3.1459 6.71036 3.1459H9.1675C9.65186 3.1459 9.85325 3.76571 9.46139 4.05041L7.47352 5.49468C7.29828 5.622 7.22495 5.84768 7.29188 6.0537L8.05118 8.39058C8.20086 8.85123 7.67362 9.23429 7.28176 8.94959L5.29389 7.50532C5.11865 7.378 4.88135 7.378 4.70611 7.50532L2.71824 8.94959C2.32638 9.23429 1.79914 8.85123 1.94882 8.39058L2.70812 6.0537C2.77505 5.84768 2.70172 5.622 2.52648 5.49468L0.538611 4.05041C0.146754 3.76571 0.348141 3.1459 0.832503 3.1459H3.28964C3.50626 3.1459 3.69824 3.00642 3.76517 2.80041L4.52447 0.463526Z"
            fill="#F4F4F4"
          />
        </svg>
      </CardReviewRating>
      <CardReviewInfo>
        <CardReviewLabel>Kuliah</CardReviewLabel>
        <CardReviewTitle>Asus VivoBook TM420</CardReviewTitle>
        <CardReviewDesc>Affordable dan simpel banget</CardReviewDesc>
      </CardReviewInfo>
    </CardReviewWrapper>
  );
};

export default CardReview;

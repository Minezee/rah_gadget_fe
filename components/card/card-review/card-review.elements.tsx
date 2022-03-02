import styled from "styled-components";
import { Body3Style, Lead2Style } from "../../typography/typography.elements";

const CardReviewWrapper = styled.div`
  width: 340px;
  height: 270px;
  filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.25));
  border-radius: 5px;
  position: relative;
  background: url("/laptop-example.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const CardReviewInfo = styled.div`
  width: 100%;
  height: 115px;
  position: absolute;
  background: linear-gradient(0deg, #343434 -3%, rgba(52, 52, 52, 0.3) 100%);
  backdrop-filter: blur(10px);
  bottom: 0;
  z-index: 1;
  padding: 14px 16px;
`;

const CardReviewRating = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  background: #f2994a;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
  color: white;
  border-radius: 2px;
  z-index: 2;
  left: 264px;
  top: 125px;
  padding: 10px 7px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const CardReviewLabel = styled.div`
  padding: 4px 6px;
  width: 55px;
  height: 25px;
  background: #ebc247;
  border-radius: 2px;
  color: white;
`;

const CardReviewTitle = styled(Lead2Style)`
  color: white;
  margin: 6px 0;
`;

const CardReviewDesc = styled(Body3Style)`
  color: white;
  margin: 0;
`;

export { CardReviewWrapper, CardReviewInfo, CardReviewRating, CardReviewLabel, CardReviewTitle, CardReviewDesc };

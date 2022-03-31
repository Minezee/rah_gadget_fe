import styled from "styled-components";
import { mainColor, textColor } from "../../styles/mixin";

const PriceButton = styled.div`
  padding: 16px 0px;
  width: 100%px;
  height: 83px;
  background: ${mainColor.primary};
  border-radius: 5px;
  text-align: center;
  color: ${textColor.white};
  margin-top: 16px;
`;

const ButtonBuyWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  padding-top: 16px;

  & > .link1 {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  
  & > .link2 {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  & > .link3 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
  }
`;

const ProductDescription = styled.div``

export { PriceButton, ButtonBuyWrapper, ProductDescription };

import styled from "styled-components";
import { device } from '../../styles/mixin';

const ProductListWrapper = styled.div<{gridCount: number, itemWidth: number}>`
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  // flex-wrap: wrap;
  
  display: grid;
  grid-row-gap: 40px;
  ${props => {
    return`
      grid-template-columns: repeat(${props.gridCount}, 1fr);
      grid-column-gap: ${(device.starter_kit - (props.itemWidth * props.gridCount))/props.gridCount}px;
    `
  }}
`;

export { ProductListWrapper };

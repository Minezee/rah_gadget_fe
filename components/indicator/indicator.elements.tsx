import styled from "styled-components";
import { mainColor } from "../../styles/mixin";

const IndicatorWrapper = styled.div`
  width: 100%;
  height: 16px;
`;

const IndicatorPercent = styled.div<{ percentage: number }>`
  height: 100%;
  width: ${props => props.percentage}%;
  background: ${mainColor.secondary};
`;

export { IndicatorWrapper, IndicatorPercent };

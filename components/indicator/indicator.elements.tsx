import styled from "styled-components";

const IndicatorWrapper = styled.div`
  width: 100%;
  height: 16px;
`;

const IndicatorPercent = styled.div<{ percentage: number }>`
  height: 100%;
  width: ${props => props.percentage}%;
  background: #d31e1c;
`;

export { IndicatorWrapper, IndicatorPercent };

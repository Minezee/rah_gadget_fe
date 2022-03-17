import { IndicatorPercent, IndicatorWrapper } from "./Indicator.elements";

interface IndicatorType {
  percentage: number;
}

const Indicator = ({ percentage }: IndicatorType) => {
  return (
    <IndicatorWrapper>
      <IndicatorPercent percentage={percentage}></IndicatorPercent>
    </IndicatorWrapper>
  );
};

export default Indicator;

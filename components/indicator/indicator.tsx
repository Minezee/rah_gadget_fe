import { IndicatorPercent, IndicatorWrapper } from "./indicator.elements";

const Indicator = (props: any) => {
  return (
    <IndicatorWrapper>
      <IndicatorPercent percentage={props.percentage}></IndicatorPercent>
    </IndicatorWrapper>
  );
};

export default Indicator;

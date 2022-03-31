import styled from "styled-components";
import { labelColor, labelColorTypes } from "../../styles/mixin";
import { Body1Style, Lead2Style } from "../typography/Typography.elements";

interface OtherProductTypoType {
  children: React.ReactChild;
}

const OtherProductWrapper = styled.div`
  width: 100%;
  margin: 24px 0;
  display: grid;
  grid-template-columns: 220px auto;
  grid-column-gap: 24px;
`;

const OtherProductImage = styled.div`
  width: 220px;
  height: 160px;
  border-radius: 5px;
  position: relative;
`;

const OtherProductLabelWrapper = styled.div``

const OtherProductLabel = styled.div<{ label: labelColorTypes }>`
  display: inline-block;
  padding: 3.5px 6px;
  background: ${(props) => labelColor[props.label]};
  border-radius: 2px;
  color: white;
  margin: 0 4px 8px 0;
`;

const OtherProductTitle = ({ children }: OtherProductTypoType) => {
  return <OtherProductTitleStyle>{children}</OtherProductTitleStyle>;
};

const OtherProductTitleStyle = styled(Lead2Style)`
  margin: 0 0 8px 0;
`;

const OtherProductDesc = ({ children }: OtherProductTypoType) => {
  return <OtherProductDescStyle>{children}</OtherProductDescStyle>;
};

const OtherProductDescStyle = styled(Body1Style)`
  margin: 0 0 8px 0;
`;

export {
  OtherProductWrapper,
  OtherProductImage,
  OtherProductLabelWrapper,
  OtherProductLabel,
  OtherProductTitle,
  OtherProductDesc,
};

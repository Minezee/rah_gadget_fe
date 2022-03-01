import styled from "styled-components";
import { labelColor, labelColorTypes } from "../../../styles/mixin";
import {
  Label1Style,
  Label4Style,
  Label5Style,
  Lead3Style,
} from "../../typography/typography.elements";

const CardProductWrapper = styled.div`
  position: relative;
  width: 250px;
  height: 320px;
  background: #ffffff;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin-left: 100px;
  overflow: hidden;
`;

const ProductImage = styled.div`
  width: 100%;
  height: 210px;
`;

const ProductInfo = styled.div`
  width: 100%;
  height: 110px;
  background: #f4f4f4;
  padding: 13px 14px;
`;

const ProductType = (props: any) => {
  return (
    <ProductTypeStyle>
      <ProductTypeLabel>{props.label}</ProductTypeLabel>
      <ProductTypeTriangle type={props.type}>
        {props.children}
      </ProductTypeTriangle>
    </ProductTypeStyle>
  );
};

const ProductTypeLabel = styled(Label1Style)`
  position: absolute;
  z-index: 3;
  color: white;
  transform: rotate(-45deg);
  transform-origin: 20% 90%;
  white-space: nowrap;
`;

const ProductTypeStyle = styled.div`
  position: absolute;
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductTypeTriangle = styled.div<{type: labelColorTypes}>`
  position: absolute;
  z-index: 2;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 90px 90px 0 0;
  border-color: ${(props) => labelColor[props.type]} transparent transparent transparent;
  display: flex;
  justify-content:center;
  align:items:center;
`;

const ProductTitle = (props: any) => {
  const title =
    props.children.length <= 20
      ? props.children
      : props.children.substring(0, 20) + "...";

  return <ProductTitleStyle>{title}</ProductTitleStyle>;
};

const ProductTitleStyle = styled(Lead3Style)`
  margin: 4px 0;
`;

const ProductPrice = (props: any) => {
  const numb = props.price;
  const format = numb.toString().split("").reverse().join("");
  const convert = format.match(/\d{1,3}/g);
  const rupiah = "Rp " + convert.join(".").split("").reverse().join("");

  return <ProductPriceStyle>{rupiah}</ProductPriceStyle>;
};

const ProductPriceStyle = styled(Label4Style)`
  margin: 4px 0;
`;

const ProductRating = styled.div`
  display: flex;
  align-items: flex-start;
`;

const ProductRatingText = styled(Label5Style)`
  margin: 0;
  margin-left: 10px;
`;

export {
  CardProductWrapper,
  ProductImage,
  ProductInfo,
  ProductType,
  ProductTitle,
  ProductPrice,
  ProductRating,
  ProductRatingText,
};

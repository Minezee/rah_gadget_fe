import styled from "styled-components";
import {
  labelColor,
  labelColorTypes,
  mainColor,
  textColor,
} from "../../../styles/mixin";

const ImagesPreview = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 355px);
  grid-template-rows: repeat(2, 350px);
  gap: 7px;

  & > .img {
    background: url("/example-img-kumpulan.png");
    background-size: cover;
    display: flex;
    align-items: flex-end;
  }

  & > .img-1 {
    grid-column: 1/3;
    grid-row: 1/2;
  }
`;

const ImageDesc = styled.div`
  color: ${textColor.white};
  width: 100%;
  height: 120px;
  padding: 11px 12px;
  background: linear-gradient(0deg, #343434 -3%, rgba(52, 52, 52, 0.3) 100%);
`;

const LabelWrapper = styled.div<{ label: labelColorTypes }>`
  display: inline-block;
  padding: 3.5px 6px;
  background: ${(props) => labelColor[props.label]};
  border-radius: 2px;
  color: white;
  margin: 0 4px 4px 0;
`;

const ProductPopularWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 354px;
  grid-column-gap: 37px;
  margin: 40px 0 0 0;
`;

const PopularWrapper = styled.div``;

const PopularItem = styled.div`
  width: 354px;
  background: ${mainColor.primary};
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  color: ${textColor.white};
  padding: 8px 24px;
  margin-bottom: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  & > .number {
    padding-right: 32px;
  }
`;

export {
  ImagesPreview,
  ImageDesc,
  LabelWrapper,
  ProductPopularWrapper,
  PopularWrapper,
  PopularItem,
};

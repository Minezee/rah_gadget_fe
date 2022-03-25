import styled from "styled-components";
import {
  backgroundColor,
  labelColor,
  labelColorTypes,
  mainColor,
} from "../../styles/mixin";
import { ContainerStyle } from "../container/Container.elements";

const IsiReviewContainer = styled(ContainerStyle)`
  display: grid;
  grid-template-columns: auto 370px;
  grid-column-gap: 24px;
`;

const IsiReviewMainContent = styled.div`
  // background: black;
  width: 100%;
  // height: 2000px;
`;

const MainContentTypeInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MainContentLabelDate = styled.div`
  display: flex;
  align-items: center;
`;

const MainContentLabelWrapper = styled.div`
  display: inline-block;
  // white-space: nowrap;
`;
const MainContentLabel = styled.div<{ label: labelColorTypes }>`
  display: inline-block;
  padding: 3.5px 6px;
  background: ${(props) => labelColor[props.label]};
  border-radius: 2px;
  color: white;
  margin-right: 4px;
`;

const MainContentDateWrapper = styled.div`
  display: inline-block;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const MainContentDateCircle = styled.div`
  display: inline-block;
  width: 24px;
  height: 24px;
  background: ${mainColor.secondary};
  border-radius: 100%;
  margin: 0 8px 0 24px;
`;

const MainContentTimeRead = styled.div``;

const IsiReviewSideContent = styled.div`
  // background: blue;
  width: 370px;
  height: 2000px;
  // margin-left: 24px;
`;
const MainContent = styled.div``;
const MainContentIntroImage = styled.div`
  background: ${backgroundColor.whiteCard};
  width: 100%;
  height: 350px;
  position: relative;
  border-radius: 5px;
`;
const MainContentBoxDesc = styled.div`
  width: 100%;
  height: 32px;
  border-radius: 5px;
  text-align: center;
  margin-top: 8px;
  display: flex;
  align-items: center;
`;

const DoubleImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ContentImageWrapper = styled.div``;
const ImageBox = styled.div`
  width: 335px;
  height: 240px;
  border-radius: 5px;
  position: relative;
  background: ${backgroundColor.whiteCard};
`;

export {
  IsiReviewContainer,
  IsiReviewMainContent,
  IsiReviewSideContent,
  MainContentTypeInfo,
  MainContentLabelDate,
  MainContentLabelWrapper,
  MainContentLabel,
  MainContentDateWrapper,
  MainContentDateCircle,
  MainContentTimeRead,
  MainContent,
  MainContentIntroImage,
  MainContentBoxDesc,
  DoubleImageWrapper,
  ContentImageWrapper,
  ImageBox,
};

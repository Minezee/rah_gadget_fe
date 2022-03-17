import React from "react";
import styled from "styled-components";
import { Lead3Style, Lead4Style } from "../../typography/Typography.elements";

const transitionTime = 0.5;

const CardArticleInfoTitle = ({ children }: { children: string }) => {
  const title =
    children.length <= 60 ? children : children.substring(0, 60) + "...";
  return <CardArticleInfoTitleStyle>{title}</CardArticleInfoTitleStyle>;
};

const CardArticleInfoTitleStyle = styled(Lead4Style)`
  color: white;
  text-align: left;
  margin: 0;
`;

const CardArticleInfoDate = styled(Lead3Style)`
  color: white;
  margin: 0;
  margin-top: 12px;
`;

const CardArticleInfo = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  top: 284px;
  background: linear-gradient(0deg, #343434 -3%, rgba(52, 52, 52, 0.3) 100%);
  backdrop-filter: blur(10px);
  transition: ${transitionTime}s;
  padding: 22px 20px;
`;

const CardArticleWrapper = styled.div`
  width: 340px;
  height: 500px;
  border-radius: 5px;
  background: url("/img-exam.jfif");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  overflow: hidden;
  display: inline-block;
  margin-right: 30px;
  white-space: normal;

  &:hover ${CardArticleInfo} {
    top: 0;
    transition: ${transitionTime}s;
    padding-top: 90px;
  }

  &:hover ${CardArticleInfoTitleStyle} {
    text-align: center;
  }

  &:hover ${CardArticleInfoDate} {
    display: none;
  }

  & .button-detail {
    margin: 48px auto 0 auto;
    opacity: 0;
    transition: ${transitionTime}s;
  }

  &:hover .button-detail {
    opacity: 1;
    transition: ${transitionTime}s;
  }
`;

export {
  CardArticleWrapper,
  CardArticleInfo,
  CardArticleInfoTitle,
  CardArticleInfoDate,
};

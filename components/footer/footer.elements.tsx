import styled from "styled-components";
import { Container } from "../container/Container";
import { H4Style } from "../typography/Typography.elements";

const FooterWrapper = styled.div`
  width: 100%;
  height: 380px;
  background-color: black;
  background-image: url(/footer-bg.png);
`;

const FooterContainer = styled(Container)``;

const FooterContent = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(/footer-bg-crcl.png);
  background-repeat: no-repeat;
  background-position: center left;
  padding: 1px 0;
  color: white;
  transparent: 5;
`;

const FooterSocialMedia = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  // border: 2px solid white;
  margin: 12px 0;

  & > h1 {
    margin: 0;
  }

  & > svg {
    margin-right: 16px;
  }
`;

// const FooterRGLogo = styled.div`
//   width: 100%;
//   height: 100%;
//   background-image: url(/footer-bg-rg.png);
//   background-repeat: no-repeat;
//   background-position: center right;
// `

const FooterInfo = styled.div`
  display: flex;
`;

const SocialMediaIcon = styled.div`
  display: flex;
`;

const SocialMediaIconBox = styled.span`
  width: 32px;
  height: 32px;
  margin-right: 10px;
  border-radius: 2px;
  background: linear-gradient(0deg, #343434 -3%, rgba(52, 52, 52, 0.3) 100%);
  bakdrop-filter: blur(10px);
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterCompanyTitle = styled(H4Style)`
  white-space: nowrap;
  margin-top: 14.74px;
`;

const FooterInfoRow = styled.div`
  flex: 1;
  padding-top: 55px;
`;

export {
  FooterWrapper,
  FooterContent,
  FooterInfo,
  FooterContainer,
  FooterSocialMedia,
  SocialMediaIcon,
  SocialMediaIconBox,
  FooterCompanyTitle,
  FooterInfoRow,
};

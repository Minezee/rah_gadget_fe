import { useEffect, useState } from "react";
import styled from "styled-components";
import { backgroundColor, mainColor, textColor } from "../../../styles/mixin";
import { ButtonCTA } from "../../button/button";
import { ContainerStyle } from "../../container/container.elements";
import { H1, SH2 } from "../../typography/typography";

const RGAdsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RGAdsLeft = () => {
  return (
    <RGAdsLeftStyle>
      <SH2 style={{ textAlign: "right" }}>
        Laptop Gaming Buat Kamu yang Suka Mabar
      </SH2>
      <ButtonCTA>Button</ButtonCTA>
    </RGAdsLeftStyle>
  );
};

const RGAdsRight = () => {
  return (
    <RGAdsRightStyle>
      <SH2 style={{ textAlign: "left" }}>
        Laptop Gaming Buat Kamu yang Suka Mabar
      </SH2>
      <ButtonCTA>Button</ButtonCTA>
    </RGAdsRightStyle>
  );
};

// const JumbotronTitleChanges = () => {
//   const [titleType] = useState(["Gaming", "Kuliah", "Bisnis", "Editing"]);
//   const [noType, setNoType] = useState(0);

//   useEffect(() => {
//     let current = (noType % 3) + 1;
//     setTimeout(() => {
//       setNoType(current);
//     }, 3000);
//   }, [noType]);

//   return (
//     <H1 style={{ margin: "0 0 50px 0" }}>{`Buat ${titleType[noType]}?`}</H1>
//   );
// };

const RGAdsLeftStyle = styled.div`
  width: 525px;
  height: 320px;
  border-radius: 5px;
  padding: 30px;
  background: ${mainColor.primary};
  color: ${textColor.white};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const RGAdsRightStyle = styled.div`
  width: 525px;
  height: 320px;
  border-radius: 5px;
  padding: 30px;
  color: ${textColor.white};
  background: ${mainColor.primary};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Jumbotron = styled.div`
  width: 100%;
  height: 620px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background: url("/jumbo-bg.png");

  position: relative;
`;

const JumbotronCirle1 = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("/ellips-1.png");
  background-repeat: no-repeat;
  background-position: top left;
  z-index: 1;
`;
const JumbotronCirle2 = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("/ellips-2.png");
  background-repeat: no-repeat;
  background-position: bottom right;
  z-index: 2;
`;
const JumbotronLaptop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("/jumbo-laptop.png");
  background-repeat: no-repeat;
  background-position: center right;
  z-index: 3;
  right: 60px;
`;
const JumbotronSearch = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 4;
  color: white;
`;
const JumbotronContainer = styled(ContainerStyle)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const JumbotronSearchWrapper = styled.div`
  width: 726px;
  height: 56px;
  border-radius: 5px;
  overflow: hidden;

  display: flex;
`;
const JumbotronSearchField = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 17px;
  background: ${backgroundColor.whiteCard};
  color: ${textColor.text_unable};

  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
`;
const JumbotronSearchButton = styled.div`
  width: 105px;
  height: 100%;
  background: ${mainColor.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;
const JumbotronSearchItem = styled.div`
  padding: 6px 10px;
  height: 30px;
  background: ${mainColor.primary};
  border-radius: 5px;
  margin-right: 4px;
  color: ${textColor.white};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const JumbotronSearchCat = styled.div`
  display: flex;
  margin-top: 12px;
`;
const InputField = styled.input`
  font-family: Work Sans;
  margin: 0;
  padding: 0;
  width: 100%;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;

  & {
    border: none;
    background: none;
  }
  &:focus {
    outline: none;
  }
`;

export {
  RGAdsLeft,
  RGAdsRight,
  RGAdsContainer,
  Jumbotron,
  JumbotronCirle1,
  JumbotronCirle2,
  JumbotronLaptop,
  JumbotronSearch,
  JumbotronContainer,
  JumbotronSearchWrapper,
  JumbotronSearchField,
  JumbotronSearchButton,
  JumbotronSearchItem,
  JumbotronSearchCat,
  InputField
};

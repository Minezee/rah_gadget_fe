import styled from "styled-components";
import { mainColor, textColor } from "../../styles/mixin";
import { ButtonCTA } from "../button/Button";
import { SH2 } from "../typography/Typography";

const RGAdsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const RGAdsLeft = () => {
  return (
    <RGAdsLeftStyle>
      <SH2 style={{ textAlign: "right" }}>Laptop Gaming Buat Kamu yang Suka Mabar</SH2>
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

export { RGAdsLeft, RGAdsRight, RGAdsContainer };

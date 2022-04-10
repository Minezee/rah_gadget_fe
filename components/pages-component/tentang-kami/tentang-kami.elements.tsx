import styled from "styled-components";
import { backgroundColor, mainColor, textColor } from "../../../styles/mixin";

const TentangKamiJumbotron = styled.div`
  width: 100%;
  height: 620px;
  background: green;
  position: relative;
  background: linear-gradient(
      0deg,
      rgba(33, 33, 33, 0.8),
      rgba(33, 33, 33, 0.8)
    ),
    url("/tentang-kami-jumbo.gif");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${textColor.white};
`;

const TentangKamiTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1001px;
  flex-wrap: no-wrap;

  & > .line-separator {
    border-top: 2px solid ${mainColor.secondary};
    width: 395px;
  }
`;

const TentangKamiYtWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: no-wrap;
`;

const TentangKamiYtDescWrapper = styled.div`
  max-width: 1043px;
  display: grid;
  grid-template-columns: auto 640px;
  grid-column-gap: 64px;
`;

const TentangKamiYtDesc = styled.div``;

const TentangKamiYtBox = styled.div`
  width: 640px;
  height: 424px;
  background: ${mainColor.primary};
  border-radius: 5px;
`;

const TentangKamiIgWrapper = styled.div`
  width: 100%;
  background: url("/tentang-kami-ig.png"),
    url("/ig-ellipse.svg") bottom left no-repeat;
  background-color: ${mainColor.primary};
  padding: 80px 0 0 0;
`;

const TentangKamiIg = styled.div`
  display: grid;
  grid-template-columns: 504.46px auto;
  grid-column-gap: 110px;
`;

const TentangKamiIgImg = styled.div`
  width: 504.46px;
  height: 640px;
  background: ${mainColor.rating_unactive};
  border-radius: 5px 5px 0 0;
`;

const TentangKamiIgContent = styled.div`
  color: ${textColor.white};
`;

const TentangKamiTiktokContainer = styled.div`
  width: 100%;
  background-image: url("/tiktok-ellipse.svg");
  background-position: 100% 160%;
  background-repeat: no-repeat;
  padding-bottom: 120px;
`;

const TentangKamiTiktok = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const TentangKamiTiktokWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 572px;
  grid-column-gap: 132px;
`;

const TentangKamiTiktokContent = styled.div``;

const TentangKamiTiktokTitleImg = styled.div`
  width: 291px;
  height: 80px;
  position: relative;
  left: -20px;
`;

const TentangKamiTiktokText = styled.div`
  margin-left: 57px;
`;

const TentangKamiTiktokImg = styled.div`
  width: 572px;
  height: 636px;
  background: ${mainColor.primary};
  border-radius: 5px;
`;

export {
  TentangKamiJumbotron,
  TentangKamiYtDescWrapper,
  TentangKamiTitleBox,
  TentangKamiYtWrapper,
  TentangKamiYtDesc,
  TentangKamiYtBox,
  TentangKamiIgWrapper,
  TentangKamiIg,
  TentangKamiIgImg,
  TentangKamiIgContent,
  TentangKamiTiktok,
  TentangKamiTiktokWrapper,
  TentangKamiTiktokText,
  TentangKamiTiktokContent,
  TentangKamiTiktokImg,
  TentangKamiTiktokTitleImg,
  TentangKamiTiktokContainer,
};

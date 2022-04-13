import Image from "next/image";
import {
  ButtonAlternativeLink,
  ButtonArrowHyperlink,
} from "../components/button/button";
import { Container } from "../components/container/container";
import {
  TentangKamiJumbotron,
  TentangKamiYtBox,
  TentangKamiYtDesc,
  TentangKamiTitleBox,
  TentangKamiYtDescWrapper,
  TentangKamiYtWrapper,
  TentangKamiIgWrapper,
  TentangKamiIg,
  TentangKamiIgImg,
  TentangKamiIgContent,
  TentangKamiTiktokContent,
  TentangKamiTiktokImg,
  TentangKamiTiktokWrapper,
  TentangKamiTiktok,
  TentangKamiTiktokText,
  TentangKamiTiktokTitleImg,
  TentangKamiTiktokContainer,
} from "../components/pages-component/tentang-kami/tentang-kami.elements";
import {
  Lead1,
  Lead6,
  Lead7,
  Lead8,
  SH6,
} from "../components/typography/typography";
import LayoutNonIndicator from "../layouts/layout-non-indicator";
import { mainColor } from "../styles/mixin";

const TentangKami = () => {
  return (
    <LayoutNonIndicator>
      <TentangKamiJumbotron>
        <Image src="/rg-tentang-kami-jumbo.svg" width={890} height={136.01} alt="img-exam" />
        <Lead6>Bersama Menjadi Pembeli Yang Bijak</Lead6>
      </TentangKamiJumbotron>
      <Container style={{ maxWidth: "944px", margin:"80px auto 116px auto" }}>
        <Lead7 style={{ textAlign: "justify" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Lead7>
      </Container>

      <Container style={{ maxWidth: "1100px" }}>
        <TentangKamiTitleBox>
          <Image src="/youtube-text.svg" width={291} height={80} alt="img-exam" />
          <div className="line-separator"></div>
          <Lead1 style={{ color: mainColor.secondary }}>01/2019 - NOW</Lead1>
        </TentangKamiTitleBox>
      </Container>

      <Container
        style={{ maxWidth: "1100px", marginBottom: "160px", marginTop: "44px" }}
      >
        <TentangKamiYtWrapper>
          <TentangKamiYtDescWrapper>
            <TentangKamiYtDesc>
              <SH6 style={{ margin: "0" }}>LOREM IPSUM</SH6>
              <Lead8 style={{ textAlign: "justify", margin: "28px 0 0 0" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard dummy
                text ever since the 1500s. Lorem Ipsum is simply dummy text.
              </Lead8>
              <ButtonArrowHyperlink
                className="btn-red"
                style={{ margin: "44px 0 0 0" }}
              >
                Youtube
              </ButtonArrowHyperlink>
            </TentangKamiYtDesc>
            <TentangKamiYtBox></TentangKamiYtBox>
          </TentangKamiYtDescWrapper>
        </TentangKamiYtWrapper>
      </Container>

      <TentangKamiIgWrapper style={{ marginBottom: "160px" }}>
        <Container style={{ maxWidth: "1043px" }}>
          <TentangKamiIg>
            <TentangKamiIgImg></TentangKamiIgImg>
            <TentangKamiIgContent>
              <Image src="/instagram-text.svg" width={291} height={80} alt="img-exam" />
              <SH6 style={{ margin: "44px 0 0 0" }}>LOREM IPSUM</SH6>
              <Lead8 style={{ textAlign: "justify", margin: "28px 0 0 0" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard dummy
                text ever since the 1500s. Lorem Ipsum is simply dummy text.
              </Lead8>
              <ButtonArrowHyperlink
                className="btn-white"
                style={{ margin: "44px 0 0 0" }}
              >
                Instagram
              </ButtonArrowHyperlink>
            </TentangKamiIgContent>
          </TentangKamiIg>
        </Container>
      </TentangKamiIgWrapper>

      <TentangKamiTiktokContainer>
        <Container style={{ maxWidth: "1100px" }}>
          <TentangKamiTiktok>
            <TentangKamiTiktokWrapper>
              <TentangKamiTiktokContent>
                <TentangKamiTiktokTitleImg>
                  <Image src="/tiktok-text.svg" layout="fill" alt="img-exam" />
                </TentangKamiTiktokTitleImg>
                <TentangKamiTiktokText>
                  <SH6 style={{ margin: "44px 0 0 0" }}>LOREM IPSUM</SH6>
                  <Lead8 style={{ textAlign: "justify", margin: "28px 0 0 0" }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry&apos;s
                    standard dummy text ever since the 1500s. Lorem Ipsum is
                    simply dummy text.
                  </Lead8>
                  <ButtonArrowHyperlink
                    className="btn-red"
                    style={{ margin: "44px 0 0 0" }}
                  >
                    TikTok
                  </ButtonArrowHyperlink>
                </TentangKamiTiktokText>
              </TentangKamiTiktokContent>
              <TentangKamiTiktokImg></TentangKamiTiktokImg>
            </TentangKamiTiktokWrapper>
          </TentangKamiTiktok>
        </Container>
      </TentangKamiTiktokContainer>
    </LayoutNonIndicator>
  );
};

export default TentangKami;

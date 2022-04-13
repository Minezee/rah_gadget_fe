import Image from "next/image";
import { ButtonAlternativeLink, ButtonLink } from "../components/button/button";
import CardReview from "../components/card/card-review/card-review";
import CardShopeeLink from "../components/card/card-shopee-link/card-shopee-link";
import { Container } from "../components/container/container";
import {
  ButtonBuyWrapper,
  PriceButton,
  ProductDescription,
} from "../components/pages-component/isi-rekomendasi/isi-rekomendasi.elements";
import {
  IsiReviewContainer,
  IsiReviewMainContent,
  IsiReviewSideContent,
  MainContent,
  MainContentDateCircle,
  MainContentDateWrapper,
  MainContentIntroImage,
  MainContentBoxDesc,
  MainContentLabel,
  MainContentLabelDate,
  MainContentLabelWrapper,
  MainContentTimeRead,
  MainContentTypeInfo,
  DoubleImageWrapper,
  ContentImageWrapper,
  ImageBox,
  ProductLinkWrapper,
  ProductSpecWrapper,
  ProductSpec,
  ProductSpecTitle,
  ProductSpecDescWrapper,
  ProductSpecDescKey,
  ProductSpecDescValue,
  RatingBox,
  ConclusionBox,
  PlusMinusBox,
  PlusMinusItem,
  ConclusionRating,
  ConclusionRatingItemStar,
  ConclusionRatingItem,
  ReviewScoreWrapper,
  ReviewScoreTitle,
  ReviewScoreDetail,
  NewestReview,
} from "../components/pages-component/isi-review/isi-review.elements";
import OtherProduct from "../components/other-product/other-product";
import StarRating from "../components/star-rating/star-rating";
import {
  Body1,
  Body2,
  H2,
  H3,
  Label1,
  Label3,
  Lead1,
  Lead2,
  Lead3,
  SH1,
  SH2,
  SH3,
  SH4,
  SH5,
} from "../components/typography/typography";
import LayoutIndicator from "../layouts/layout-indicator";
import { backgroundColor, mainColor, textColor } from "../styles/mixin";

const IsiRekomendasi = () => {
  return (
    <LayoutIndicator style={{ paddingTop: "150px" }}>
      <Container>
        <H2>5 Laptop Gaming Dengan Harga 10 Jutaan Terbaik Tahun 2022</H2>
      </Container>
      <IsiReviewContainer>
        <IsiReviewMainContent>
          <MainContentTypeInfo>
            <MainContentLabelDate>
              <MainContentLabelWrapper>
                <MainContentLabel label="editing">
                  <Label3 style={{ margin: "0" }}>Editing</Label3>
                </MainContentLabel>
                <MainContentLabel label="kuliah">
                  <Label3 style={{ margin: "0" }}>Kuliah</Label3>
                </MainContentLabel>
              </MainContentLabelWrapper>

              <MainContentDateWrapper>
                <div>
                  <MainContentDateCircle />
                  <Lead2 style={{ display: "inline-block" }}>
                    Rah Gadget - 10 Januari 2022 12:15
                  </Lead2>
                </div>
              </MainContentDateWrapper>
            </MainContentLabelDate>
            <MainContentTimeRead>
              <Lead2 style={{color: textColor.text_unable}}>5 Menit</Lead2>
            </MainContentTimeRead>
          </MainContentTypeInfo>
          <MainContent>
            <MainContentIntroImage>
              <Image
                src="/jumbo-laptop.png"
                layout="fill"
                objectFit="contain"
                alt="img-exam"
              />
            </MainContentIntroImage>
            <MainContentBoxDesc
              style={{
                background: backgroundColor.whiteCard,
                color: mainColor.primary,
                justifyContent: "center",
                padding: "4px 20px",
              }}
            >
              <Body1 style={{ fontStyle: "italic", margin: "0" }}>
                Tampilan Dell XPS 13 Plus
              </Body1>
            </MainContentBoxDesc>
            <Body1 style={{ textAlign: "justify" }}>
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                  Bahagia rasanya bila memiliki suatu laptop gaming yang sangat mengetahui kebutuhan penggunanya. Apalagi di era sekarang banyaknya pengguna yang menunjang tinggi akan fleksibilitas dalam segi penggunaan. Karenanya, laptop gaming 10 jutaan menjadi solusi terbaik untuk itu.
                  <br>
                  <br>
                  Namun dari fleksibilitas penggunaan yang diharapkan tersebut. Tak jarang juga pengguna ragu dalam memilih laptop gaming idamannya. Ragu akan budget 10 jutaannya yang nanti akan berdampak kepada produknya atau justru sebaliknya.
                  <br>
                  <br>
                  Namun tenang saja, disini kita akan merekomendasikan ke kamu 5 laptop gaming 10 jutaan terbaik di tahun 2022. Check it out!`,
                }}
              ></div>
            </Body1>
            <ProductDescription>
              <H3>Acer Predator Nitro 5 AN515-52</H3>
              <DoubleImageWrapper>
                <ContentImageWrapper>
                  <ImageBox>
                    <Image
                      src="/jumbo-laptop.png"
                      layout="fill"
                      objectFit="contain"
                      alt="img-exam"
                    />
                  </ImageBox>
                  <MainContentBoxDesc
                    style={{
                      background: backgroundColor.whiteCard,
                      color: mainColor.primary,
                      justifyContent: "center",
                      padding: "4px 20px",
                    }}
                  >
                    <Body1 style={{ fontStyle: "italic", margin: "0" }}>
                      Tampilan Dell XPS 13 Plus
                    </Body1>
                  </MainContentBoxDesc>
                </ContentImageWrapper>
                <ContentImageWrapper>
                  <ImageBox>
                    <Image
                      src="/jumbo-laptop.png"
                      layout="fill"
                      objectFit="contain"
                      alt="img-exam"
                    />
                  </ImageBox>
                  <MainContentBoxDesc
                    style={{
                      background: backgroundColor.whiteCard,
                      color: mainColor.primary,
                      justifyContent: "center",
                      padding: "4px 20px",
                    }}
                  >
                    <Body1 style={{ fontStyle: "italic", margin: "0" }}>
                      Tampilan Dell XPS 13 Plus
                    </Body1>
                  </MainContentBoxDesc>
                </ContentImageWrapper>
              </DoubleImageWrapper>
              <PriceButton>
                <SH3 style={{ margin: "0" }}>Rp. 10.799.000</SH3>
                <Body1 style={{ margin: "0" }}>Harga 10 Desember 2021</Body1>
              </PriceButton>
              <ButtonBuyWrapper>
                <div className="link1">
                  <ButtonLink style={{ width: "100%" }}>
                    Beli di shopee
                  </ButtonLink>
                </div>
                <div className="link2">
                  <ButtonLink style={{ width: "100%" }}>
                    Beli di shopee
                  </ButtonLink>
                </div>
                <div className="link3">
                  <ButtonAlternativeLink style={{ width: "100%" }}>
                    Beli di shopee
                  </ButtonAlternativeLink>
                </div>
              </ButtonBuyWrapper>
              <ProductSpecWrapper>
                <ProductSpec>
                  <ProductSpecTitle>
                    <SH3 style={{ margin: "0", color: textColor.white }}>
                      General
                    </SH3>
                  </ProductSpecTitle>
                  <ProductSpecDescWrapper>
                    <ProductSpecDescKey>
                      <Label1 style={{ margin: "0", color: "#000000" }}>
                        Device Type
                      </Label1>
                    </ProductSpecDescKey>
                    <ProductSpecDescValue>
                      <Label1 style={{ margin: "0", color: textColor.black }}>
                        Device Type
                      </Label1>
                    </ProductSpecDescValue>
                  </ProductSpecDescWrapper>
                  <ProductSpecDescWrapper>
                    <ProductSpecDescKey>
                      <Label1 style={{ margin: "0", color: "#000000" }}>
                        Device Type
                      </Label1>
                    </ProductSpecDescKey>
                    <ProductSpecDescValue>
                      <Label1 style={{ margin: "0", color: textColor.black }}>
                        Device Type
                      </Label1>
                    </ProductSpecDescValue>
                  </ProductSpecDescWrapper>
                </ProductSpec>
                <ProductSpec>
                  <ProductSpecTitle>
                    <SH3 style={{ margin: "0", color: textColor.white }}>
                      General
                    </SH3>
                  </ProductSpecTitle>
                  <ProductSpecDescWrapper>
                    <ProductSpecDescKey>
                      <Label1 style={{ margin: "0", color: "#000000" }}>
                        Device Type
                      </Label1>
                    </ProductSpecDescKey>
                    <ProductSpecDescValue>
                      <Label1 style={{ margin: "0", color: textColor.black }}>
                        Device Type
                      </Label1>
                    </ProductSpecDescValue>
                  </ProductSpecDescWrapper>
                  <ProductSpecDescWrapper>
                    <ProductSpecDescKey>
                      <Label1 style={{ margin: "0", color: "#000000" }}>
                        Device Type
                      </Label1>
                    </ProductSpecDescKey>
                    <ProductSpecDescValue>
                      <Label1 style={{ margin: "0", color: textColor.black }}>
                        Device Type
                      </Label1>
                    </ProductSpecDescValue>
                  </ProductSpecDescWrapper>
                </ProductSpec>
              </ProductSpecWrapper>
              <PlusMinusBox>
                <div>
                  <SH3 style={{ margin: "0 0 10px 0" }}>Kelebihan</SH3>
                  <PlusMinusItem>
                    <Image src="/plus-logo.svg" width={20} height={20} alt="plus-logo" />
                    <Lead3>Desain cukup atraktif</Lead3>
                  </PlusMinusItem>
                  <PlusMinusItem>
                    <Image src="/plus-logo.svg" width={20} height={20} alt="plus-logo" />
                    <Lead3>Layar besar</Lead3>
                  </PlusMinusItem>
                  <PlusMinusItem>
                    <Image src="/plus-logo.svg" width={20} height={20} alt="plus-logo" />
                    <Lead3>Baterai awet</Lead3>
                  </PlusMinusItem>
                </div>
                <div>
                  <SH3 style={{ margin: "0 0 10px 0" }}>Kekurangan</SH3>
                  <PlusMinusItem>
                    <Image src="/minus-logo.svg" width={20} height={20} alt="minus-logo" />
                    <Lead3>Kualitas kamera bukan yang terbaik</Lead3>
                  </PlusMinusItem>
                </div>
              </PlusMinusBox>
              <Body1 style={{ textAlign: "justify" }}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `
                  Nama Predator di ranah pasaran persaingan laptop memang sudah sangat terkenal sekali. Selepas dari brandnya yang juga sudah sangat familiar dan penggunanya yang terhitung masif di tanah air ini. Tentunya dengan komoditas pemakaian yang menunjang tinggi probilitas para gamernya.
                  <br>
                  <br>
                  Acer Predator Nitro AN515-52 juga memiliki desain yang begitu bongsor dalam balutan bodi berwarna hitam dan sentuhan aksen merah, yang dihiasi dengan motif serat karbon pada bagian casing luarnya ini, justru menonjolkan kegarangannya dari segi tampilannya yang futuristik.
                  <br>
                  <br>
                  Laptop dengan bobot sekitar 2.7 kg ini memiliki grafis GTX 1050 yang memiliki kecepatan lari 1354 MHz sampai 1455 Mhz dengan dukungan prosesor generasi ke-8 yang dimana memiliki kecepatan 2.30 GHz sampai maksimalnya 4.00 GHz.
                  <br>
                  <br>
                  Dimana hal ini sangat menunjang sekali dalam permainan game AAA yang ada. Apalagi dengan teknologi Acer Coolboost laptop ini mampu leluasa mengatur tempratur suhu yang ada. Untuk melihat review lengkap bisa dilihat di sini`,
                  }}
                ></div>
              </Body1>
            </ProductDescription>
            <ProductDescription>
              <H3>Acer Predator Nitro 5 AN515-52</H3>
              <DoubleImageWrapper>
                <ContentImageWrapper>
                  <ImageBox>
                    <Image
                      src="/jumbo-laptop.png"
                      layout="fill"
                      objectFit="contain"
                      alt="img-exam"
                    />
                  </ImageBox>
                  <MainContentBoxDesc
                    style={{
                      background: backgroundColor.whiteCard,
                      color: mainColor.primary,
                      justifyContent: "center",
                      padding: "4px 20px",
                    }}
                  >
                    <Body1 style={{ fontStyle: "italic", margin: "0" }}>
                      Tampilan Dell XPS 13 Plus
                    </Body1>
                  </MainContentBoxDesc>
                </ContentImageWrapper>
                <ContentImageWrapper>
                  <ImageBox>
                    <Image
                      src="/jumbo-laptop.png"
                      layout="fill"
                      objectFit="contain"
                      alt="img-exam"
                    />
                  </ImageBox>
                  <MainContentBoxDesc
                    style={{
                      background: backgroundColor.whiteCard,
                      color: mainColor.primary,
                      justifyContent: "center",
                      padding: "4px 20px",
                    }}
                  >
                    <Body1 style={{ fontStyle: "italic", margin: "0" }}>
                      Tampilan Dell XPS 13 Plus
                    </Body1>
                  </MainContentBoxDesc>
                </ContentImageWrapper>
              </DoubleImageWrapper>
              <PriceButton>
                <SH3 style={{ margin: "0" }}>Rp. 10.799.000</SH3>
                <Body1 style={{ margin: "0" }}>Harga 10 Desember 2021</Body1>
              </PriceButton>
              <ButtonBuyWrapper>
                <div className="link1">
                  <ButtonLink style={{ width: "100%" }}>
                    Beli di shopee
                  </ButtonLink>
                </div>
                <div className="link2">
                  <ButtonLink style={{ width: "100%" }}>
                    Beli di shopee
                  </ButtonLink>
                </div>
                <div className="link3">
                  <ButtonAlternativeLink style={{ width: "100%" }}>
                    Beli di shopee
                  </ButtonAlternativeLink>
                </div>
              </ButtonBuyWrapper>
              <ProductSpecWrapper>
                <ProductSpec>
                  <ProductSpecTitle>
                    <SH3 style={{ margin: "0", color: textColor.white }}>
                      General
                    </SH3>
                  </ProductSpecTitle>
                  <ProductSpecDescWrapper>
                    <ProductSpecDescKey>
                      <Label1 style={{ margin: "0", color: "#000000" }}>
                        Device Type
                      </Label1>
                    </ProductSpecDescKey>
                    <ProductSpecDescValue>
                      <Label1 style={{ margin: "0", color: textColor.black }}>
                        Device Type
                      </Label1>
                    </ProductSpecDescValue>
                  </ProductSpecDescWrapper>
                  <ProductSpecDescWrapper>
                    <ProductSpecDescKey>
                      <Label1 style={{ margin: "0", color: "#000000" }}>
                        Device Type
                      </Label1>
                    </ProductSpecDescKey>
                    <ProductSpecDescValue>
                      <Label1 style={{ margin: "0", color: textColor.black }}>
                        Device Type
                      </Label1>
                    </ProductSpecDescValue>
                  </ProductSpecDescWrapper>
                </ProductSpec>
                <ProductSpec>
                  <ProductSpecTitle>
                    <SH3 style={{ margin: "0", color: textColor.white }}>
                      General
                    </SH3>
                  </ProductSpecTitle>
                  <ProductSpecDescWrapper>
                    <ProductSpecDescKey>
                      <Label1 style={{ margin: "0", color: "#000000" }}>
                        Device Type
                      </Label1>
                    </ProductSpecDescKey>
                    <ProductSpecDescValue>
                      <Label1 style={{ margin: "0", color: textColor.black }}>
                        Device Type
                      </Label1>
                    </ProductSpecDescValue>
                  </ProductSpecDescWrapper>
                  <ProductSpecDescWrapper>
                    <ProductSpecDescKey>
                      <Label1 style={{ margin: "0", color: "#000000" }}>
                        Device Type
                      </Label1>
                    </ProductSpecDescKey>
                    <ProductSpecDescValue>
                      <Label1 style={{ margin: "0", color: textColor.black }}>
                        Device Type
                      </Label1>
                    </ProductSpecDescValue>
                  </ProductSpecDescWrapper>
                </ProductSpec>
              </ProductSpecWrapper>
              <PlusMinusBox>
                <div>
                  <SH3 style={{ margin: "0 0 10px 0" }}>Kelebihan</SH3>
                  <PlusMinusItem>
                    <Image src="/plus-logo.svg" width={20} height={20} alt="plus-logo" />
                    <Lead3>Desain cukup atraktif</Lead3>
                  </PlusMinusItem>
                  <PlusMinusItem>
                    <Image src="/plus-logo.svg" width={20} height={20} alt="plus-logo" />
                    <Lead3>Layar besar</Lead3>
                  </PlusMinusItem>
                  <PlusMinusItem>
                    <Image src="/plus-logo.svg" width={20} height={20} alt="plus-logo" />
                    <Lead3>Baterai awet</Lead3>
                  </PlusMinusItem>
                </div>
                <div>
                  <SH3 style={{ margin: "0 0 10px 0" }}>Kekurangan</SH3>
                  <PlusMinusItem>
                    <Image src="/minus-logo.svg" width={20} height={20} alt="minus-logo" />
                    <Lead3>Kualitas kamera bukan yang terbaik</Lead3>
                  </PlusMinusItem>
                </div>
              </PlusMinusBox>
              <Body1 style={{ textAlign: "justify" }}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `
                  Nama Predator di ranah pasaran persaingan laptop memang sudah sangat terkenal sekali. Selepas dari brandnya yang juga sudah sangat familiar dan penggunanya yang terhitung masif di tanah air ini. Tentunya dengan komoditas pemakaian yang menunjang tinggi probilitas para gamernya.
                  <br>
                  <br>
                  Acer Predator Nitro AN515-52 juga memiliki desain yang begitu bongsor dalam balutan bodi berwarna hitam dan sentuhan aksen merah, yang dihiasi dengan motif serat karbon pada bagian casing luarnya ini, justru menonjolkan kegarangannya dari segi tampilannya yang futuristik.
                  <br>
                  <br>
                  Laptop dengan bobot sekitar 2.7 kg ini memiliki grafis GTX 1050 yang memiliki kecepatan lari 1354 MHz sampai 1455 Mhz dengan dukungan prosesor generasi ke-8 yang dimana memiliki kecepatan 2.30 GHz sampai maksimalnya 4.00 GHz.
                  <br>
                  <br>
                  Dimana hal ini sangat menunjang sekali dalam permainan game AAA yang ada. Apalagi dengan teknologi Acer Coolboost laptop ini mampu leluasa mengatur tempratur suhu yang ada. Untuk melihat review lengkap bisa dilihat di sini`,
                  }}
                ></div>
              </Body1>
            </ProductDescription>
          </MainContent>
          <Lead1>Rekomendasi Laptop</Lead1>
          <OtherProduct></OtherProduct>
        </IsiReviewMainContent>
        <IsiReviewSideContent>
          <NewestReview>
            <Lead1>Rekomendasi Terbaru</Lead1>
            <div>
              <CardReview style={{width: "370px", height: "270px", margin: "8px 0"}}></CardReview>
              <CardReview style={{width: "370px", height: "270px", margin: "8px 0"}}></CardReview>
              <CardReview style={{width: "370px", height: "270px", margin: "8px 0"}}></CardReview>
              <CardReview style={{width: "370px", height: "270px", margin: "8px 0"}}></CardReview>
              <CardReview style={{width: "370px", height: "270px", margin: "8px 0"}}></CardReview>
            </div>
          </NewestReview>
        </IsiReviewSideContent>
      </IsiReviewContainer>
    </LayoutIndicator>
  );
};

export default IsiRekomendasi;

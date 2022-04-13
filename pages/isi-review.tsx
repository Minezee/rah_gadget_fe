import Image from "next/image";
import { ButtonAlternativeLink, ButtonLink } from "../components/button/Button";
import CardReview from "../components/card/card-review/CardReview";
import CardShopeeLink from "../components/card/card-shopee-link/CardShopeeLink";
import { Container } from "../components/container/Container";
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
import OtherProduct from "../components/other-product/OtherProduct";
import StarRating from "../components/star-rating/StarRating";
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
} from "../components/typography/Typography";
import LayoutIndicator from "../layouts/LayoutIndicator";
import { backgroundColor, mainColor, textColor } from "../styles/mixin";

const IsiReview = () => {

  let rating = 3;
  let ratingProduct = rating;
  const ratingArray = [0, 0, 0, 0, 0];

  ratingArray.forEach((rat, idx) => {
    if (ratingProduct >= 1) {
      ratingArray[idx] = 1 * 100;
      ratingProduct -= 1.0;
    } else if (ratingProduct > 0 && ratingProduct < 1) {
      ratingArray[idx] = ratingProduct * 100;
      ratingProduct = 0;
    }
  });

  return (
    <LayoutIndicator style={{ paddingTop: "150px" }}>
      <Container>
        <H2>Dell XPS 13 Plus: Desain Lebih Minimalis, Jauh Lebih Bertenaga</H2>
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
                  Salah satu pelopor laptop ultrabook tipis dan ringan yang jalankan sistem operasi Windows adalah Dell lewat lini premium-nya yakni XPS. Seri pertama XPS 13 sendiri meluncur sejak 2012 lalu. Dan kini, selang hampir 10 tahun kemudian, Dell XPS 13 Plus hadir lebih simpel nan gahar.
                  <br/>
                  <br/>
                  Perkembangan desain dari Dell XPS 13 selama beberapa tahun terakhir memang bisa dibilang tergolong stagnan. Wajar saja, mengingat sejak dulu ultrabook Windows premium satu ini memang sudah mengusung desain modern—menjadi pelopor desain layar dengan bezel sangat tipis, yang dikenal dengan nama “InfinityEdge display”. Tentunya tak luput dari kekurangan.`,
                }}
              ></div>
            </Body1>
            <MainContentBoxDesc
              style={{
                background: mainColor.primary,
                color: textColor.white,
                padding: "20px 20px",
              }}
            >
              <Lead3 style={{ margin: "0 12px 0 0" }}>
                Ringkasan Daftar Isi
              </Lead3>
              [
              <Body2 style={{ color: mainColor.rating_active }}>
                tampilkan
              </Body2>
              ]
            </MainContentBoxDesc>

            <Lead1>Desain</Lead1>
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
            <Body1 style={{ textAlign: "justify" }}>
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                  Hadir dalam dua opsi warna yakni Platinum dan Graphite, dimensinya tetap cukup ringan di kisaran 1,2 kilogram dengan ketebalan sekitar 15,28mm. Saking simpelnya, laptop ini hanya dilengkapi dengan dua port USB-C yang mendukung Thunderbolt 4, alias bahkan tanpa jack audio 3,5mm. Dell memiliki alasan tersendiri untuk ini.
                  <br/>
                  <br/>
                  Sementara ketika perangkat dibuka, pengguna akan disambut dengan desain minim distraksi pada Dell XPS 13 Plus. Bagian papan ketik alias keyboard dibuat penuh dari ujung ke ujung, tanpa jeda tiap tombol dan dengan kedalaman tekan 1mm. Bingung di mana letak touchpad-nya? Menyatu pada bagian bawah tanpa border atau bingkai khusus`,
                }}
              ></div>
            </Body1>

            <Lead1>Performa</Lead1>
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
            <Body1 style={{ textAlign: "justify" }}>
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                  Hadir dalam dua opsi warna yakni Platinum dan Graphite, dimensinya tetap cukup ringan di kisaran 1,2 kilogram dengan ketebalan sekitar 15,28mm. Saking simpelnya, laptop ini hanya dilengkapi dengan dua port USB-C yang mendukung Thunderbolt 4, alias bahkan tanpa jack audio 3,5mm. Dell memiliki alasan tersendiri untuk ini.
                  <br/>
                  <br/>
                  Sementara ketika perangkat dibuka, pengguna akan disambut dengan desain minim distraksi pada Dell XPS 13 Plus. Bagian papan ketik alias keyboard dibuat penuh dari ujung ke ujung, tanpa jeda tiap tombol dan dengan kedalaman tekan 1mm. Bingung di mana letak touchpad-nya? Menyatu pada bagian bawah tanpa border atau bingkai khusus`,
                }}
              ></div>
            </Body1>

            <Lead1>Layar</Lead1>
            <Body1 style={{ textAlign: "justify" }}>
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                  Hadir dalam dua opsi warna yakni Platinum dan Graphite, dimensinya tetap cukup ringan di kisaran 1,2 kilogram dengan ketebalan sekitar 15,28mm. Saking simpelnya, laptop ini hanya dilengkapi dengan dua port USB-C yang mendukung Thunderbolt 4, alias bahkan tanpa jack audio 3,5mm. Dell memiliki alasan tersendiri untuk ini.
                  `,
                }}
              ></div>
            </Body1>

            <Lead1>Baterai</Lead1>
            <Body1 style={{ textAlign: "justify" }}>
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                  Hadir dalam dua opsi warna yakni Platinum dan Graphite, dimensinya tetap cukup ringan di kisaran 1,2 kilogram dengan ketebalan sekitar 15,28mm. Saking simpelnya, laptop ini hanya dilengkapi dengan dua port USB-C yang mendukung Thunderbolt 4, alias bahkan tanpa jack audio 3,5mm. Dell memiliki alasan tersendiri untuk ini.
                  `,
                }}
              ></div>
            </Body1>

            <Lead1>Konektivitas</Lead1>
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
                  Hadir dalam dua opsi warna yakni Platinum dan Graphite, dimensinya tetap cukup ringan di kisaran 1,2 kilogram dengan ketebalan sekitar 15,28mm. Saking simpelnya, laptop ini hanya dilengkapi dengan dua port USB-C yang mendukung Thunderbolt 4, alias bahkan tanpa jack audio 3,5mm. Dell memiliki alasan tersendiri untuk ini.
                  `,
                }}
              ></div>
            </Body1>

            <Lead1>Kesimpulan</Lead1>
            <Body1 style={{ textAlign: "justify" }}>
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                  Hadir dalam dua opsi warna yakni Platinum dan Graphite, dimensinya tetap cukup ringan di kisaran 1,2 kilogram dengan ketebalan sekitar 15,28mm. Saking simpelnya, laptop ini hanya dilengkapi dengan dua port USB-C yang mendukung Thunderbolt 4, alias bahkan tanpa jack audio 3,5mm. Dell memiliki alasan tersendiri untuk ini.
                  `,
                }}
              ></div>
            </Body1>
          </MainContent>
          <ProductLinkWrapper>
            <Image src="/shopee-logo.png" width={180} height={57.59} alt="shopee-logo" />
            <div className="logo-link-margin"></div>
            <CardShopeeLink style={{ margin: "8px 0" }}></CardShopeeLink>
            <CardShopeeLink style={{ margin: "8px 0" }}></CardShopeeLink>
            <ButtonAlternativeLink style={{ margin: "24px auto 32px auto" }}>
              Shopee Alternatif Link
            </ButtonAlternativeLink>
          </ProductLinkWrapper>
          <ProductSpecWrapper>
            
            <ProductSpec>
              <ProductSpecTitle>
                <SH3 style={{ margin: "0", color: textColor.white }}>General</SH3>
              </ProductSpecTitle>
              <ProductSpecDescWrapper>
                <ProductSpecDescKey>
                  <Label1 style={{ margin: "0", color:"#000000" }}>Device Type</Label1>
                </ProductSpecDescKey>
                <ProductSpecDescValue>
                  <Label1 style={{ margin: "0", color: textColor.black }}>Device Type</Label1>
                </ProductSpecDescValue>
              </ProductSpecDescWrapper>
              <ProductSpecDescWrapper>
                <ProductSpecDescKey>
                  <Label1 style={{ margin: "0", color:"#000000" }}>Device Type</Label1>
                </ProductSpecDescKey>
                <ProductSpecDescValue>
                  <Label1 style={{ margin: "0", color: textColor.black }}>Device Type</Label1>
                </ProductSpecDescValue>
              </ProductSpecDescWrapper>
            </ProductSpec>
            
            <ProductSpec>
              <ProductSpecTitle>
                <SH3 style={{ margin: "0", color: textColor.white }}>General</SH3>
              </ProductSpecTitle>
              <ProductSpecDescWrapper>
                <ProductSpecDescKey>
                  <Label1 style={{ margin: "0", color:"#000000" }}>Device Type</Label1>
                </ProductSpecDescKey>
                <ProductSpecDescValue>
                  <Label1 style={{ margin: "0", color: textColor.black }}>Device Type</Label1>
                </ProductSpecDescValue>
              </ProductSpecDescWrapper>
              <ProductSpecDescWrapper>
                <ProductSpecDescKey>
                  <Label1 style={{ margin: "0", color:"#000000" }}>Device Type</Label1>
                </ProductSpecDescKey>
                <ProductSpecDescValue>
                  <Label1 style={{ margin: "0", color: textColor.black }}>Device Type</Label1>
                </ProductSpecDescValue>
              </ProductSpecDescWrapper>
            </ProductSpec>

          </ProductSpecWrapper>

          <H3>Dell XPS 13</H3>
          <ConclusionBox>
            <RatingBox>
              <SH4 style={{margin: "0"}}>4.0</SH4>
              <SH5 style={{margin: "0", position: "relative", bottom: "-13px"}}>/5</SH5>
            </RatingBox>
            <Lead3 style={{margin: "0", textAlign: "justify"}}>
              Walaupun jadi yang paling murah, secara keseluruhan smartphone ini masih layak pakai untuk kebutuhan keseharian masa kini.
            </Lead3>
          </ConclusionBox>

          {/* MAYBE WE CAN CHANGE TO GRID */}
          <PlusMinusBox>
            <div>
              <SH3 style={{margin: "0 0 10px 0"}}>Kelebihan</SH3>
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
              <SH3 style={{margin: "0 0 10px 0"}}>Kekurangan</SH3>
              <PlusMinusItem>
                <Image src="/minus-logo.svg" width={20} height={20} alt="minus-logo" />
                <Lead3>Kualitas kamera bukan yang terbaik</Lead3>
              </PlusMinusItem>
            </div>
          </PlusMinusBox>
          <ConclusionRating>
            <div>
              <ConclusionRatingItem>
                <Lead3 style={{margin:"0"}}>Desain</Lead3>
                <ConclusionRatingItemStar>
                  <div>
                    {ratingArray.map((rat, idx) => (
                      <StarRating ratingValue={rat} id={idx} key={idx} starWidth="28"></StarRating>
                    ))}
                  </div>
                  <SH2 style={{margin: "0"}}>
                    {rating % 1 == 0 ? rating + ".0" : rating}  
                  </SH2>
                </ConclusionRatingItemStar>
              </ConclusionRatingItem>
              <ConclusionRatingItem>
                <Lead3 style={{margin:"0"}}>Desain</Lead3>
                <ConclusionRatingItemStar>
                  <div>
                    {ratingArray.map((rat, idx) => (
                      <StarRating ratingValue={rat} id={idx} key={idx} starWidth="28"></StarRating>
                    ))}
                  </div>
                  <SH2 style={{margin: "0"}}>
                    {rating % 1 == 0 ? rating + ".0" : rating}  
                  </SH2>
                </ConclusionRatingItemStar>
              </ConclusionRatingItem>
            </div>
            <div>
              <ConclusionRatingItem>
                <Lead3 style={{margin:"0"}}>Desain</Lead3>
                <ConclusionRatingItemStar>
                  <div>
                    {ratingArray.map((rat, idx) => (
                      <StarRating ratingValue={rat} id={idx} key={idx} starWidth="28"></StarRating>
                    ))}
                  </div>
                  <SH2 style={{margin: "0"}}>
                    {rating % 1 == 0 ? rating + ".0" : rating}  
                  </SH2>
                </ConclusionRatingItemStar>
              </ConclusionRatingItem>
              <ConclusionRatingItem>
                <Lead3 style={{margin:"0"}}>Desain</Lead3>
                <ConclusionRatingItemStar>
                  <div>
                    {ratingArray.map((rat, idx) => (
                      <StarRating ratingValue={rat} id={idx} key={idx} starWidth="28"></StarRating>
                    ))}
                  </div>
                  <SH2 style={{margin: "0"}}>
                    {rating % 1 == 0 ? rating + ".0" : rating}  
                  </SH2>
                </ConclusionRatingItemStar>
              </ConclusionRatingItem>
            </div>
          </ConclusionRating>
          {/* END OF CHANGE TO GRID */}
          
          <Lead1>Rekomendasi Laptop</Lead1>
          <OtherProduct></OtherProduct>
        </IsiReviewMainContent>
        <IsiReviewSideContent>
          <ButtonLink style={{ width: "100%" }}>Beli Di Shopee</ButtonLink>
          <ReviewScoreWrapper>
            <ReviewScoreTitle>
              <Lead1 style={{margin: "0"}}>Review Score</Lead1>
              <div className="rating-value">
                <SH1 style={{margin: "0"}}>4.0</SH1>
                <SH5 style={{margin: "0"}}>/5</SH5>
              </div>
            </ReviewScoreTitle>
            <ReviewScoreDetail>
              
              <ConclusionRatingItem>
                <Lead3 style={{margin:"0"}}>Desain</Lead3>
                <ConclusionRatingItemStar>
                  <div>
                    {ratingArray.map((rat, idx) => (
                      <StarRating ratingValue={rat} id={idx} key={idx} starWidth="28"></StarRating>
                    ))}
                  </div>
                  <SH2 style={{margin: "0"}}>
                    {rating % 1 == 0 ? rating + ".0" : rating}  
                  </SH2>
                </ConclusionRatingItemStar>
              </ConclusionRatingItem>
              
              <ConclusionRatingItem>
                <Lead3 style={{margin:"0"}}>Desain</Lead3>
                <ConclusionRatingItemStar>
                  <div>
                    {ratingArray.map((rat, idx) => (
                      <StarRating ratingValue={rat} id={idx} key={idx} starWidth="28"></StarRating>
                    ))}
                  </div>
                  <SH2 style={{margin: "0"}}>
                    {rating % 1 == 0 ? rating + ".0" : rating}  
                  </SH2>
                </ConclusionRatingItemStar>
              </ConclusionRatingItem>

              <Lead1 style={{margin: "0"}}>Kelebihan</Lead1>
              <div>
                <PlusMinusItem>
                  <Image src="/plus-logo.svg" width={20} height={20} alt="plus-logo" />
                  <Body1>Desain cukup atraktif</Body1>
                </PlusMinusItem>
                <PlusMinusItem>
                  <Image src="/plus-logo.svg" width={20} height={20} alt="plus-logo" />
                  <Body1>Desain cukup atraktif</Body1>
                </PlusMinusItem>
              </div>

              <Lead1 style={{margin: "0"}}>Kekurangan</Lead1>
              <div>
                <PlusMinusItem>
                  <Image src="/minus-logo.svg" width={20} height={20} alt="minus-logo" />
                  <Body1>Kualitas kamera bukan yang terbaik</Body1>
                </PlusMinusItem>
                <PlusMinusItem>
                  <Image src="/minus-logo.svg" width={20} height={20} alt="minus-logo" />
                  <Body1>Kualitas kamera bukan yang terbaik</Body1>
                </PlusMinusItem>
              </div>

            </ReviewScoreDetail>
          </ReviewScoreWrapper>

          <NewestReview>
            <Lead1>Review Terbaru</Lead1>
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

export default IsiReview;

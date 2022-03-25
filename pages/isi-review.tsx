import Image from "next/image";
import { ButtonLink } from "../components/button/Button";
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
} from "../components/isi-review/isi-review.elements";
import {
  Body1,
  Body2,
  H2,
  Label3,
  Lead1,
  Lead2,
  Lead3,
} from "../components/typography/Typography";
import LayoutIndicator from "../layouts/LayoutIndicator";
import { backgroundColor, mainColor, textColor } from "../styles/mixin";

const IsiReview = () => {
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
                  <Label3>Editing</Label3>
                </MainContentLabel>
                <MainContentLabel label="kuliah">
                  <Label3>Kuliah</Label3>
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
              <Lead2>5 Menit</Lead2>
            </MainContentTimeRead>
          </MainContentTypeInfo>
          <MainContent>
            <MainContentIntroImage>
              <Image
                src="/jumbo-laptop.png"
                layout="fill"
                objectFit="contain"
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
        </IsiReviewMainContent>
        <IsiReviewSideContent>
          <ButtonLink style={{ width: "100%" }}>Beli Di Shopee</ButtonLink>
        </IsiReviewSideContent>
      </IsiReviewContainer>
    </LayoutIndicator>
  );
};

export default IsiReview;

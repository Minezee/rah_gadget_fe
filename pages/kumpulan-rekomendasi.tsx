import { Container } from "../components/container/container";
import OtherProduct from "../components/other-product/other-product";
import {
  ImageDesc,
  ImagesPreview,
  LabelWrapper,
  PopularItem,
  PopularWrapper,
  ProductPopularWrapper,
} from "../components/pages-component/kumpulan-rekomendasi/kumpulan-rekomendasi.elements";
import {
  H1,
  H2,
  H3,
  Label3,
  Lead2,
  Lead9,
} from "../components/typography/typography";
import LayoutNonIndicator from "../layouts/layout-non-indicator";

const KumpulanRekomendasi = () => {
  return (
    <LayoutNonIndicator>
      <Container style={{ marginTop: "113px", paddingBottom: "60px" }}>
        <H2>Rekomendasi Laptop</H2>
        <ImagesPreview>
          <div className="img img-1">
            <ImageDesc style={{ padding: "11px 24px" }}>
              <div>
                <LabelWrapper label={"gaming"}>
                  <Label3 style={{ margin: "0" }}>Gaming</Label3>
                </LabelWrapper>
                <LabelWrapper label={"gaming"}>
                  <Label3 style={{ margin: "0" }}>Gaming</Label3>
                </LabelWrapper>
              </div>
              <Lead9 style={{ margin: "0" }}>
                ASUS VivoBook K413EQ: Desain Lebih Minimalis, Jauh Lebih
                Bertenaga
              </Lead9>
            </ImageDesc>
          </div>
          <div className="img img-2">
            <ImageDesc>
              <div>
                <LabelWrapper label={"gaming"}>
                  <Label3 style={{ margin: "0" }}>Gaming</Label3>
                </LabelWrapper>
                <LabelWrapper label={"gaming"}>
                  <Label3 style={{ margin: "0" }}>Gaming</Label3>
                </LabelWrapper>
              </div>
              <Lead2 style={{ margin: "0" }}>
                ASUS VivoBook K413EQ: Desain Lebih Minimalis, Lebih Bertenaga
              </Lead2>
            </ImageDesc>
          </div>
          <div className="img img-3">
            <ImageDesc>
              <div>
                <LabelWrapper label={"gaming"}>
                  <Label3 style={{ margin: "0" }}>Gaming</Label3>
                </LabelWrapper>
                <LabelWrapper label={"gaming"}>
                  <Label3 style={{ margin: "0" }}>Gaming</Label3>
                </LabelWrapper>
              </div>
              <Lead2 style={{ margin: "0" }}>
                ASUS VivoBook K413EQ: Desain Lebih Minimalis, Lebih Bertenaga
              </Lead2>
            </ImageDesc>
          </div>
          <div className="img img-4">
            <ImageDesc>
              <div>
                <LabelWrapper label={"gaming"}>
                  <Label3 style={{ margin: "0" }}>Gaming</Label3>
                </LabelWrapper>
                <LabelWrapper label={"gaming"}>
                  <Label3 style={{ margin: "0" }}>Gaming</Label3>
                </LabelWrapper>
              </div>
              <Lead2 style={{ margin: "0" }}>
                ASUS VivoBook K413EQ: Desain Lebih Minimalis, Lebih Bertenaga
              </Lead2>
            </ImageDesc>
          </div>
          <div className="img img-5">
            <ImageDesc>
              <div>
                <LabelWrapper label={"gaming"}>
                  <Label3 style={{ margin: "0" }}>Gaming</Label3>
                </LabelWrapper>
                <LabelWrapper label={"gaming"}>
                  <Label3 style={{ margin: "0" }}>Gaming</Label3>
                </LabelWrapper>
              </div>
              <Lead2 style={{ margin: "0" }}>
                ASUS VivoBook K413EQ: Desain Lebih Minimalis, Lebih Bertenaga
              </Lead2>
            </ImageDesc>
          </div>
        </ImagesPreview>
        <ProductPopularWrapper>
          <OtherProduct></OtherProduct>
          <PopularWrapper>
            <H3 style={{ margin: "0" }}>Terpopuler</H3>
            <PopularItem>
              <H1 className="number" style={{ margin: "0" }}>
                1
              </H1>
              <Lead2 style={{ margin: "0" }}>
                7 Laptop Terbaik sepanjang 2021, Spesifikasinya Istimewa
              </Lead2>
            </PopularItem>
            <PopularItem>
              <H1 className="number" style={{ margin: "0" }}>
                2
              </H1>
              <Lead2 style={{ margin: "0" }}>
                7 Laptop Terbaik sepanjang 2021, Spesifikasinya Istimewa
              </Lead2>
            </PopularItem>
          </PopularWrapper>
        </ProductPopularWrapper>
      </Container>
    </LayoutNonIndicator>
  );
};

export default KumpulanRekomendasi;

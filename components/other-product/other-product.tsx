import Image from "next/image";
import { useState } from "react";
import { labelColorTypes } from "../../styles/mixin";
import { ButtonArrow } from "../button/button";
import { Label3 } from "../typography/typography";
import {
  OtherProductDesc,
  OtherProductImage,
  OtherProductLabel,
  OtherProductLabelWrapper,
  OtherProductTitle,
  OtherProductWrapper,
} from "./other-product.elements";

const OtherProduct = () => {
  const [data, setData] = useState([
    {
      img: "",
      type: ["editing", "gaming"],
      title: "5 Laptop Terbaru Tahun 2022, Cocok Untuk Kamu Sang Editor",
      desc: "Walaupun jadi yang paling murah, secara keseluruhan smartphone ini masih layak pakai untuk kebutuhan...",
    },
  ]);

  return (
    <div>
      <OtherProductWrapper>
        <OtherProductImage>
          <Image src="/img-exam.jfif" layout="fill" objectFit="cover" alt="img-exam" />
        </OtherProductImage>
        <div>
          <OtherProductLabelWrapper>
            {data[0]?.type?.map((labelProd, idx) => (
              <OtherProductLabel label={labelProd as labelColorTypes} key={idx}>
                <Label3 style={{ margin: "0" }}>{labelProd}</Label3>
              </OtherProductLabel>
            ))}
          </OtherProductLabelWrapper>
          <OtherProductTitle>
            5 Laptop Terbaru Tahun 2022, Cocok Untuk Kamu Sang Editor
          </OtherProductTitle>
          <OtherProductDesc>
            Walaupun jadi yang paling murah, secara keseluruhan smartphone ini
            masih layak pakai untuk kebutuhan...
          </OtherProductDesc>
        </div>
      </OtherProductWrapper>
      <OtherProductWrapper>
        <OtherProductImage>
          <Image src="/img-exam.jfif" layout="fill" objectFit="cover" alt="img-exam" />
        </OtherProductImage>
        <div>
          <OtherProductLabelWrapper>
            {data[0]?.type?.map((labelProd, idx) => (
              <OtherProductLabel label={labelProd as labelColorTypes} key={idx}>
                <Label3 style={{ margin: "0" }}>{labelProd}</Label3>
              </OtherProductLabel>
            ))}
          </OtherProductLabelWrapper>
          <OtherProductTitle>
            5 Laptop Terbaru Tahun 2022, Cocok Untuk Kamu Sang Editor
          </OtherProductTitle>
          <OtherProductDesc>
            Walaupun jadi yang paling murah, secara keseluruhan smartphone ini
            masih layak pakai untuk kebutuhan...
          </OtherProductDesc>
        </div>
      </OtherProductWrapper>

      <ButtonArrow style={{ margin: "32px auto 0 auto" }}>
        Lihat Review Lain
      </ButtonArrow>
    </div>
  );
};

export default OtherProduct;

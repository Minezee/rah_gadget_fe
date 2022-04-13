import Image from "next/image";
import { useState } from "react";
import { labelColor, labelColorTypes } from "../../../styles/mixin";
import { ButtonLink } from "../../button/Button";
import {
  OtherProductLabel,
  OtherProductLabelWrapper,
} from "../../other-product/OtherProduct.elements";
import { Body1, Label3, Lead1 } from "../../typography/Typography";
import { CardInfoShopeeLinkWrapper } from "./CardInfoShopeeLink.elements";

const CardInfoShopeeLink = () => {
  const [data, setData] = useState({
    img: "",
    title: "Acer Predator Nitro 5 AN515-52",
    price: "10.799.000",
    type: ["editing", "gaming"],
    desc: "Walaupun jadi yang paling murah, secara keseluruhan smartphone ini masih layak pakai untuk kebutuhan keseharian.",
  });

  return (
    <CardInfoShopeeLinkWrapper>
      <div>
        <Image src="/jumbo-laptop.png" layout="fill" objectFit="contain" alt="img-exam" />
      </div>
      <div>
        <Lead1 style={{ margin: "0 0 8px 0" }}>{data.title}</Lead1>
        <OtherProductLabelWrapper>
          {data?.type?.map((labelProd, idx) => (
            <OtherProductLabel label={labelProd as labelColorTypes} key={idx}>
              <Label3 style={{ margin: "0" }}>{labelProd}</Label3>
            </OtherProductLabel>
          ))}
        </OtherProductLabelWrapper>
        <Lead1 style={{ margin: "0" }}>Rp. {data.price}</Lead1>
        <Body1>{data.desc}</Body1>
      </div>
      <div>
        <ButtonLink>Beli di Shopee</ButtonLink>
      </div>
    </CardInfoShopeeLinkWrapper>
  );
};

export default CardInfoShopeeLink;

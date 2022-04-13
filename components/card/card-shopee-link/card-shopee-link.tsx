import { ButtonLink } from "../../button/button";
import { Body1, SH3 } from "../../typography/typography";
import {
  CardShopeeLinkInfo,
  CardShopeeLinkWrapper,
} from "./card-shopee-link.elements";

interface CardShopeeLinkType {
  style?: Object;
}

const CardShopeeLink = ({ style }: CardShopeeLinkType) => {
  return (
    <CardShopeeLinkWrapper style={style}>
      <CardShopeeLinkInfo>
        <Body1>dellstore.id</Body1>
        <SH3>Rp. 17.499.000</SH3>
      </CardShopeeLinkInfo>
      <div>
        <ButtonLink>Beli di Shopee</ButtonLink>
      </div>
    </CardShopeeLinkWrapper>
  );
};

export default CardShopeeLink;

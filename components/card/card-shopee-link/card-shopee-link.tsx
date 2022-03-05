import { ButtonLink } from "../../button/button";
import { Body1, SH3 } from "../../typography/typography";
import { CardShopeeLinkWrapper } from "./card-shopee-link.elements";

const CardShopeeLink = () => {
  return (
    <CardShopeeLinkWrapper>
      <div>
        <Body1>dellstore.id</Body1>
        <SH3>Rp. 17.499.000</SH3>
      </div>
      <div>
        <ButtonLink>Beli di Shopee</ButtonLink>
      </div>
    </CardShopeeLinkWrapper>
  );
};

export default CardShopeeLink;

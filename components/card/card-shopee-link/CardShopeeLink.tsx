import { ButtonLink } from "../../button/Button";
import { Body1, SH3 } from "../../typography/Typography";
import { CardShopeeLinkInfo, CardShopeeLinkWrapper } from "./CardShopeeLink.elements";

const CardShopeeLink = () => {
  return (
    <CardShopeeLinkWrapper>
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

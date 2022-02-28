import Image from "next/image";
import StarRating from "../../star-rating/star-rating";
import { Label5 } from "../../typography/typography";
import {
  CardProductWrapper,
  ProductImage,
  ProductInfo,
  ProductPrice,
  ProductRating,
  ProductRatingText,
  ProductTitle,
  ProductType,
} from "./card-product.elements";

const CardProduct = (props: any) => {
  let ratingProduct = props.rating;
  const rating = [0, 0, 0, 0, 0];

  rating.forEach((rat, idx) => {
    if (ratingProduct >= 1) {
      rating[idx] = 1 * 100;
      ratingProduct -= 1.0;
    } else if (ratingProduct > 0 && ratingProduct < 1) {
      rating[idx] = ratingProduct * 100;
      ratingProduct = 0;
    }
  });

  return (
    <CardProductWrapper>
      <ProductImage>
        <ProductType label="Bisnis" />
        <Image src="/laptop-example.png" width="250" height="210"></Image>
      </ProductImage>
      <ProductInfo>
        <ProductTitle>Asus Vivobook A409JA</ProductTitle>
        <ProductPrice price={7200000}></ProductPrice>
        <ProductRating>
          {rating.map((rat, idx) => (
            <StarRating ratingValue={rat} id={idx} key={idx}></StarRating>
          ))}
          <ProductRatingText>{props.rating % 1 == 0 ? props.rating + ".0" : props.rating}</ProductRatingText>
        </ProductRating>
      </ProductInfo>
    </CardProductWrapper>
  );
};

export default CardProduct;

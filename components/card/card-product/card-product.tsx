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

interface CardProductType {
  rating: number;
  label: string;
  type: string;
}

const CardProduct = ({ rating, label, type }: CardProductType) => {
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
    <CardProductWrapper>
      <ProductImage>
        <ProductType label={label} type={type} />
        <Image src="/laptop-example.png" width="250" height="210" alt="img-exam"></Image>
      </ProductImage>
      <ProductInfo>
        <ProductTitle>Asus Vivobook A409JA</ProductTitle>
        <ProductPrice price={7200000}></ProductPrice>
        <ProductRating>
          {ratingArray.map((rat, idx) => (
            <StarRating ratingValue={rat} id={idx} key={idx}></StarRating>
          ))}
          <ProductRatingText>
            {rating % 1 == 0 ? rating + ".0" : rating}
          </ProductRatingText>
        </ProductRating>
      </ProductInfo>
    </CardProductWrapper>
  );
};

export default CardProduct;

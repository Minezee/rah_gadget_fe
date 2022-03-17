import { BrandCardWrapper } from "./brand-card.elements";
import Image from "next/image";

const BrandCard = () => {
  return(
    <BrandCardWrapper>
      <Image src="/exam-brand.png" layout="fill" objectFit="contain"></Image>
    </BrandCardWrapper>
  )
};


export default BrandCard
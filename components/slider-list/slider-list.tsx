import { ButtonCarouselLeft, ButtonCarouselRight } from "../button/button";
import { SliderBox, SliderWrapper } from "./slider-list.elements";

interface ArticleListType {
  children: JSX.Element | JSX.Element[];
}

const nextSlide = () => {
  document.getElementsByClassName('slider-box')[0].scrollLeft += 372;
}

const prevSlide = () => {
  document.getElementsByClassName('slider-box')[0].scrollLeft -= 372;
} 

const SliderList = ({ children }: ArticleListType) => {
  return (
    <SliderWrapper>
      <ButtonCarouselLeft className="carousel carousel-left" onClick={prevSlide}></ButtonCarouselLeft>
      <SliderBox className="slider-box">{children}</SliderBox>
      <ButtonCarouselRight className="carousel carousel-right" onClick={nextSlide}></ButtonCarouselRight>
    </SliderWrapper>
  );
};

export default SliderList;

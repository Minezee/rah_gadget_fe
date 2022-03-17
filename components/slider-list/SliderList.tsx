import { useEffect, useState } from "react";
import { ButtonCarouselLeft, ButtonCarouselRight } from "../button/Button";
import { SliderBox, SliderWrapper } from "./SliderList.elements";

interface ArticleListType {
  children: JSX.Element | JSX.Element[];
  sliderWidth: number,
  id: String
}

const SliderList = ({ children, sliderWidth, id }: ArticleListType) => {
  
  const [slideWidth, setSlideWidth] = useState(0)
  useEffect(() => {
    setSlideWidth(sliderWidth)
  }, [])

  const nextSlide = () => {
    document.getElementsByClassName('slider-box' + id)[0].scrollLeft += slideWidth;
  }
  const prevSlide = () => {
    document.getElementsByClassName('slider-box' + id)[0].scrollLeft -= slideWidth;
  } 

  return (
    <SliderWrapper>
      <ButtonCarouselLeft className="carousel carousel-left" onClick={prevSlide}></ButtonCarouselLeft>
      <SliderBox className={`slider-box${id}`}>{children}</SliderBox>
      <ButtonCarouselRight className="carousel carousel-right" onClick={nextSlide}></ButtonCarouselRight>
    </SliderWrapper>
  );
};

export default SliderList;

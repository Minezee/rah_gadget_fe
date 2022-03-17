import { useEffect, useState } from "react";
import { ButtonCarouselLeft, ButtonCarouselRight } from "../button/button";
import { SliderBox, SliderWrapper } from "./slider-list.elements";

interface ArticleListType {
  children: JSX.Element | JSX.Element[];
  sliderWidth: number
}

const SliderList = ({ children, sliderWidth }: ArticleListType) => {
  
  const [slideWidth, setSlideWidth] = useState(0)
  useEffect(() => {
    setSlideWidth(sliderWidth)
  }, [])

  const nextSlide = () => {
    document.getElementsByClassName('slider-box')[0].scrollLeft += slideWidth;
  }
  const prevSlide = () => {
    document.getElementsByClassName('slider-box')[0].scrollLeft -= slideWidth;
  } 

  return (
    <SliderWrapper>
      <ButtonCarouselLeft className="carousel carousel-left" onClick={prevSlide}></ButtonCarouselLeft>
      <SliderBox className="slider-box">{children}</SliderBox>
      <ButtonCarouselRight className="carousel carousel-right" onClick={nextSlide}></ButtonCarouselRight>
    </SliderWrapper>
  );
};

export default SliderList;

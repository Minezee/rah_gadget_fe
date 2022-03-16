import { ButtonCarouselLeft, ButtonCarouselRight } from "../button/button";
import { ArticlesBox, ArticlesWrapper } from "./article-list.elements";

interface ArticleListType {
  children: JSX.Element | JSX.Element[];
}

const nextSlide = () => {
  document.getElementsByClassName('article-box')[0].scrollLeft += 372;
}

const prevSlide = () => {
  document.getElementsByClassName('article-box')[0].scrollLeft -= 372;
} 

const ArticleList = ({ children }: ArticleListType) => {
  return (
    <ArticlesWrapper>
      <ButtonCarouselLeft className="carousel carousel-left" onClick={prevSlide}></ButtonCarouselLeft>
      <ArticlesBox className="article-box">{children}</ArticlesBox>
      <ButtonCarouselRight className="carousel carousel-right" onClick={nextSlide}></ButtonCarouselRight>
    </ArticlesWrapper>
  );
};

export default ArticleList;

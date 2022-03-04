import { ButtonCTA } from "../../button/button"
import { CardArticleInfo, CardArticleInfoDate, CardArticleInfoTitle, CardArticleWrapper } from "./card-article.elements"

const CardArticle = () => {
  return(
    <CardArticleWrapper>
      <CardArticleInfo>
        <CardArticleInfoTitle>5 Laptop terbaik cocok buat kerja kantoran</CardArticleInfoTitle>
        <CardArticleInfoDate>Minggu, 10 Januari 2022 </CardArticleInfoDate>
        <ButtonCTA className="button-detail">Lihat Produk</ButtonCTA>
      </CardArticleInfo>
    </CardArticleWrapper>
  )
}

export default CardArticle
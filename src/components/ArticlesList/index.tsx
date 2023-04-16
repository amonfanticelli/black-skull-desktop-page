import {
  ArticleSection,
  TitleContainer,
  ColoredSpanTitle,
  ButtonReadAll,
  Title,
  List,
  DateSpan,
  ButtonReadMore,
  ArticleInfoContainer,
} from "./style";
import { ButtonArrowRight } from "../ButtonArrowRight";
import { ButtonArrowLeft } from "../ButtonArrowLeft";
import firstArticle from "../../assets/articleFiles/article-1.png";
import secondArticle from "../../assets/articleFiles/article-2.png";
import thirdArticle from "../../assets/articleFiles/article-3.png";

export const ArticleList = () => {
  return (
    <ArticleSection>
      <TitleContainer>
        <Title>
          confira o <ColoredSpanTitle>nosso blog</ColoredSpanTitle>
        </Title>
        <ButtonReadAll>ler todos</ButtonReadAll>
      </TitleContainer>
      <List>
        <ButtonArrowLeft left="-14px" top="168px" />
        <li>
          <img src={firstArticle} alt="" />
          <ArticleInfoContainer>
            <DateSpan>03.05.21</DateSpan>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <ButtonReadMore>ler mais</ButtonReadMore>
          </ArticleInfoContainer>
        </li>
        <li>
          <img src={secondArticle} alt="" />
          <ArticleInfoContainer>
            <DateSpan>03.05.21</DateSpan>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <ButtonReadMore>ler mais</ButtonReadMore>
          </ArticleInfoContainer>
        </li>
        <li>
          <img src={thirdArticle} alt="" />
          <ArticleInfoContainer>
            <DateSpan>03.05.21</DateSpan>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <ButtonReadMore>ler mais</ButtonReadMore>
          </ArticleInfoContainer>
        </li>

        <ButtonArrowRight right="-14px" top="168px" />
      </List>
    </ArticleSection>
  );
};

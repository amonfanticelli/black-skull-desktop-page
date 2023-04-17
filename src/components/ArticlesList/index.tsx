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
  ArticleImg,
  SquareIcon,
} from "./style";
import { ButtonArrowRight } from "../ButtonArrowRight";
import { ButtonArrowLeft } from "../ButtonArrowLeft";
import firstArticle from "../../assets/articleFiles/article-1.png";
import secondArticle from "../../assets/articleFiles/article-2.png";
import thirdArticle from "../../assets/articleFiles/article-3.png";
import arrowSquare from "../../assets/articleFiles/ArrowSquareOut.png";

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
          <ArticleImg
            src={firstArticle}
            alt="homem agachado segurando com duas mãos uma barra com uma anilha de cada lado dentro de uma academia"
          />
          <ArticleInfoContainer>
            <DateSpan>03.05.21</DateSpan>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <ButtonReadMore>ler mais</ButtonReadMore>
            <SquareIcon
              src={arrowSquare}
              alt="imagem quadrada com uma seta apontando para diangonal direita"
            />
          </ArticleInfoContainer>
        </li>
        <li>
          <ArticleImg
            src={secondArticle}
            alt="mulher dentro de uma academia com olhar perdido no horizonte, está segurando uma corda"
          />
          <ArticleInfoContainer>
            <DateSpan>03.05.21</DateSpan>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <ButtonReadMore>ler mais</ButtonReadMore>
            <SquareIcon
              src={arrowSquare}
              alt="imagem quadrada com uma seta apontando para diangonal direita"
            />
          </ArticleInfoContainer>
        </li>
        <li>
          <ArticleImg
            src={thirdArticle}
            alt="homem se exercitando através de um exercício com corda dentro de um prédio"
          />
          <ArticleInfoContainer>
            <DateSpan>03.05.21</DateSpan>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <ButtonReadMore>ler mais</ButtonReadMore>
            <SquareIcon
              src={arrowSquare}
              alt="imagem quadrada com uma seta apontando para diangonal direita"
            />
          </ArticleInfoContainer>
        </li>

        <ButtonArrowRight right="-14px" top="168px" />
      </List>
    </ArticleSection>
  );
};

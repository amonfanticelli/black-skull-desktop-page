import {
  ObjectivesSection,
  AthleteImg,
  OrangeRectangle,
  RectangularTraceLarge,
  RectangularTraceSmall,
} from "./style";
import objective1 from "../../assets/objectiveFiles/atleta-1.png";
import objective2 from "../../assets/objectiveFiles/atleta-2.png";
import objective3 from "../../assets/objectiveFiles/atleta-3.png";
import objective4 from "../../assets/objectiveFiles/atleta-4.png";
import rectangleOrange from "../../assets/objectiveFiles/Rectangle-49.png";
import rectangleBig from "../../assets/objectiveFiles/RectangleBig.png";
import rectangleSmall from "../../assets/objectiveFiles/RectangleSmall.png";

export const ObjectivesList = () => {
  return (
    <ObjectivesSection id="objectives">
      <h3>objetivos</h3>
      <ul>
        <li>
          <AthleteImg
            src={objective1}
            alt="homem fazendo rosca direta em uma academia"
          />
          <OrangeRectangle
            src={rectangleOrange}
            alt="ícone de um quadrado com uma seta apontando para a diagonal direita"
          />
          <RectangularTraceLarge
            src={rectangleBig}
            alt="traço retangular laranja na diagonal"
          />
          <RectangularTraceSmall
            src={rectangleSmall}
            alt="traço retangular laranja na diagonal"
          />
          <span>ganho de massa </span>
        </li>
        <li>
          <AthleteImg
            src={objective2}
            alt="homem fazendo crucixo na polia dentro de uma academia"
          />
          <OrangeRectangle
            src={rectangleOrange}
            alt="ícone de um quadrado com uma seta apontando para a diagonal direita"
          />
          <RectangularTraceLarge
            src={rectangleBig}
            alt="traço retangular laranja na diagonal"
          />
          <RectangularTraceSmall
            src={rectangleSmall}
            alt="traço retangular laranja na diagonal"
          />
          <span> energia</span>
        </li>
        <li>
          <AthleteImg
            src={objective3}
            alt="mulher fazendo agachamento livre com barra em uma academia"
          />
          <OrangeRectangle
            src={rectangleOrange}
            alt="ícone de um quadrado com uma seta apontando para a diagonal direita"
          />
          <RectangularTraceLarge
            src={rectangleBig}
            alt="traço retangular laranja na diagonal"
          />
          <RectangularTraceSmall
            src={rectangleSmall}
            alt="traço retangular laranja na diagonal"
          />
          <span>recuperação muscular </span>
        </li>
        <li>
          <AthleteImg
            src={objective4}
            alt="mulher com roupa de academia com o olhar perdido no horizonte"
          />
          <OrangeRectangle
            src={rectangleOrange}
            alt="ícone de um quadrado com uma seta apontando para a diagonal direita"
          />
          <RectangularTraceLarge
            src={rectangleBig}
            alt="traço retangular laranja na diagonal"
          />
          <RectangularTraceSmall
            src={rectangleSmall}
            alt="traço retangular laranja na diagonal"
          />
          <span>emagrecimento </span>
        </li>
      </ul>
    </ObjectivesSection>
  );
};

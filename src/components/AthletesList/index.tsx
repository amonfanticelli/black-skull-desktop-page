import {
  AthletesSection,
  BackgroundImg,
  AthleteImg,
  AthletesContent,
  AthletesTitle,
  List,
  ButtonViewAll,
  AthleteContainer,
  ArrowRightImg,
} from "./style";
import { ButtonArrowLeft } from "../ButtonArrowLeft";
import { ButtonArrowRight } from "../ButtonArrowRight";
import athlete1 from "../../assets/athletes/Rectangle 38.jpg";
import athlete2 from "../../assets/athletes/Rectangle 39.jpg";
import athlete3 from "../../assets/athletes/Rectangle 40.jpg";
import arrowRight from "../../assets/cardFiles/ArrowRight.png";
import { useState } from "react";

export const AthletesList = () => {
  const [showAthleteName, setAthleteName] = useState(false);
  const [showAthleteName2, setAthleteName2] = useState(false);
  const [showAthleteName3, setAthleteName3] = useState(false);
  return (
    <AthletesSection id="athletes">
      <BackgroundImg />

      <AthletesContent>
        <ButtonArrowLeft top="54%" left="-7%" />
        <AthletesTitle>
          conheça a tropa <span>black skull</span>{" "}
        </AthletesTitle>

        <List>
          <li
            onMouseOver={() => setAthleteName(true)}
            onMouseLeave={() => setAthleteName(false)}
          >
            <AthleteImg
              src={athlete1}
              alt="atleta masculino da black skull em uma academia"
            />
            {showAthleteName && (
              <AthleteContainer>
                <span>Cedric Mcmillan</span>
                <div>
                  <p>Mais informação</p>
                  <ArrowRightImg src={arrowRight} alt="seta para direita" />
                </div>
              </AthleteContainer>
            )}
          </li>
          <li
            onMouseOver={() => setAthleteName2(true)}
            onMouseLeave={() => setAthleteName2(false)}
          >
            <AthleteImg
              src={athlete2}
              alt="atleta feminina da black skull fazendo pose segurando uma arma de fogo em um stand de tiro"
            />
            {showAthleteName2 && (
              <AthleteContainer>
                <span>Cedric Mcmillan</span>
                <div>
                  <p>Mais informação</p>
                  <ArrowRightImg src={arrowRight} alt="seta para direita" />
                </div>
              </AthleteContainer>
            )}
          </li>
          <li
            onMouseOver={() => setAthleteName3(true)}
            onMouseLeave={() => setAthleteName3(false)}
          >
            <AthleteImg
              src={athlete3}
              alt="atleta feminina da black skull em uma competição de fisiculturismo segurando um troféu overall da competição"
            />
            {showAthleteName3 && (
              <AthleteContainer>
                <span>Cedric Mcmillan</span>
                <div>
                  <p>Mais informação</p>
                  <ArrowRightImg src={arrowRight} alt="seta para direita" />
                </div>
              </AthleteContainer>
            )}
          </li>
        </List>
        <ButtonArrowRight top="54%" right="-7%" />
      </AthletesContent>

      <ButtonViewAll>ver todos</ButtonViewAll>
    </AthletesSection>
  );
};

import { AthletesSection, AthletesTitle, List, ButtonViewAll } from "./style";
import athlete1 from "../../assets/athletes/Rectangle 38.jpg";
import athlete2 from "../../assets/athletes/Rectangle 39.jpg";
import athlete3 from "../../assets/athletes/Rectangle 40.jpg";

export const AthletesList = () => {
  return (
    <AthletesSection>
      <AthletesTitle>
        conheça a tropa <span>black skull</span>{" "}
      </AthletesTitle>

      <List>
        <li>
          <img
            src={athlete1}
            alt="atleta masculino da black skull em uma academia"
          />
        </li>
        <li>
          <img
            src={athlete2}
            alt="atleta feminina da black skull fazendo pose segurando uma arma de fogo em um stand de tiro"
          />
        </li>
        <li>
          <img
            src={athlete3}
            alt="atleta feminina da black skull em uma competição de fisiculturismo segurando um troféu overall da competição"
          />
        </li>
      </List>

      <ButtonViewAll>ver todos</ButtonViewAll>
    </AthletesSection>
  );
};

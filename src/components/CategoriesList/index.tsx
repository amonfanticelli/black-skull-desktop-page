import { List } from "./style";
import { ButtonArrowRight } from "../ButtonArrowRight";
import { ButtonArrowLeft } from "../ButtonArrowLeft";
import categoriesImg from "../../assets/cardFiles/image 2.png";

export const CategoriesList = () => {
  return (
    <List>
      <ButtonArrowLeft top="75px" />
      <li>
        <figure>
          <img src={categoriesImg} alt="suplemento alimentar" />
        </figure>
        <h2>proteínas</h2>
      </li>
      <li>
        <figure>
          <img src={categoriesImg} alt="suplemento alimentar" />
        </figure>
        <h2>hipercalóricos</h2>
      </li>
      <li>
        <figure>
          <img src={categoriesImg} alt="suplemento alimentar" />
        </figure>
        <h2>creatina</h2>
      </li>
      <li>
        <figure>
          <img src={categoriesImg} alt="suplemento alimentar" />
        </figure>
        <h2>packs</h2>
      </li>
      <li>
        <figure>
          <img src={categoriesImg} alt="suplemento alimentar" />
        </figure>
        <h2>aminoácidos</h2>
      </li>
      <li>
        <figure>
          <img src={categoriesImg} alt="suplemento alimentar" />
        </figure>
        <h2>saúde</h2>
      </li>
      <ButtonArrowRight left="97.3%" top="75px" />
    </List>
  );
};

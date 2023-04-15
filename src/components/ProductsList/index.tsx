import { List, ListWrapper } from "./style";
import suplementImg from "../../assets/cardFiles/image 1.png";

export const ProductsList = () => {
  return (
    <ListWrapper>
      <List>
        <li>
          <img src={suplementImg} alt="" />
          <h4>Whey Zero (Com Lactase) Black Skull - 900G</h4>
          <span></span>
          <span></span>
        </li>
      </List>
    </ListWrapper>
  );
};

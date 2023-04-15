import { ButtonRightArrow } from "./style";
import arrowRight from "../../assets/cardFiles/ArrowRight.png";
import { IButtonArrowProps } from "../../interfaces";

export const ButtonArrowRight = (props: IButtonArrowProps) => {
  const { right, left, bottom, top, transform } = props;
  return (
    <ButtonRightArrow
      right={right}
      left={left}
      top={top}
      bottom={bottom}
      transform={transform}
    >
      <img src={arrowRight} alt="seta apontada para direita" />
    </ButtonRightArrow>
  );
};

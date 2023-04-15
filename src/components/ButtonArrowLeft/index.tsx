import { ButtonLeftArrow } from "./style";
import arrowLeft from "../../assets/cardFiles/ArrowLeft.png";
import { IButtonArrowProps } from "../../interfaces";

export const ButtonArrowLeft = (props: IButtonArrowProps) => {
  const { right, left, bottom, top, transform } = props;
  return (
    <ButtonLeftArrow
      right={right}
      left={left}
      top={top}
      bottom={bottom}
      transform={transform}
    >
      <img src={arrowLeft} alt="seta apontada para direita" />
    </ButtonLeftArrow>
  );
};

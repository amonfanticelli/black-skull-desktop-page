import { ButtonOrange, ButtonGrey, ButtonsContainer } from "./style";
import { IButtonsChangeImgProps } from "../../interfaces";

export const ButtonsChangeImg = (props: IButtonsChangeImgProps) => {
  const { top, left, bottom, right, transform, margin, position } = props;
  return (
    <ButtonsContainer
      right={right}
      left={left}
      top={top}
      bottom={bottom}
      transform={transform}
      margin={margin}
      position={position}
    >
      <ButtonOrange></ButtonOrange>
      <ButtonGrey></ButtonGrey>
      <ButtonGrey></ButtonGrey>
    </ButtonsContainer>
  );
};

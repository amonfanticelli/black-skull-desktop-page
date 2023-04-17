import styled from "styled-components";
import { IButtonArrowProps } from "../../interfaces";

export const ButtonRightArrow = styled.button<IButtonArrowProps>`
  width: 32px;
  height: 32px;
  background: var(--colors-grey-2);
  border-radius: 4px;
  border: transparent;
  position: absolute;
  z-index: 99;
  left: ${({ left }) => left || ""};
  right: ${({ right }) => right || ""};
  top: ${({ top }) => top || ""};
  bottom: ${({ bottom }) => bottom || ""};
  transform: ${({ transform }) => transform || ""};
  &:hover {
    background: var(--colors-orange-2);
  }

  img {
  }
`;

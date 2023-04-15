import styled from "styled-components";
import { IButtonArrowProps } from "../../interfaces";

export const ButtonLeftArrow = styled.button<IButtonArrowProps>`
  width: 32px;
  height: 32px;
  background: var(--colors-grey-2);
  border-radius: 4px;
  border: transparent;
  position: absolute;
  z-index: 999;
  left: ${({ left }) => left || "0"};
  right: ${({ right }) => right || "0"};
  top: ${({ top }) => top || "0"};
  bottom: ${({ bottom }) => bottom || "0"};
  transform: ${({ transform }) => transform || "0"};
  &:hover {
    background: var(--colors-orange-2);
  }

  img {
  }
`;

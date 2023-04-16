import styled from "styled-components";
import { IButtonsChangeImgProps } from "../../interfaces";

export const ButtonsContainer = styled.div<IButtonsChangeImgProps>`
  display: flex;
  max-width: 140px;
  gap: 10px;
  height: 10px;
  left: ${({ left }) => left || ""};
  right: ${({ right }) => right || ""};
  top: ${({ top }) => top || ""};
  bottom: ${({ bottom }) => bottom || ""};
  position: ${({ position }) => position || ""};
  transform: ${({ transform }) => transform || ""};
  margin: ${({ margin }) => margin || ""};
`;

export const ButtonOrange = styled.button`
  background-color: var(--colors-orange-1);
  width: 40px;
  height: 6px;
  border: none;
  transform: rotate(180deg);
  transform-origin: top;
  position: relative;
  top: 2px;
`;
export const ButtonGrey = styled.button`
  background-color: var(--colors-grey-2);
  width: 40px;
  height: 2px;
  border: none;
`;

import styled from "styled-components";
import { IButtonProps } from "../../interfaces";

export const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 56px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  position: relative;
  width: 100%;
  max-width: 1210px;
  margin-bottom: 73px;

  li {
    display: flex;
    flex-direction: column;
    width: 277px;
    background: var(--colors-white);
    border: 1px solid var(--colors-background);
    border-radius: 4px;
    position: relative;

    &:hover {
      background-color: var(--colors-background);
      transition: 0.3s;
      .flavor-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .clothing-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      button {
        visibility: visible;
      }
    }
  }
`;

export const ProductImg = styled.img`
  display: flex;
  align-self: center;
  width: 165px;
  height: 165px;
  margin-top: 32px;
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21.25px;
  position: absolute;
  right: 0;
  margin-top: 22.24px;
  margin-right: 16px;
`;

export const StarIcon = styled.img`
  width: 19.5px;
  height: 18.76px;
  &:hover {
    filter: brightness(0%) saturate(0%);
  }
`;
export const CartIcon = styled.img`
  width: 19.5px;
  height: 18.76px;
`;

export const CardInfoContainer = styled.div`
  padding-left: 24px;
  padding-bottom: 22px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CardTitle = styled.h4`
  font-family: var(--font-barlow);
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: var(--colors-black);
  margin-top: 24px;
  margin-bottom: 16px;
`;

export const PriceSpan = styled.span`
  font-family: var(--font-barlow);
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  text-transform: uppercase;
  color: var(--colors-orange-1);
  margin-bottom: 4px;
`;
export const InstallmentPriceSpan = styled.span`
  font-family: var(--font-barlow);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: var(--colors-dark-3);
`;

export const BuyButton = styled.button`
  position: absolute;
  width: 100%;
  bottom: -49px;
  background-color: var(--colors-orange-1);
  color: var(--colors-black);
  border-radius: 4px;
  border: none;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-family: var(--font-barlow);
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  padding: 14px;
  visibility: hidden; // Hide the button by default
  transition: visibility 0.3s ease-in; // Add a transition effect
  &:hover {
    background-color: var(--colors-orange-2);
  }
`;

export const FlavorContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60%;
  display: none;
  background-color: rgba(255, 255, 255, 0.9);
`;

export const FlavorTitle = styled.h4`
  font-family: var(--font-barlow);
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  color: var(--colors-black);
  margin-bottom: 15px;
`;

export const FlavorButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  justify-content: center;
  width: 90%;
`;

export const FlavorButtons = styled.button<IButtonProps>`
  background-color: ${(props) =>
    props.active ? "var(--colors-black)" : "var(--colors-white)"};
  color: ${(props) =>
    props.active ? "var(--colors-white)" : "var(--colors-grey-1)"};
  border: ${(props) =>
    props.active
      ? "1px solid var(--colors-black)"
      : "1px solid var(--colors-grey-2)"};
  border-radius: 4px;
  width: 85px;
  font-family: var(--font-barlow);
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 20px;
  letter-spacing: 0.08em;
  cursor: pointer;
  text-transform: uppercase;
  padding: 6px;
  &:hover {
    color: var(--colors-dark-1);
    border: 1px solid var(--colors-dark-1);
  }
`;

export const ClothingContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60%;
  display: none;
  background-color: rgba(255, 255, 255, 0.9);
`;

export const ClothingTitle = styled.h4`
  font-family: var(--font-barlow);
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  color: var(--colors-black);
  margin-bottom: 15px;
`;
export const ClothingButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 75%;
  margin-bottom: 10px;
`;
export const ClothingButton = styled.button<IButtonProps>`
  background-color: ${(props) =>
    props.active ? "var(--colors-black)" : "var(--colors-white)"};
  color: ${(props) =>
    props.active ? "var(--colors-white)" : "var(--colors-grey-1)"};
  border: ${(props) =>
    props.active
      ? "1px solid var(--colors-black)"
      : "1px solid var(--colors-grey-2)"};
  border-radius: 4px;
  width: 50px;
  font-family: var(--font-barlow);
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 20px;
  letter-spacing: 0.08em;
  cursor: pointer;
  text-transform: uppercase;
  padding: 6px;
  &:hover {
    color: var(--colors-dark-1);
    border: 1px solid var(--colors-dark-1);
  }
`;

export const ColoredButtonContainer = styled.div`
  display: flex;
  width: 75%;
  gap: 10px;
  justify-content: space-between;
`;

export const ColoredButtonRed = styled.button<IButtonProps>`
  background-color: red;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  outline: ${(props) =>
    props.active
      ? "1px solid var(--colors-black)"
      : "1px solid var(--colors-white)"};
  margin: 2px 2px 2px 2px;
  border: 3px solid var(--colors-white);
`;
export const ColoredButtonBlue = styled.button<IButtonProps>`
  background-color: blue;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  outline: ${(props) =>
    props.active
      ? "1px solid var(--colors-black)"
      : "1px solid var(--colors-white)"};
  margin: 2px 2px 2px 2px;
  border: 3px solid var(--colors-white);
`;
export const ColoredButtonGreen = styled.button<IButtonProps>`
  background-color: green;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  outline: ${(props) =>
    props.active
      ? "1px solid var(--colors-black)"
      : "1px solid var(--colors-white)"};
  margin: 2px 2px 2px 2px;
  border: 3px solid var(--colors-white);
`;
export const ColoredButtonYellow = styled.button<IButtonProps>`
  background-color: yellow;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  outline: ${(props) =>
    props.active
      ? "1px solid var(--colors-black)"
      : "1px solid var(--colors-white)"};
  margin: 2px 2px 2px 2px;
  border: 3px solid var(--colors-white);
`;

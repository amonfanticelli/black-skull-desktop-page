import {
  List,
  ListWrapper,
  CardInfoContainer,
  CardTitle,
  PriceSpan,
  InstallmentPriceSpan,
  IconsContainer,
  StarIcon,
  CartIcon,
  ProductImg,
  BuyButton,
  FlavorContainer,
  FlavorTitle,
  FlavorButtons,
  FlavorButtonsContainer,
  ClothingContainer,
  ClothingTitle,
  ClothingButtonsContainer,
  ClothingButton,
  ColoredButtonContainer,
  ColoredButtonRed,
  ColoredButtonBlue,
  ColoredButtonGreen,
  ColoredButtonYellow,
} from "./style";
import suplementImg from "../../assets/cardFiles/image 1.png";
import starImg from "../../assets/cardFiles/Vector.png";
import cartImg from "../../assets/cardFiles/ShoppingCart.png";
import { ButtonArrowLeft } from "../ButtonArrowLeft";
import { ButtonArrowRight } from "../ButtonArrowRight";
import { ButtonsChangeImg } from "../ButtonsChangeImg";
import { useState } from "react";

export const ProductsList = () => {
  const [showFlavor, setShowFlavor] = useState(false);
  const [showClothing, setShowClothing] = useState(false);
  const [selectedButtonColor, setSelectedButtonColor] = useState("none");
  const [selectedButtons, setSelectedButtons] = useState<string[]>([]);

  const handleButtonClickColor = (buttonName: string) => {
    setSelectedButtonColor(
      buttonName === selectedButtonColor ? "none" : buttonName
    );
  };
  const handleButtonClick = (buttonName: string) => {
    setSelectedButtons((prevSelectedButtons) => {
      if (prevSelectedButtons.includes(buttonName)) {
        // If the clicked button was already selected, remove it from the array
        return prevSelectedButtons.filter((name) => name !== buttonName);
      } else {
        // Otherwise, add the clicked button to the array
        return [...prevSelectedButtons, buttonName];
      }
    });
  };
  return (
    <ListWrapper>
      <List>
        <ButtonArrowLeft left="-14px" top="160px" />
        <li
          onMouseOver={() => setShowFlavor(true)}
          onMouseLeave={() => setShowFlavor(false)}
        >
          <ProductImg src={suplementImg} alt="suplemento alimentar" />
          <IconsContainer>
            <StarIcon src={starImg} alt="ícone de uma estrela" />
            <CartIcon src={cartImg} alt="ícone de um carrinho" />
          </IconsContainer>
          <CardInfoContainer>
            <CardTitle>Whey Zero (Com Lactase) Black Skull - 900G</CardTitle>
            <PriceSpan>R$ 349,90</PriceSpan>
            <InstallmentPriceSpan>ou 12x de R$ 29,16</InstallmentPriceSpan>
          </CardInfoContainer>
          <BuyButton>comprar</BuyButton>
          {showFlavor && (
            <FlavorContainer className="flavor-container">
              <FlavorTitle>Sabor</FlavorTitle>
              <FlavorButtonsContainer>
                <FlavorButtons
                  active={selectedButtons.includes("sabor1")}
                  // active={selectedButton === "sabor1"}
                  onClick={() => handleButtonClick("sabor1")}
                >
                  toffee
                </FlavorButtons>
                <FlavorButtons
                  active={selectedButtons.includes("sabor2")}
                  onClick={() => handleButtonClick("sabor2")}
                >
                  chocolate
                </FlavorButtons>
                <FlavorButtons
                  active={selectedButtons.includes("sabor3")}
                  onClick={() => handleButtonClick("sabor3")}
                >
                  morango
                </FlavorButtons>
                <FlavorButtons
                  active={selectedButtons.includes("sabor4")}
                  onClick={() => handleButtonClick("sabor4")}
                >
                  baunilha
                </FlavorButtons>
              </FlavorButtonsContainer>
            </FlavorContainer>
          )}
        </li>
        <li
          onMouseOver={() => setShowFlavor(true)}
          onMouseLeave={() => setShowFlavor(false)}
        >
          <ProductImg src={suplementImg} alt="suplemento alimentar" />
          <IconsContainer>
            <StarIcon src={starImg} alt="ícone de uma estrela" />
            <CartIcon src={cartImg} alt="ícone de um carrinho" />
          </IconsContainer>
          <CardInfoContainer>
            <CardTitle>Whey Zero (Com Lactase) Black Skull - 900G</CardTitle>
            <PriceSpan>R$ 349,90</PriceSpan>
            <InstallmentPriceSpan>ou 12x de R$ 29,16</InstallmentPriceSpan>
          </CardInfoContainer>
          <BuyButton>comprar</BuyButton>
          {showFlavor && (
            <FlavorContainer className="flavor-container">
              <FlavorTitle>Sabor</FlavorTitle>
              <FlavorButtonsContainer>
                <FlavorButtons
                  active={selectedButtons.includes("sabor5")}
                  // active={selectedButton === "sabor1"}
                  onClick={() => handleButtonClick("sabor5")}
                >
                  toffee
                </FlavorButtons>
                <FlavorButtons
                  active={selectedButtons.includes("sabor6")}
                  onClick={() => handleButtonClick("sabor6")}
                >
                  chocolate
                </FlavorButtons>
                <FlavorButtons
                  active={selectedButtons.includes("sabor7")}
                  onClick={() => handleButtonClick("sabor7")}
                >
                  morango
                </FlavorButtons>
                <FlavorButtons
                  active={selectedButtons.includes("sabor8")}
                  onClick={() => handleButtonClick("sabor8")}
                >
                  baunilha
                </FlavorButtons>
              </FlavorButtonsContainer>
            </FlavorContainer>
          )}
        </li>
        <li
          onMouseOver={() => setShowClothing(true)}
          onMouseLeave={() => setShowClothing(false)}
        >
          <ProductImg src={suplementImg} alt="suplemento alimentar" />
          <IconsContainer>
            <StarIcon src={starImg} alt="ícone de uma estrela" />
            <CartIcon src={cartImg} alt="ícone de um carrinho" />
          </IconsContainer>
          <CardInfoContainer>
            <CardTitle>Whey Zero (Com Lactase) Black Skull - 900G</CardTitle>
            <PriceSpan>R$ 349,90</PriceSpan>
            <InstallmentPriceSpan>ou 12x de R$ 29,16</InstallmentPriceSpan>
          </CardInfoContainer>
          <BuyButton>comprar</BuyButton>
          {showClothing && (
            <ClothingContainer className="clothing-container">
              <ClothingTitle>Tamanho</ClothingTitle>
              <ClothingButtonsContainer>
                <ClothingButton
                  active={selectedButtons.includes("size1")}
                  // active={selectedButton === "sabor1"}
                  onClick={() => handleButtonClick("size1")}
                >
                  p
                </ClothingButton>
                <ClothingButton
                  active={selectedButtons.includes("size2")}
                  onClick={() => handleButtonClick("size2")}
                >
                  m
                </ClothingButton>
                <ClothingButton
                  active={selectedButtons.includes("size3")}
                  onClick={() => handleButtonClick("size3")}
                >
                  g
                </ClothingButton>
                <ClothingButton
                  active={selectedButtons.includes("size4")}
                  onClick={() => handleButtonClick("size4")}
                >
                  gg
                </ClothingButton>
                <ClothingButton
                  active={selectedButtons.includes("size5")}
                  onClick={() => handleButtonClick("size5")}
                >
                  exgg2
                </ClothingButton>
                <ClothingButton
                  active={selectedButtons.includes("size6")}
                  onClick={() => handleButtonClick("size6")}
                >
                  exgg2
                </ClothingButton>
              </ClothingButtonsContainer>
              <ColoredButtonContainer>
                <ColoredButtonRed
                  active={selectedButtonColor === "red"}
                  onClick={() => handleButtonClickColor("red")}
                />
                <ColoredButtonBlue
                  active={selectedButtonColor === "blue"}
                  onClick={() => handleButtonClickColor("blue")}
                />
                <ColoredButtonGreen
                  active={selectedButtonColor === "green"}
                  onClick={() => handleButtonClickColor("green")}
                />
                <ColoredButtonYellow
                  active={selectedButtonColor === "yellow"}
                  onClick={() => handleButtonClickColor("yellow")}
                />
              </ColoredButtonContainer>
            </ClothingContainer>
          )}
        </li>
        <li>
          <ProductImg src={suplementImg} alt="suplemento alimentar" />
          <IconsContainer>
            <StarIcon src={starImg} alt="ícone de uma estrela" />
            <CartIcon src={cartImg} alt="ícone de um carrinho" />
          </IconsContainer>
          <CardInfoContainer>
            <CardTitle>Whey Zero (Com Lactase) Black Skull - 900G</CardTitle>
            <PriceSpan>R$ 349,90</PriceSpan>
            <InstallmentPriceSpan>ou 12x de R$ 29,16</InstallmentPriceSpan>
          </CardInfoContainer>
          <BuyButton>comprar</BuyButton>
        </li>
        <ButtonArrowRight right="-14px" top="160px" />
      </List>
      <ButtonsChangeImg margin="0 0 64px 0" />
    </ListWrapper>
  );
};

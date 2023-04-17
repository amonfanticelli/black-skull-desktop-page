import {
  BenefitSection,
  MoneyBackContainer,
  FreeShippingContainer,
  InfoContainer,
} from "./style";
import box from "../../assets/benefitsFiles/Package.png";
import cash from "../../assets/benefitsFiles/CurrencyCircleDollar.png";

export const BenefitsSection = () => {
  return (
    <BenefitSection>
      <MoneyBackContainer>
        <InfoContainer>
          <h3>
            Garanta o <span> frete Grátis</span>
          </h3>
          <button>consulte</button>
        </InfoContainer>
        <img src={box} alt="ícone de uma caixa" />
      </MoneyBackContainer>
      <FreeShippingContainer>
        <InfoContainer>
          <h3>
            Seu dinheiro <span> de volta</span>
          </h3>
          <button>entenda</button>
        </InfoContainer>
        <img src={cash} alt="ícone de um cifrão dentro de um círculo" />
      </FreeShippingContainer>
    </BenefitSection>
  );
};

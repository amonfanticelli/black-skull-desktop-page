import { Header, ContactSpan, FreeShippingBanner } from "./style";
import TruckImg from "../../assets/headerFiles/Truck.png";

export const HeaderTalkToUs = () => {
  return (
    <Header>
      <ContactSpan>fale conosco</ContactSpan>
      <FreeShippingBanner>
        <img src={TruckImg} alt="ícone de um caminhão amarelo" />
        <span>Frete grátis a partir de R$ 199,90 para todo Brasil</span>
      </FreeShippingBanner>
      <ContactSpan>blog.blackskull</ContactSpan>
    </Header>
  );
};

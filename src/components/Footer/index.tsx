import {
  FooterBlackSkull,
  ReservedRightsContainer,
  FollowUsImg,
  ReservedRightsParagraph,
  Logos,
  LogoWicomm,
  LogoVTEX,
  PolicyContainer,
  SubscribeContainer,
  PaymentAndSecurityContainer,
  PolicyInfo,
} from "./style";
import followUs from "../../assets/footerFiles/Group-134.png";
import wicomm from "../../assets/footerFiles/Logo_Wicomm_WhiteBlue-1.png";
import vtex from "../../assets/footerFiles/VTEX_pink_RGB.png";
import payment from "../../assets/footerFiles/Group-163.png";
import security from "../../assets/footerFiles/Group-165.png";

export const Footer = () => {
  return (
    <>
      <FooterBlackSkull id="subscribe">
        <FollowUsImg
          src={followUs}
          alt="Logo da black skull com os icones de todas suas redes sociais disponíveis"
        />
        <PolicyContainer>
          <PolicyInfo>
            <div>
              <h6> Blackskull USA</h6>
              <span>Sobre Nós</span>
              <span>Black Skull é confiável?</span>
              <span>Atletas Black Skull</span>
              <span>Nosso Blog</span>
              <span>Seja um Revendedor</span>
              <span>Entre em Contato</span>
            </div>
            <div>
              <h6> Institucional</h6>
              <span>Trocas e Devoluções</span>
              <span>Política de Entregas</span>
              <span>Política de Privacidade</span>
              <span>Política de Cancelamentos</span>
            </div>
            <div>
              <h6> Afiliados</h6>
              <span>Programa de Afiliados</span>
              <span>Desconto para Militares</span>
              <span>Benefícios para Profissionais da Saúde</span>
              <span>Benefícios para Profs. de Educação Física</span>
              <span>Assinaturas</span>
            </div>
          </PolicyInfo>

          <PaymentAndSecurityContainer>
            <img src={payment} alt="" />
            <img src={security} alt="" />
          </PaymentAndSecurityContainer>
        </PolicyContainer>
        <SubscribeContainer>
          <h6>
            fique por <span> dentro</span>
          </h6>
          <p>
            Inscreva-se e seja o primeiro a saber sobre as novidades, promoções
            e muito mais!
          </p>

          <form>
            <input placeholder="Digite o seu nome" type="text" />
            <input placeholder="Digite o seu e-mail" type="text" />
            <button>enviar</button>
          </form>
        </SubscribeContainer>
      </FooterBlackSkull>
      <ReservedRightsContainer>
        <ReservedRightsParagraph>
          Black Skull 2022. Todos os direitos reservados.
        </ReservedRightsParagraph>
        <Logos>
          <LogoWicomm src={wicomm} alt="logo da empresa Wicomm" />
          <LogoVTEX src={vtex} alt="logo da empresa VTEX" />
        </Logos>
      </ReservedRightsContainer>
    </>
  );
};

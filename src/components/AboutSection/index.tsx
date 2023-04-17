import { AboutSecionBlackSkull } from "./style";
import logoBk from "../../assets/GroupBK.png";

export const AboutSecion = () => {
  return (
    <AboutSecionBlackSkull>
      <img
        src={logoBk}
        alt="logo da black skull, formato de um crânio colorido na cor preta"
      />
      <h5>sobre a black skull</h5>
      <p>
        A Black Skull USA é uma marca de suplementos alimentares com foco em
        atletas de alta performance. Nossa sede no Brasil está alocada em Embu
        das Artes – SP, com mais de 12.000 m² de área construída, com alta
        capacidade produtiva. Nossos produtos trabalham com as melhores
        matérias-primas do mercado e tem como principal característica maior
        concentração de insumos, que proporcionam níveis de pureza mais altos e
        por consequência otimizam a qualidade de nossos produtos.
      </p>
    </AboutSecionBlackSkull>
  );
};

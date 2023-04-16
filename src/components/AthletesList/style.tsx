import styled from "styled-components";
import athletesBackground from "../../assets/athletes/Group 699.png";

export const AthletesSection = styled.section`
  width: 100%;
  background-image: url(${athletesBackground});
  background-repeat: no-repeat;
  background-size: 100%;
  background-size: cover;
  background-position: center;
  mix-blend-mode: hard-light;
  opacity: 0.25;
  height: 461px;
  position: relative;
`;

export const AthletesTitle = styled.h3`
  font-family: var(--font-roboto-condensed);
  font-style: italic;
  font-weight: 700;
  font-size: 40px;
  line-height: 47px;
  text-transform: uppercase;
  color: var(--colors-white);
  span {
    font-family: var(--font-roboto-condensed);
    font-style: italic;
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;
    text-transform: uppercase;
    color: var(--colors-orange-1);
  }
`;

export const List = styled.ul`
  display: flex;

  li {
    width: 277px;
    height: 294px;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const ButtonViewAll = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 24px;
  gap: 10px;
  background: var(--colors-orange-1);
  border-radius: 4px;
  position: absolute;
  font-family: var(--font-barlow);
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--colors-black);
`;

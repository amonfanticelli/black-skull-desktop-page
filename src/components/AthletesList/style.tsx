import styled from "styled-components";
import athletesBackground from "../../assets/athletes/Group-699.jpg";

export const AthletesSection = styled.section`
  width: 100%;
  height: 461px;
  position: relative;
`;

export const BackgroundImg = styled.div`
  background-image: url(${athletesBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 461px;
`;

export const AthletesContent = styled.div`
  position: absolute;
  max-width: 873px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const AthletesTitle = styled.h3`
  font-family: var(--font-roboto-condensed);
  font-style: italic;
  font-weight: 700;
  font-size: 40px;
  line-height: 47px;
  text-transform: uppercase;
  color: var(--colors-white);
  margin-bottom: 24px;

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
  gap: 20px;
  width: 100%;

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
  border: none;
  left: 50%;
  transform: translateX(-50%);
  bottom: -5%;
  &:hover {
    background-color: var(--colors-orange-2);
  }
`;

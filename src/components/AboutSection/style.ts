import styled from "styled-components";

export const AboutSecionBlackSkull = styled.section`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 64px;
  h5 {
    position: absolute;
    top: 96px;
    font-family: var(--font-roboto-condensed);
    font-style: italic;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
    text-transform: uppercase;

    color: var(--colors-dark-1);
  }
  p {
    font-family: var(--font-barlow);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: var(--colors-dark-3);
    width: 643px;
  }
`;

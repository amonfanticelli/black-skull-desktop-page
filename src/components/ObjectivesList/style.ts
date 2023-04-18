import styled, { keyframes } from "styled-components";

const zoom = keyframes`  
  0% {
      transform: scale(1);
    }

   
    100% {
      transform: scale(1.1);
    }
   
  
`;

export const AthleteImg = styled.img`
  max-height: 100%;
`;

export const OrangeRectangle = styled.img`
  position: absolute;
  bottom: 0;
`;
export const RectangularTraceLarge = styled.img`
  position: absolute;
  bottom: 0;
  left: 170px;
  transition: margin-left 0.2s ease-in-out;
`;
export const RectangularTraceSmall = styled.img`
  position: absolute;
  bottom: 0;
  left: 160px;
  transition: margin-left 0.2s ease-in-out;
`;

export const ObjectivesSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 56px;
  h3 {
    margin-top: 64px;
    font-family: var(--font-roboto-condensed);
    font-style: italic;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;

    text-align: center;
    text-transform: uppercase;

    color: var(--colors-dark-1);
    margin-bottom: 24px;
  }
  ul {
    display: flex;
    gap: 20px;

    li {
      display: flex;
      flex-direction: column;

      transform-origin: center center;
      overflow: hidden;
      position: relative;

      &:hover ${RectangularTraceLarge} {
        margin-left: 30px;
      }
      &:hover ${RectangularTraceSmall} {
        margin-left: 60px;
      }
      &:first-child ${RectangularTraceLarge} {
        transition: none;
      }
      &:first-child ${RectangularTraceSmall} {
        transition: none;
      }
      &:hover {
      }
      &:hover ${OrangeRectangle} {
        filter: brightness(115%);
      }
      &:hover ${AthleteImg} {
        filter: hue-rotate(360deg) grayscale(0%);
        animation: ${zoom} 0.2s ease-in forwards;
      }

      span {
        position: absolute;
        z-index: 1;
        left: 16px;
        bottom: 12px;
        font-family: var(--font-barlow);
        font-style: italic;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        text-transform: uppercase;

        color: var(--colors-black);
      }
    }
  }
`;

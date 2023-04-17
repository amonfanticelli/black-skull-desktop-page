import styled, { keyframes } from "styled-components";

const zoom = keyframes`  
  0% {
      transform: scale(1);
    }

   
    100% {
      transform: scale(1.1);
    }
   
  
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
      filter: grayscale(100%);
      transform-origin: center center;
      overflow: hidden;

      &:hover {
        filter: grayscale(0%);
      }
      &:hover img {
        animation: ${zoom} 0.2s ease-in forwards;
      }

      img {
        object-fit: cover;
      }
    }
  }
`;

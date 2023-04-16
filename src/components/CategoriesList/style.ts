import styled, { keyframes } from "styled-components";

const zoom = keyframes`  
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.5);
  }
`;

export const ListWrapper = styled.div`
  margin-top: 56px;
  margin-bottom: 64px;
  padding: 0px 56px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  position: relative;
  width: 100%;
  max-width: 1210px;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;

    figure {
      position: relative;
      display: flex;
      padding: 35px 35px;
      border: transparent;
      background: var(--colors-background);
      border-radius: 100px;
      &:before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        border-radius: 50%;
        background-color: orange;
        transition: transform 0.3s ease-out, width 0.3s ease-out,
          height 0.3s ease-out;
      }
      img {
        background: transparent;
      }
    }
    h2 {
      font-family: var(--font-barlow);
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      text-transform: uppercase;
      color: var(--colors-dark-1);
      margin-top: 16px;
    }
    &:hover figure:before {
      transform: translate(-50%, -50%) scale(2);
      width: 50%;
      height: 50%;
    }

    &:hover img {
      animation: ${zoom} 0.3s forwards;
    }
  }
`;

import styled, { keyframes } from "styled-components";
import { ButtonArrowLeft } from "../ButtonArrowLeft";

const paint = keyframes`  
  from {
    background-color: #f1f1f1;
  }
  to {
    background-color: orange;
  }
`;
const zoom = keyframes`  
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.2);
  }
`;
const paint2 = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  border: 1px solid red;
  margin-top: 56px;
  position: relative;
  max-width: 1200px;
  width: 100%;
  border: 1px solid red;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;

    figure {
      position: relative;
      display: flex;
      padding: 35px 35px;
      border: transparent;
      background: #f1f1f1;
      border-radius: 100px;
      &:before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        /* width: 70px;
        height: 70px; */
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
      font-family: "Barlow";
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 16px;
      /* identical to box height, or 133% */

      text-align: center;
      text-transform: uppercase;

      /* Dark 1 */

      color: #1c1c1e;
      margin-top: 16px;
    }
    &:hover figure:before {
      transform: translate(-50%, -50%) scale(2);
      width: 90px;
      height: 90px;
    }

    &:hover img {
      animation: ${zoom} 0.5s forwards;
    }
  }
`;

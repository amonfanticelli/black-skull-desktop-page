import styled from "styled-components";

export const ButtonAndSpanContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  bottom: 178px;
  right: 40px;
  z-index: 999;

  button {
    width: 56px;
    height: 56px;
    background: var(--colors-dark-3);
    border: 1px solid var(--colors-grey-1);
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 10px;
    &:hover {
      background-color: var(--colors-orange-1);
      border: 1px solid var(--colors-orange-1);
      img {
        filter: brightness(0%) saturate(0%);
      }
    }
  }
`;

export const SpanContainer = styled.div`
  background-color: var(--colors-orange-1);
  padding: 10px 10px;
  border: 1px solid var(--colors-dark-3);
  border-radius: 6px 6px 0px 6px;
  span {
    font-family: var(--font-barlow);
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: var(--colors-black);
  }
  &:hover {
    background-color: var(--colors-orange-2);
  }
`;

export const ChatDotsIcon = styled.img`
  margin-right: 7.5px;
`;

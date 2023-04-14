import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 32px;
  background-color: var(--colors-dark-1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 56px;
`;

export const ContactSpan = styled.span`
  font-family: var(--font-barlow);
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  color: var(--colors-orange-1);
`;

export const FreeShippingBanner = styled.div`
  display: flex;
  align-items: center;
  span {
    font-family: var(--font-barlow);
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    text-transform: uppercase;
    color: var(--colors-grey-2);
    margin-left: 10px;
  }
`;

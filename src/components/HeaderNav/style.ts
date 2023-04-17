import styled, { keyframes } from "styled-components";
import magnifyingGlass from "../../assets/headerFiles/MagnifyingGlass.png";
import { InputProps } from "../../interfaces";

export const Header = styled.header`
  width: 100%;
  height: 72px;
  background-color: var(--colors-black);
  padding: 0 56px;
  display: flex;
  align-items: center;

  border-bottom: 1px solid var(--colors-dark-3);
  position: fixed;
  z-index: 99999;
  top: 32px;
  @media screen and (max-width: 1279px) {
    height: 90px;
  }
`;

export const LogoAndNavContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  @media screen and (max-width: 1279px) {
    display: flex;
    flex-direction: column;
  }
`;

export const LogoBlackSkullImg = styled.img`
  height: 32px;
  width: 166px;
  margin-right: 32px;
`;

const borderGrow = keyframes`  
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

export const NavigationLinks = styled.nav`
  height: 72px;
  @media screen and (max-width: 1279px) {
    max-height: 36px;
  }

  ul {
    @media screen and (max-width: 1279px) {
    }

    display: flex;

    li {
      width: 103px;
      height: 72px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      @media screen and (max-width: 1279px) {
        max-height: 36px;
      }

      a {
        font-family: var(--font-barlow);
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        color: var(--colors-grey-1);
        text-transform: uppercase;
        text-decoration: none;
      }
      &:hover {
        background-color: var(--colors-dark-3);
        &:before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background-color: var(--colors-orange-1);
          animation: ${borderGrow} 0.3s forwards;
        }
        a {
          color: var(--colors-white);
          transition: 0.3s;
        }
      }
    }
  }
`;
export const SearchAndIconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 350px;
  @media screen and (max-width: 1279px) {
    max-height: 36px;
    padding-left: 13px;
    max-width: 700px;
    width: 620px;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 216px;
  height: 40px;
  @media screen and (max-width: 1279px) {
    max-height: 36px;
  }
`;

export const SearchInput = styled.input<InputProps>`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${magnifyingGlass});
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-color: var(--colors-dark-2);
  border: 1px solid var(--colors-dark-3);
  border-radius: 4px;
  padding-left: 16px;
  font-family: var(--font-barlow);
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: var(--colors-grey-1);
  cursor: pointer;
  &:hover {
    background-color: var(--colors-dark-3);
  }
  &.is-searching {
    background-image: none;
  }
`;

export const CancelButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  border: none;
  background: transparent;
  color: var(--colors-white);
  cursor: pointer;
  svg {
    font-size: 20px;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 21px;
  img {
    &:hover {
      filter: brightness(160%);
    }
  }
`;

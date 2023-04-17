import styled, { keyframes } from "styled-components";

const rotateCash = keyframes`
  from {
    transform: rotate(0deg) translateY(0);
  }
  to {
    transform: rotate(-160deg) translateY(-10px);
  }
`;

const rotateCashBack = keyframes`
  from {
    transform: rotate(-160deg) translateY(-10px);
  }
  to {
    transform: rotate(0deg) translateY(0);
  }
`;

export const BenefitSection = styled.section`
  display: flex;
  gap: 20px;
  width: 100%;
  margin-top: 64px;
  justify-content: center;
  margin-bottom: 64px;
`;

export const MoneyBackContainer = styled.div`
  display: flex;
  padding: 0 40px;
  padding-top: 40px;
  padding-bottom: 34px;
  width: 475px;
  height: 280px;
  background: linear-gradient(
    213.8deg,
    var(--colors-grey-1) -17.86%,
    var(--colors-black) 73%
  );
  img {
    width: 135px;
    height: 135px;
    margin-left: 30.5px;
    align-self: flex-end;
    margin-bottom: 20px;
    transform: rotate(0deg) translateY(0);
    transition: transform 0.3s, margin-bottom 0.3s;
  }
  &:hover img {
    transform: rotate(70deg) translateY(0);
    transition: transform 0.3s margin-bottom ease;
    margin-bottom: 50px;
  }
`;
export const FreeShippingContainer = styled.div`
  display: flex;
  padding: 0 40px;
  padding-top: 40px;
  padding-bottom: 34px;
  width: 475px;
  height: 280px;
  background: linear-gradient(
    213.8deg,
    var(--colors-grey-1) -17.86%,
    var(--colors-black) 73%
  );
  img {
    width: 135px;
    height: 135px;
    margin-left: 30.5px;
    align-self: flex-end;
    transform: rotate(0deg) translateY(-10px);
    transition: transform 0.2s, margin-bottom 0.2s;
  }
  &:hover img {
    transform: rotate(-160deg) translateY(0);
    transition: transform 0.3s margin-bottom ease;
    margin-bottom: 50px;
  }
`;

export const InfoContainer = styled.div`
  h3 {
    font-family: var(--font-roboto-condensed);
    font-style: italic;
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;
    text-transform: uppercase;
    width: 235px;

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
    margin-bottom: 24px;
  }
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 14px 24px;
    gap: 10px;

    background: var(--colors-orange-1);
    border-radius: 4px;
    font-family: var(--font-barlow);
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;

    text-align: center;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--colors-black);

    border: none;
    &:hover {
      background-color: var(--colors-orange-2);
    }
  }
`;

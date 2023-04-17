import styled from "styled-components";

export const FooterBlackSkull = styled.footer`
  background: var(--colors-black);
  width: 100%;
  height: 500px;
  display: flex;
  padding-left: 56px;
  position: relative;
`;

export const FollowUsImg = styled.img`
  margin-top: 40px;
  width: 245px;
  height: 161px;
`;

export const PolicyContainer = styled.div`
  display: flex;

  flex-direction: column;
  margin-top: 64px;
  margin-left: 62px;
`;

export const PolicyInfo = styled.div`
  display: flex;
  gap: 54px;
  margin-bottom: 48px;
  div {
    gap: 14px;
    max-width: 160px;
    display: flex;
    flex-direction: column;
    h6 {
      margin-bottom: 6px;
      font-family: var(--font-barlow);
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      text-transform: uppercase;
      color: var(--colors-white);
    }
    span {
      font-family: var(--font-barlow);
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: var(--colors-grey-1);
    }
  }
`;
export const PaymentAndSecurityContainer = styled.div`
  display: flex;
  gap: 48px;
`;

export const SubscribeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
  max-width: 353px;
  height: 500px;
  border-left: 1px solid var(--colors-dark-3);
  position: absolute;
  right: 0;
  padding-left: 44px;
  padding-right: 43px;
  h6 {
    width: 150px;

    font-family: var(--font-roboto-condensed);
    font-style: italic;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
    text-transform: uppercase;
    color: var(--colors-white);
    span {
      font-family: var(--font-roboto-condensed);
      font-style: italic;
      font-weight: 700;
      font-size: 32px;
      line-height: 38px;
      text-align: center;
      text-transform: uppercase;
      color: var(--colors-orange-1);
    }
  }
  p {
    font-family: var(--font-barlow);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    width: 260px;
    margin-top: 16px;
    margin-bottom: 32px;
    color: var(--colors-grey-1);
  }
  form {
    width: 100%;
    display: flex;
    gap: 16px;
    flex-direction: column;
    input {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 13px 16px;
      gap: 10px;
      width: 100%;
      background: var(--colors-dark-1);
      border: 1px solid var(--colors-dark-3);
      border-radius: 4px;
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
  }
`;

export const ReservedRightsContainer = styled.div`
  width: 100%;
  height: 88px;
  background: var(--colors-black);

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 56px;
  border-top: 1px solid var(--colors-dark-3);
`;

export const ReservedRightsParagraph = styled.p`
  font-family: var(--font-barlow);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: var(--colors-white);
`;
export const Logos = styled.div`
  display: flex;
  gap: 40px;
`;
export const LogoWicomm = styled.img``;
export const LogoVTEX = styled.img``;

import styled from "styled-components";
import gymImg from "../../assets/gym.jpg";

export const BannerContainer = styled.div`
  width: 100%;
  height: 548px;
  position: relative;
`;

export const BackgroundImg = styled.div`
  background-image: url(${gymImg});
  background-repeat: no-repeat;
  background-size: 100%;
  background-size: cover;
  background-position: center;
  height: 548px;
`;

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 0px;
  transform: translateY(-50%);
  padding: 0 130px;
`;

export const BannerTitle = styled.h1`
  font-family: var(--font-roboto-condensed);
  font-style: italic;
  font-weight: 700;
  font-size: 56px;
  line-height: 66px;
  text-transform: uppercase;
  color: var(--colors-white);
  margin-bottom: 16px;
`;

export const ColoredSpanTitle = styled.span`
  font-family: var(--font-roboto-condensed);
  font-style: italic;
  font-weight: 700;
  font-size: 56px;
  line-height: 66px;
  text-transform: uppercase;
  display: block;
  color: var(--colors-orange-1);
`;

export const BannerParagraph = styled.p`
  font-family: var(--font-barlow);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: var(--colors-white);
  max-width: 349px;

  margin-bottom: 32px;
`;

export const BannerButton = styled.button`
  padding: 14px;
  background-color: var(--colors-orange-1);
  color: var(--colors-black);
  width: 120px;
  display: inline-block;
  border-radius: 4px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-family: var(--font-barlow);
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  &:hover {
    background-color: var(--colors-orange-2);
  }
`;

export const BannerButtonsContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 10px;
  height: 10px;
  margin-bottom: 32px;
`;

export const ButtonOrange = styled.button`
  background-color: var(--colors-orange-1);
  width: 40px;
  height: 6px;
  border: none;
  transform: rotate(180deg);
  transform-origin: top;
  position: relative; /* add this line to enable positioning */
  top: 2px; /* adjust the top value to position the button */
`;
export const ButtonGrey = styled.button`
  background-color: var(--colors-grey-2);
  width: 40px;
  height: 2px;
  border: none;
`;

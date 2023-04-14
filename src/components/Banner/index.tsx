import {
  BannerContainer,
  BackgroundImg,
  BannerContent,
  BannerTitle,
  ColoredSpanTitle,
  BannerParagraph,
  BannerButton,
  BannerButtonsContainer,
  ButtonOrange,
  ButtonGrey,
} from "./style";

export const Banner = () => {
  return (
    <BannerContainer>
      <BackgroundImg />
      <BannerContent>
        <BannerTitle>
          ajudando você a ter{" "}
          <ColoredSpanTitle>mais performance</ColoredSpanTitle>{" "}
        </BannerTitle>
        <BannerParagraph>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna{" "}
        </BannerParagraph>
        <BannerButton>Confira</BannerButton>
      </BannerContent>
      <BannerButtonsContainer>
        <ButtonOrange></ButtonOrange>
        <ButtonGrey></ButtonGrey>
        <ButtonGrey></ButtonGrey>
      </BannerButtonsContainer>
    </BannerContainer>
  );
};

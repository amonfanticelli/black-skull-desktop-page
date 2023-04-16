import { ButtonsChangeImg } from "../ButtonsChangeImg";
import {
  BannerContainer,
  BackgroundImg,
  BannerContent,
  BannerTitle,
  ColoredSpanTitle,
  BannerParagraph,
  BannerButton,
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

      <ButtonsChangeImg
        position="absolute"
        bottom="0"
        left="50%"
        transform="translate(-50%, -50%)"
        margin="0 0 32px 0"
      />
    </BannerContainer>
  );
};

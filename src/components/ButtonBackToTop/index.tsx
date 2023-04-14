import { ButtonAndSpanContainer, SpanContainer, ChatDotsIcon } from "./style";
import arrowUp from "../../assets/CaretUp.png";
import chatDots from "../../assets/ChatDots.png";

export const ButtonBackToTop = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ButtonAndSpanContainer>
      <button onClick={handleBackToTop}>
        <img src={arrowUp} alt="seta para cima" />
      </button>
      <SpanContainer>
        <ChatDotsIcon src={chatDots} alt="balão de conversa com reticências" />
        <span>Fale conosco</span>
      </SpanContainer>
    </ButtonAndSpanContainer>
  );
};

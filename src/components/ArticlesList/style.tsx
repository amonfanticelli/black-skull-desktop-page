import styled from "styled-components";

export const ArticleSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 56px;
  background: linear-gradient(
    180deg,
    var(--colors-dark-3) 0%,
    var(--colors-black) 101.48%
  );
`;

export const TitleContainer = styled.div`
  width: 100%;
  max-width: 1167px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 41px;
  margin-bottom: 24px;
`;

export const Title = styled.h3`
  font-family: var(--font-roboto-condensed);
  font-style: italic;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  text-transform: uppercase;

  color: var(--colors-white);
`;

export const ColoredSpanTitle = styled.span`
  font-family: var(--font-roboto-condensed);
  font-style: italic;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  text-transform: uppercase;

  color: var(--colors-orange-1);
`;

export const ButtonReadAll = styled.button`
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
`;

export const ArticleInfoContainer = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  margin-bottom: 24px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  position: relative;
  width: 100%;
  max-width: 1210px;

  li {
    background: var(--colors-dark-1);
    border: 1px solid var(--colors-dark-3);
    width: 376px;
    img {
      width: 100%;
      margin-bottom: 15px;
    }
    p {
      font-family: var(--font-barlow);
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      text-transform: uppercase;
      color: var(--colors-white);
      margin-top: 16px;
      margin-bottom: 24px;
    }
  }
`;

export const DateSpan = styled.span`
  font-family: var(--font-barlow);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: var(--colors-grey-2);
`;

export const ButtonReadMore = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 24px;
  gap: 10px;

  font-family: var(--font-barlow);
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;

  text-align: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--colors-black);

  background: var(--colors-orange-1);
  border-radius: 4px;

  border: none;
  &:hover {
    background-color: var(--colors-orange-2);
  }
`;

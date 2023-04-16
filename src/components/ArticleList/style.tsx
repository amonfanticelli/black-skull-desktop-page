import styled from "styled-components";

export const ArticleSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 56px;
  background: linear-gradient(180deg, #3a3a3c 0%, #0b0b0b 101.48%);
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
  font-family: "Roboto Condensed";
  font-style: italic;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  /* identical to box height */

  text-transform: uppercase;

  /* White */

  color: #ffffff;
`;

export const ColoredSpanTitle = styled.span`
  font-family: "Roboto Condensed";
  font-style: italic;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  /* identical to box height */

  text-transform: uppercase;

  /* White */

  color: rgba(255, 150, 1, 1);
`;

export const ButtonReadAll = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 24px;
  gap: 10px;

  /* Orange 1 */

  background: #ff9601;
  border-radius: 4px;
  font-family: "Barlow";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  text-align: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  /* Black 1 */

  color: #0b0b0b;

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
    /* Dark 1 */

    background: #1c1c1e;
    /* Dark 3 */

    border: 1px solid #3a3a3c;
    width: 376px;
    img {
      width: 100%;
      margin-bottom: 15px;
    }
    p {
      font-family: "Barlow";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      text-transform: uppercase;

      /* White */

      color: #ffffff;
      margin-top: 16px;
      margin-bottom: 24px;
    }
  }
`;

export const DateSpan = styled.span`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  /* Gray 2 */

  color: #cacaca;
`;

export const ButtonReadMore = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 24px;
  gap: 10px;

  font-family: "Barlow";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  text-align: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  /* Black 1 */

  color: #0b0b0b;
  /* Orange 1 */

  background: #ff9601;
  border-radius: 4px;

  border: none;
  &:hover {
    background-color: var(--colors-orange-2);
  }
`;

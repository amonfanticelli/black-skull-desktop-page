import { HeaderTalkToUs } from "../../components/Header";
import { HeaderNavigation } from "../../components/HeaderNav";
import { Banner } from "../../components/Banner";
import { ButtonBackToTop } from "../../components/ButtonBackToTop";
export const Home = () => {
  return (
    <>
      <HeaderTalkToUs />
      <HeaderNavigation />
      <Banner />
      <ButtonBackToTop />
    </>
  );
};

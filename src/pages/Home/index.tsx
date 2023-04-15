import { HeaderTalkToUs } from "../../components/Header";
import { HeaderNavigation } from "../../components/HeaderNav";
import { Banner } from "../../components/Banner";
import { ButtonBackToTop } from "../../components/ButtonBackToTop";
import { MainContent } from "../../components/Main/style";
import { CategoriesList } from "../../components/CategoriesList";
export const Home = () => {
  return (
    <>
      <HeaderTalkToUs />
      <HeaderNavigation />
      <Banner />
      <ButtonBackToTop />
      <MainContent>
        <CategoriesList />
      </MainContent>
    </>
  );
};

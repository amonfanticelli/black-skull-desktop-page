import { HeaderTalkToUs } from "../../components/Header";
import { HeaderNavigation } from "../../components/HeaderNav";
import { Banner } from "../../components/Banner";
import { ButtonBackToTop } from "../../components/ButtonBackToTop";
import { MainContent } from "../../components/Main/style";
import { CategoriesList } from "../../components/CategoriesList";
import { ReleaseProductsList } from "../../components/ReleaseProductsList";
import { AthletesList } from "../../components/AthletesList";
import { DiscountProductsList } from "../../components/DiscountProductsList";
import { ArticleList } from "../../components/ArticlesList";
import { ObjectivesList } from "../../components/ObjectivesList";
import { BenefitsSection } from "../../components/BenefitsSection";
import { AboutSecion } from "../../components/AboutSection";
import { Footer } from "../../components/Footer";

export const Home = () => {
  return (
    <>
      <HeaderTalkToUs />
      <HeaderNavigation />
      <Banner />
      <ButtonBackToTop />
      <MainContent>
        <CategoriesList />
        <ReleaseProductsList />
        <AthletesList />
        <DiscountProductsList />
        <ArticleList />
        <ObjectivesList />
      </MainContent>
      <BenefitsSection />
      <AboutSecion />
      <Footer />
    </>
  );
};

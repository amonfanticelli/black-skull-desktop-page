import { ProductsList } from "../ProductsList";
import { DiscountTitle } from "./style";

export const DiscountProductsList = () => {
  return (
    <>
      <DiscountTitle id="promotions">Promoções</DiscountTitle>
      <ProductsList />
    </>
  );
};

import {
  Header,
  LogoBlackSkullImg,
  NavigationLinks,
  SearchInput,
  SearchContainer,
  CancelButton,
  LogoAndNavContainer,
  IconsContainer,
  SearchAndIconsContainer,
} from "./style";
import { useState, ChangeEvent } from "react";
import blackSkullLogo from "../../assets/headerFiles/logoBlackSkull.png";
import user from "../../assets/headerFiles/User.png";
import star from "../../assets/headerFiles/Whishlist.png";
import cart from "../../assets/headerFiles/ShoppingCart.png";
import { RiCloseLine } from "react-icons/ri";

export const HeaderNavigation = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleFocus = () => {
    setIsSearching(true);
  };

  const handleCancel = () => {
    setSearchText("");
    setIsSearching(false);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  return (
    <Header>
      <LogoBlackSkullImg src={blackSkullLogo} alt="Black Skull Logo" />
      <LogoAndNavContainer>
        <NavigationLinks>
          <ul>
            <li>
              <a href="#categories">categorias</a>
            </li>
            <li>
              <a href="#clothing">vestuário</a>
            </li>
            <li>
              <a href="#objectives">objetivos</a>
            </li>
            <li>
              <a href="#promotions">promoções</a>
            </li>
            <li>
              <a href="#athletes">atletas</a>
            </li>
            <li>
              <a href="#subscribe">assinaturas</a>
            </li>
          </ul>
        </NavigationLinks>
        <SearchAndIconsContainer>
          <SearchContainer>
            <SearchInput
              type="text"
              placeholder="Buscar"
              onFocus={handleFocus}
              isSearching={isSearching}
              value={searchText}
              onChange={handleInputChange}
              className={isSearching ? "is-searching" : ""}
            />
            {isSearching && (
              <CancelButton onClick={handleCancel}>
                <RiCloseLine />{" "}
              </CancelButton>
            )}
          </SearchContainer>
          <IconsContainer>
            <img src={user} alt="ícone de usuário" />
            <img src={star} alt="ícone de uma estrela" />
            <img src={cart} alt="ícone de um carrinho" />
          </IconsContainer>
        </SearchAndIconsContainer>
      </LogoAndNavContainer>
    </Header>
  );
};

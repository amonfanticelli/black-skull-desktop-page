import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {

  //typography

  --font-inter: 'Inter', sans-serif;
 

  
  //black and white
  --colors-black: #0B0B0B;
  --colors-white: #FFFFFF;

  //orange scale
  --colors-orange-1: #FF9601;
  --colors-orange-2: #FFC470;

  //grey scale
  --colors-grey-1: #9A9A9A;
  --colors-grey-2: #CACACA;
  --colors-background: #F1F1F1;

  //dark scale
  --colors-dark-1: #1C1C1E;
  --colors-dark-2: #2C2C2E;
  --colors-dark-3: #3A3A3C;

}

html {
    box-sizing: border-box;
    font-size: 16px;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-lexend)
  }

  
  ol, ul {
    list-style: none;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  figure {
    margin: 0;
    padding: 0;
    border: 0;
  }

`;

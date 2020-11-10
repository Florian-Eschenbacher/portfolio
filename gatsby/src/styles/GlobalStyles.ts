import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #000;
    --white: #fff;
    --grey: #efefef;
  }
  html {
    font-size: 10px;
  }

  body {
    font-size: 2rem;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;

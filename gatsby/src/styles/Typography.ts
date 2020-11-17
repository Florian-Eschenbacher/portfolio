import { createGlobalStyle } from 'styled-components';

import font from '../assets/fonts/Roboto-Regular.ttf';
import mediumFont from '../assets/fonts/Roboto-Medium.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: Roboto;
    src: url(${font});
  }
  @font-face {
    font-family: RobotoMedium;
    src: url(${mediumFont});
  }
  html {
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;
    color: var(--black);
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
  a {
    color: var(--black);
  }
`;

export default Typography;

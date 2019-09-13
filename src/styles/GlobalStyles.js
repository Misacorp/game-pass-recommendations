import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    height: auto;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.typography.base.fontFamily};
    background-image: linear-gradient(to bottom, #1A0A00, #0A0100);
  }

  h1, h2 {
    font-family: ${({ theme }) => theme.typography.title.fontFamily};
  }
`;

export default GlobalStyles;

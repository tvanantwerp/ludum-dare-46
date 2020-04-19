import { createGlobalStyle } from 'styled-components';

export const Theme = {};

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    font-family: sans-serif;
  }
`;

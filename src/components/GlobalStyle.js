import { createGlobalStyle } from 'styled-components';

export const dayTheme = {
  secondary: '#EEF6CE',
  primary: '#242423',
};

export const nightTheme = {
  primary: dayTheme.secondary,
  secondary: dayTheme.primary,
};

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.primary};
    font-family: sans-serif;
    min-height: 100vh;
  }

  body {
    align-content: center;
    display: grid;
    justify-content: center;
  }
`;

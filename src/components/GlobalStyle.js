import { createGlobalStyle } from 'styled-components';

export const dayTheme = {
  primary: '#242423',
  secondary: '#EEF6CE',
  fontSize: '1rem',
  fontFamily: 'monospace',
};

export const nightTheme = {
  ...dayTheme,
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
    font-family: ${props => props.theme.fontFamily};
    font-size: ${props => props.theme.fontSize};
    min-height: 100vh;
  }

  body {
    align-content: center;
    display: grid;
    justify-content: center;
  }
`;

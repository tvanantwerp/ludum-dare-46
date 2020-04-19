import { createGlobalStyle } from 'styled-components';

export const Theme = {
  dayBackground: '#EEF6CE',
  nightBackground: '#242423',
};

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    background-color: ${props => props.theme.nightBackground};
    color: ${props => props.theme.dayBackground};
    font-family: sans-serif;
    min-height: 100vh;
  }

  body {
    align-content: center;
    display: grid;
    justify-content: center;
  }
`;

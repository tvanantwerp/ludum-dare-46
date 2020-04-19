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
    font-family: sans-serif;
  }
`;

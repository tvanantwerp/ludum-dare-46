import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Theme, GlobalStyle } from './components/GlobalStyle';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle></GlobalStyle>
      <div></div>
    </ThemeProvider>
  );
}

export default App;

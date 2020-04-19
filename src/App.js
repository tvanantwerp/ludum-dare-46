import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Theme, GlobalStyle } from './components/GlobalStyle';
import GameContainer from './components/GameContainer';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <GameContainer>
        <p>Hello world</p>
      </GameContainer>
    </ThemeProvider>
  );
}

export default App;

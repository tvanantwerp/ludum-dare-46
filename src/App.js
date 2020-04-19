import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Theme, GlobalStyle } from './components/GlobalStyle';
import GameContainer from './components/GameContainer';
import HeadsUpDisplay from './components/hud/HeadsUpDisplay';
import Controls from './components/controls/Controls';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <GameContainer>
        <HeadsUpDisplay fuel={100} food={100} water={100} stamina={100} />
        <p>Hello world</p>
        <Controls />
      </GameContainer>
    </ThemeProvider>
  );
}

export default App;

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useMachine } from '@xstate/react';

import { dayTheme, nightTheme, GlobalStyle } from './components/GlobalStyle';
import { stateMachine } from './game-state/states';
import GameContainer from './components/GameContainer';
import HeadsUpDisplay from './components/hud/HeadsUpDisplay';
import World from './components/world/World';
import Controls from './components/controls/Controls';

function App() {
  const [current, send] = useMachine(stateMachine);
  return (
    <ThemeProvider theme={current.context.dayTime ? dayTheme : nightTheme}>
      <GlobalStyle />
      <GameContainer>
        <HeadsUpDisplay
          fuel={current.context.fuel}
          food={current.context.food}
          water={current.context.water}
          stamina={current.context.stamina}
        />
        <World />
        <Controls />
      </GameContainer>
    </ThemeProvider>
  );
}

export default App;

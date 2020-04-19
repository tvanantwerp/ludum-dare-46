import React from 'react';
import { useMachine } from '@xstate/react';

import { stateMachine } from '../../game-state/states';
import { ActionButton } from '../ui/Button';

const Start = () => {
  const [current, send] = useMachine(stateMachine);

  console.log(current);

  return (
    <div style={{ display: current.value === 'start' ? 'block' : 'none' }}>
      <h1>Survive and Escape the Wilderness</h1>
      <p>
        You are lost in the woods with limited supplies and no sense of how to
        get out.
      </p>
      <p>
        You&apos;ll have to explore the wilderness and gather supplies during
        the day. Prepare for the harsh and dangerous night, and hope to find
        civilization the next day.
      </p>
      <p>Be careful: run out of supplies or stamina and you risk death.</p>
      <ActionButton
        style={{ textAlign: 'center', width: '100%' }}
        onClick={() => {
          send('BEGIN');
        }}
      >
        Begin
      </ActionButton>
    </div>
  );
};

export default Start;

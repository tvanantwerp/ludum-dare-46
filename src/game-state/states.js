import { Machine, assign } from 'xstate';

const dayTransitions = action => {
  return [
    { target: action, cond: 'hasMoves' },
    { target: action, cond: 'isAlive' },
    { target: '#night', cond: 'isAlive' },
    { target: '#fail' },
  ];
};

const dayStates = {
  initial: 'idle',
  id: 'day',
  states: {
    idle: {
      on: {
        MOVE: 'move',
        EXPLORE: 'explore',
        EXPLOIT: 'exploit',
      },
    },
    move: {
      entry: ['movesIncrement', 'staminaUpdate'],
      on: {
        MOVE: dayTransitions('move'),
        EXPLORE: dayTransitions('explore'),
        EXPLOIT: dayTransitions('exploit'),
      },
    },
    explore: {
      entry: ['movesIncrement', 'staminaUpdate'],
      on: {
        MOVE: dayTransitions('move'),
        EXPLORE: dayTransitions('explore'),
        EXPLOIT: dayTransitions('exploit'),
      },
    },
    exploit: {
      entry: ['fuelUpdate', 'foodUpdate', 'waterUpdate', 'staminaUpdate'],
      on: {
        MOVE: dayTransitions('move'),
        EXPLORE: dayTransitions('explore'),
        EXPLOIT: dayTransitions('exploit'),
      },
    },
  },
};

const nightStates = {};

export const stateMachine = Machine(
  {
    id: 'game_loop',
    initial: 'start',
    context: {
      fuel: 100,
      food: 100,
      water: 100,
      stamina: 100,
      dayTime: true,
      dayCount: 1,
      moves: 0,
    },
    states: {
      start: {
        on: {
          BEGIN: 'day',
        },
      },
      day: {
        on: {
          PERIOD_OVER: 'night',
          GAME_OVER: 'fail',
          GAME_WIN: 'win',
        },
        ...dayStates,
      },
      night: {
        initial: 'idle',
        id: 'night',
        states: {
          idle: {},
          stoke: {},
          replenish: {},
          rest: {},
        },
        on: {
          PERIOD_OVER: 'day',
          GAME_OVER: 'fail',
          GAME_WIN: 'win',
        },
      },
      win: {
        on: {
          BEGIN: 'day',
        },
      },
      fail: {
        id: 'fail',
        states: {
          idle: {},
        },
        on: {
          BEGIN: 'day',
        },
      },
    },
  },
  {
    actions: {
      movesIncrement: assign((ctx, _e) => {
        return { moves: ctx.moves + 1 };
      }),
      fuelUpdate: assign((ctx, e) => {
        return { fuel: ctx.fuel + e.fuel };
      }),
      foodUpdate: assign((ctx, e) => {
        return { food: ctx.food + e.food };
      }),
      waterUpdate: assign((ctx, e) => {
        return { water: ctx.water + e.water };
      }),
      staminaUpdate: assign((ctx, e) => {
        return { stamina: ctx.stamina + e.stamina };
      }),
    },
    guards: {
      isAlive: (ctx, e) => ctx.stamina + e.stamina > 0,
      hasMoves: (ctx, e) => {
        return ctx.moves < 4 || ctx.moves % 4 !== 0;
      },
    },
  }
);

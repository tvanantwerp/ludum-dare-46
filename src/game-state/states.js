import { Machine, assign } from 'xstate';

const dayTransitions = action => {
  return [
    { target: action, cond: 'isAliveAndHasMoves' },
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
        MOVE: dayTransitions('move'),
        EXPLORE: dayTransitions('explore'),
        EXPLOIT: dayTransitions('exploit'),
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
      entry: [
        'movesIncrement',
        'fuelUpdate',
        'foodUpdate',
        'waterUpdate',
        'staminaUpdate',
      ],
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
        initial: 'idle',
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
        return { moves: (ctx.moves += 1) };
      }),
      fuelUpdate: assign((ctx, e) => {
        return { fuel: Math.max(ctx.fuel + e.fuel, 0) };
      }),
      foodUpdate: assign((ctx, e) => {
        return { food: Math.max(ctx.food + e.food, 0) };
      }),
      waterUpdate: assign((ctx, e) => {
        return { water: Math.max(ctx.water + e.water, 0) };
      }),
      staminaUpdate: assign((ctx, e) => {
        return { stamina: Math.max(ctx.stamina + e.stamina, 0) };
      }),
    },
    guards: {
      isAlive: (ctx, e) => {
        console.log(ctx.stamina, e.stamina);
        return ctx.stamina + e.stamina > 0;
      },
      hasMoves: (ctx, e) => {
        console.log(ctx.moves, e);
        return ctx.moves < 4 || ctx.moves % 4 !== 0;
      },
      isAliveAndHasMoves: (ctx, e) => {
        console.log(ctx, e);
        return (
          ctx.stamina + e.stamina > 0 && (ctx.moves < 4 || ctx.moves % 4 !== 0)
        );
      },
    },
  }
);

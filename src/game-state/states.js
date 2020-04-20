import { Machine, assign } from 'xstate';

const dayStates = {
  initial: 'idle',
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
    },
    explore: {
      entry: ['movesIncrement', 'staminaUpdate'],
    },
    exploit: {
      entry: [
        'movesIncrement',
        'fuelUpdate',
        'foodUpdate',
        'waterUpdate',
        'staminaUpdate',
      ],
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
        on: {
          BEGIN: 'day',
        },
      },
    },
  },
  {
    actions: {
      movesIncrement: assign((ctx, _e) => {
        console.log(ctx);
        return { moves: ctx.moves + 1 };
      }),
      fuelUpdate: assign((ctx, e) => {
        console.log(ctx, e);
        return { fuel: ctx.fuel + e.value };
      }),
      foodUpdate: assign((ctx, e) => {
        console.log(ctx, e);
        return { food: ctx.food + e.value };
      }),
      waterUpdate: assign((ctx, e) => {
        console.log(ctx, e);
        return { water: ctx.water + e.value };
      }),
      staminaUpdate: assign((ctx, e) => {
        console.log(ctx, e);
        return { stamina: ctx.stamina + e.value };
      }),
    },
  }
);

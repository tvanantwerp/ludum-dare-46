import { Machine, assign } from 'xstate';

const dayStates = {
  initial: 'idle',
  states: {
    idle: {
      on: {
        MOVE: {
          target: 'move',
          actions: assign({ stamina: (ctx, e) => ctx.stamina + e.value }),
        },
        EXPLORE: {
          target: 'explore',
          actions: assign({ stamina: (ctx, e) => ctx.stamina + e.value }),
        },
        EXPLOIT: {
          target: 'exploit',
          actions: assign({
            fuel: (ctx, e) => ctx.fuel + e.value,
            food: (ctx, e) => ctx.food + e.value,
            water: (ctx, e) => ctx.water + e.value,
            stamina: (ctx, e) => ctx.stamina + e.value,
          }),
        },
      },
    },
    move: {},
    explore: {},
    exploit: {},
  },
};

const nightStates = {};

export const stateMachine = Machine({
  id: 'game_loop',
  initial: 'start',
  context: {
    fuel: 100,
    food: 100,
    water: 100,
    stamina: 100,
    dayTime: true,
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
});

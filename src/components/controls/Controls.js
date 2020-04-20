import React from 'react';
import PropTypes from 'prop-types';

import StartControls from './StartControls';
import DayControls from './DayControls';

const Controls = ({ current, send }) => {
  return (
    <>
      <StartControls show={current.matches('start')} send={send} />
      <DayControls show={current.matches('day')} send={send} />
    </>
  );
};

Controls.propTypes = {
  current: PropTypes.object,
  send: PropTypes.func,
};

export default Controls;

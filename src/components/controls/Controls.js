import React from 'react';
import PropTypes from 'prop-types';

import StartControls from './StartControls';
import MorningControls from './MorningControls';

const Controls = ({ current, send }) => {
  return (
    <>
      <StartControls show={current.matches('start')} send={send} />
      <MorningControls show={current.matches('day')} send={send} />
    </>
  );
};

Controls.propTypes = {
  current: PropTypes.object,
  send: PropTypes.func,
};

export default Controls;

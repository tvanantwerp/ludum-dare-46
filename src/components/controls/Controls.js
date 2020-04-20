import React from 'react';
import PropTypes from 'prop-types';

import StartControls from './StartControls';
import MorningControls from './MorningControls';

const Controls = ({ current, send }) => {
  return (
    <>
      <StartControls show={current.matches('start')} update={send} />
      <MorningControls show={current.matches('day')} update={send} />
    </>
  );
};

Controls.propTypes = {
  current: PropTypes.object,
  send: PropTypes.func,
};

export default Controls;

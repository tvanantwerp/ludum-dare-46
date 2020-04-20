import React from 'react';
import PropTypes from 'prop-types';

import { ActionButton } from '../ui/Button';
import ButtonsContainer from '../ui/ButtonsContainer';

const MorningControls = ({ show, send }) => {
  return (
    <ButtonsContainer show={show}>
      <ActionButton onClick={() => send('MOVE')}>Move</ActionButton>
      <ActionButton onClick={() => send('EXPLORE')}>Explore</ActionButton>
      <ActionButton onClick={() => send('EXPLOIT')}>Exploit</ActionButton>
    </ButtonsContainer>
  );
};

MorningControls.propTypes = {
  show: PropTypes.bool,
  send: PropTypes.func,
};

export default MorningControls;

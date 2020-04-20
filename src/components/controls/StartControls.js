import React from 'react';
import PropTypes from 'prop-types';

import { ActionButton } from '../ui/Button';
import ButtonsContainer from '../ui/ButtonsContainer';

const StartControls = ({ show, send }) => {
  return (
    <ButtonsContainer show={show}>
      <ActionButton
        onClick={() => {
          send('BEGIN');
        }}
      >
        Begin
      </ActionButton>
    </ButtonsContainer>
  );
};

StartControls.propTypes = {
  show: PropTypes.bool,
  send: PropTypes.func,
};

export default StartControls;

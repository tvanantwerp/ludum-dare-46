import React from 'react';
import PropTypes from 'prop-types';

import { ActionButton } from '../ui/Button';
import ButtonsContainer from '../ui/ButtonsContainer';

const StartControls = ({ show, update }) => {
  return (
    <ButtonsContainer show={show}>
      <ActionButton
        style={{ textAlign: 'center', width: '100%' }}
        onClick={() => {
          update('BEGIN');
        }}
      >
        Begin
      </ActionButton>
    </ButtonsContainer>
  );
};

StartControls.propTypes = {
  show: PropTypes.bool,
  update: PropTypes.func,
};

export default StartControls;

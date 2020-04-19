import React from 'react';
import PropTypes from 'prop-types';

import { ActionButton } from '../ui/Button';
import ButtonsContainer from '../ui/ButtonsContainer';

const MorningControls = ({ show, update }) => {
  return (
    <ButtonsContainer show={show}>
      <ActionButton update={() => update('move')}>Move</ActionButton>
      <ActionButton update={() => update('explore')}>Explore</ActionButton>
      <ActionButton update={() => update('exploit')}>Exploit</ActionButton>
    </ButtonsContainer>
  );
};

MorningControls.propTypes = {
  show: PropTypes.bool,
  update: PropTypes.func,
};

export default MorningControls;

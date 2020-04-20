import React from 'react';
import PropTypes from 'prop-types';

import { ActionButton } from '../ui/Button';
import ButtonsContainer from '../ui/ButtonsContainer';

const DayControls = ({ show, send }) => {
  return (
    <ButtonsContainer show={show}>
      <ActionButton onClick={() => send({ type: 'MOVE', stamina: -5 })}>
        Move
      </ActionButton>
      <ActionButton onClick={() => send({ type: 'EXPLORE', stamina: -15 })}>
        Explore
      </ActionButton>
      <ActionButton
        onClick={() =>
          send({
            type: 'EXPLOIT',
            stamina: -20,
            fuel: Math.round(Math.random() * 20),
            food: Math.round(Math.random() * 20),
            water: Math.round(Math.random() * 20),
          })
        }
      >
        Exploit
      </ActionButton>
    </ButtonsContainer>
  );
};

DayControls.propTypes = {
  show: PropTypes.bool,
  send: PropTypes.func,
};

export default DayControls;

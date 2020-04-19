import React from 'react';
import PropTypes from 'prop-types';

import { DisplayButton } from '../ui/Button';
import ButtonsContainer from '../ui/ButtonsContainer';

const HeadsUpDisplay = ({ fuel, food, water, stamina }) => {
  return (
    <ButtonsContainer show={true}>
      <DisplayButton>🔥{fuel}</DisplayButton>
      <DisplayButton>🍖{food}</DisplayButton>
      <DisplayButton>💧{water}</DisplayButton>
      <DisplayButton>💪{stamina}</DisplayButton>
    </ButtonsContainer>
  );
};

HeadsUpDisplay.propTypes = {
  fuel: PropTypes.number,
  food: PropTypes.number,
  water: PropTypes.number,
  stamina: PropTypes.number,
};

export default HeadsUpDisplay;

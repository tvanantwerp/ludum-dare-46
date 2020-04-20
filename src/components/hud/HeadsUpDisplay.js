import React from 'react';
import PropTypes from 'prop-types';

import { DisplayButton } from '../ui/Button';
import ButtonsContainer from '../ui/ButtonsContainer';

const HeadsUpDisplay = ({ fuel, food, water, stamina }) => {
  return (
    <ButtonsContainer show={true}>
      <DisplayButton>
        <span role='img' aria-label='Fuel'>
          🔥
        </span>
        {fuel}
      </DisplayButton>
      <DisplayButton>
        <span role='img' aria-label='Food'>
          🍖
        </span>
        {food}
      </DisplayButton>
      <DisplayButton>
        <span role='img' aria-label='Water'>
          💧
        </span>
        {water}
      </DisplayButton>
      <DisplayButton>
        <span role='img' aria-label='Stamina'>
          💪
        </span>
        {stamina}
      </DisplayButton>
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

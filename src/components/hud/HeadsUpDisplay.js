import React from 'react';
import PropTypes from 'prop-types';

import { DisplayButton } from '../ui/Button';
import ButtonsContainer from '../ui/ButtonsContainer';

const HeadsUpDisplay = ({ fuel, food, water, stamina }) => {
  return (
    <ButtonsContainer show={true}>
      <DisplayButton>
        <div role='img' aria-label='Stamina'>
          💪
        </div>
        {stamina}
      </DisplayButton>
      <DisplayButton>
        <div role='img' aria-label='Food'>
          🍖
        </div>
        {food}
      </DisplayButton>
      <DisplayButton>
        <div role='img' aria-label='Water'>
          💧
        </div>
        {water}
      </DisplayButton>
      <DisplayButton>
        <div role='img' aria-label='Fuel'>
          🔥
        </div>
        {fuel}
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

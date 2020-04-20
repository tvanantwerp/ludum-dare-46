import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Start from './Start';
import Day from './Day';

const StyledWorld = styled.div`
  align-content: center;
  border: 1px solid ${props => props.theme.primary};
  display: grid;
  padding: 1rem;
`;

const World = ({ current, send }) => {
  return (
    <StyledWorld>
      <Start show={current.matches('start')} />
      <Day
        show={current.matches('day')}
        context={current.context}
        update={send}
      />
    </StyledWorld>
  );
};

World.propTypes = {
  current: PropTypes.object,
  send: PropTypes.func,
};

export default World;

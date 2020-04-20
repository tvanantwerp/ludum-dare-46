import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledGameContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto minmax(500px, 1fr) auto;
  max-width: 500px;
  padding: 1rem;
`;

const GameContainer = ({ children }) => {
  return <StyledGameContainer>{children}</StyledGameContainer>;
};

GameContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default GameContainer;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledGameContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-rows: auto minmax(500px, 1fr) auto;
  margin: 0 auto;
  max-width: 1200px;
`;

const GameContainer = ({ children }) => {
  return <StyledGameContainer>{children}</StyledGameContainer>;
};

GameContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default GameContainer;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledGameContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;

const GameContainer = ({ children }) => {
  return <StyledGameContainer>{children}</StyledGameContainer>;
};

GameContainer.propTypes = {
  children: PropTypes.element,
};

export default GameContainer;

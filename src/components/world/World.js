import React from 'react';
import styled from 'styled-components';

import Start from './Start';

const StyledWorld = styled.div`
  align-content: center;
  border: 1px solid ${props => props.theme.primary};
  display: grid;
  padding: 1rem;
`;

const World = () => {
  return (
    <StyledWorld>
      <Start />
    </StyledWorld>
  );
};

export default World;

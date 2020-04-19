import React from 'react';
import styled from 'styled-components';

import Start from './Start';

const StyledWorld = styled.div`
  border: 1px solid ${props => props.theme.primary};
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

import styled, { css } from 'styled-components';

const ButtonStyles = css`
  background-color: ${props => props.theme.nightBackground};
  border: 1px solid ${props => props.theme.dayBackground};
  color: ${props => props.theme.dayBackground};
  font-size: 1rem;
  font-family: sans-serif;
  padding: 0.5rem 1rem;
`;

export const DisplayButton = styled.div`
  ${ButtonStyles}
`;

export const ActionButton = styled.button`
  ${ButtonStyles}
`;

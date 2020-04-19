import styled, { css } from 'styled-components';

const ButtonStyles = css`
  background-color: ${props => props.theme.secondary};
  border: 1px solid ${props => props.theme.primary};
  color: ${props => props.theme.primary};
  font-size: 1rem;
  font-family: sans-serif;
  padding: 0.5rem 1rem;
`;

export const DisplayButton = styled.div`
  ${ButtonStyles}
  user-select: none;
`;

export const ActionButton = styled.button`
  ${ButtonStyles}
  cursor: pointer;
`;

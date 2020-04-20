import styled, { css } from 'styled-components';

const ButtonStyles = css`
  background-color: ${props => props.theme.secondary};
  border: 1px solid ${props => props.theme.primary};
  color: ${props => props.theme.primary};
  font-size: 1rem;
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSize};
  line-height: 1.4;
  padding: 0.5rem 1rem;
  text-align: center;
`;

export const DisplayButton = styled.div`
  ${ButtonStyles}
  user-select: none;
`;

export const ActionButton = styled.button`
  ${ButtonStyles}
  cursor: pointer;
  transition: background-color 0.15s ease-in-out, color 0.15s ease-in-out;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.primary};
    border: 1px solid ${props => props.theme.secondary};
    color: ${props => props.theme.secondary};
  }
`;

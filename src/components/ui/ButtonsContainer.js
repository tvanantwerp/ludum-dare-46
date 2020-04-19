import styled from 'styled-components';

const ButtonsContainer = styled.div`
  display: ${props => (props.show ? 'flex' : 'none')};

  > * {
    flex: 1;
    margin: 0 0.5rem;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;

export default ButtonsContainer;

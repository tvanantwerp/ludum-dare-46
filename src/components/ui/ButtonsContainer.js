import styled from 'styled-components';

const ButtonsContainer = styled.div`
  display: ${props => (props.show ? 'grid' : 'none')};
  grid-gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
`;

export default ButtonsContainer;

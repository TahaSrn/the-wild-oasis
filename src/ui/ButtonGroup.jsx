import styled from 'styled-components';
import { media } from '../styles/breakpoints';

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: flex-end;

  ${media.tablet} {
    flex-wrap: wrap;
    justify-content: stretch;

    & > button {
      flex: 1 1 auto;
    }
  }
`;

export default ButtonGroup;

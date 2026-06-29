import styled from 'styled-components';
import { media } from '../styles/breakpoints';

const TableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  ${media.tablet} {
    flex-wrap: wrap;
    width: 100%;
    gap: 1.2rem;
  }
`;

export default TableOperations;

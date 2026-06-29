import styled, { css } from "styled-components";
import { media } from "../styles/breakpoints";

const Row = styled.div`
  display: flex;

  ${media.tablet} {
    flex-direction: column;
    gap: 1.6rem;
  }

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;

      ${media.tablet} {
        flex-direction: column;
        align-items: flex-start;
        gap: 1.6rem;
      }
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

export default Row;

import styled, { css } from "styled-components";
import { media } from "../styles/breakpoints";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;

      ${media.tablet} {
        font-size: 2.4rem;
      }
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;

      ${media.tablet} {
        font-size: 1.8rem;
      }
    `}


  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;

      ${media.tablet} {
        font-size: 1.8rem;
      }
    `}

  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      text-align: center;

      ${media.tablet} {
        font-size: 2.4rem;
      }
    `}
`;
export default Heading;

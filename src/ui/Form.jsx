import styled, { css } from "styled-components";
import { media } from "../styles/breakpoints";

const Form = styled.form`
  ${(props) =>
    props.type !== "modal" &&
    css`
      padding: 2.4rem 4rem;

      ${media.tablet} {
        padding: 2rem 1.6rem;
      }

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;

      ${media.tablet} {
        width: 100%;
        max-width: calc(100vw - 3.2rem);
      }
    `}
    
  overflow: hidden;
  font-size: 1.4rem;
`;

export default Form;

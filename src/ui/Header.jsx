import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
import { media } from "../styles/breakpoints";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-0);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;

  ${media.tablet} {
    grid-row: 1;
    grid-column: 1;
    padding: 1.2rem 1.6rem;
    gap: 1.2rem;
    justify-content: space-between;
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;

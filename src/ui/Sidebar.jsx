import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import { media } from "../styles/breakpoints";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1/-1;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  ${media.tablet} {
    grid-row: 3;
    grid-column: 1;
    flex-direction: row;
    align-items: center;
    gap: 0;
    padding: 0.8rem 1.2rem;
    border-right: none;
    border-top: 1px solid var(--color-grey-100);
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;

    & > div:first-child {
      display: none;
    }
  }
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;

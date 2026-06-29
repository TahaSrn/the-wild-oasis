import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";
import { NavLink } from "react-router";
import styled from "styled-components";
import { media } from "../styles/breakpoints";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  ${media.tablet} {
    flex-direction: row;
    gap: 0.4rem;
    width: 100%;
    justify-content: space-around;
  }
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }

  ${media.tablet} {
    &:link,
    &:visited {
      padding: 0.8rem 1.2rem;
      font-size: 1.2rem;
      flex-direction: column;
      gap: 0.4rem;
    }

    & span {
      font-size: 1rem;
    }
  }

  ${media.mobile} {
    &:link,
    &:visited {
      padding: 0.8rem;
    }

    & span {
      display: none;
    }
  }
`;

const Nav = styled.nav`
  ${media.tablet} {
    flex: 1;
    width: 100%;
  }
`;

function MainNav() {
  return (
    <Nav>
      <NavList>
        <li>
          <StyledNavLink to="./dashboard">
            <HiOutlineHome />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="./bookings">
            <HiOutlineCalendarDays />
            <span>Bookings</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="./cabins">
            <HiOutlineHomeModern />
            <span>Cabins</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="./users">
            <HiOutlineUsers />
            <span>Users</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="./settings">
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </StyledNavLink>
        </li>
      </NavList>
    </Nav>
  );
}

export default MainNav;

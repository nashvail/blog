import React from "react"
import styled from "styled-components"

// Components
import NavLink from './NavLink';

// Constants
const ActiveNavLinkStyle = {
  fontWeight: 700,
  color: "#121212",
}

// Styled components
const Navigation = styled.nav`
  grid-column-start: 1;
  grid-column-end: 2;
  padding-left: 0;
  font-family: "Roboto";
  font-size: 0.8rem;
`

const NavigationUL = styled.ul`
  height: 100%;
  margin: 0;
  display: flex;
  align-items: center;
`

const NavigationLI = styled.li`
  margin: 0;
  display: inline-block;
  margin-right: 1rem;
  &:last-of-type {
    margin-right: 0;
  }
  a {
    text-decoration: none;
    color: #616161;
  }
`

export default () => (
  <Navigation>
    <NavigationUL>
      <NavLink to="/" text="Home" />
      <NavLink to="/about" text="About" />
      <NavLink to="/about" text="Work" />
      <NavLink to="/about" text="Shop" />
    </NavigationUL>
  </Navigation>
)

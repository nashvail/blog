import React from "react"
import styled from "styled-components"

// Components
import NavLink from './NavLink';

// Constants

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

export default () => (
  <Navigation>
    <NavigationUL>
      <NavLink to="/" text="Articles" />
      <NavLink to="/about" text="About" />
      <NavLink to="/about" text="Work" />
      <NavLink to="/about" text="Shop" />
    </NavigationUL>
  </Navigation>
)

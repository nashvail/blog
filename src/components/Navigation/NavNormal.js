import React from "react"
import styled from "styled-components"

// Components
import NavLink from "./NavLink"
import Logo from "../Logo"
import { ReactComponent as TwitterIcon } from "../../assets/twitter.svg"
import { ReactComponent as InstagramIcon } from "../../assets/instagram.svg"
import { ReactComponent as GitHubIcon } from "../../assets/github.svg"
import { ReactComponent as CoffeeIcon } from "../../assets/coffee.svg"

// Constants
import Constants from "../../utils/Constants"

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

const Inner = styled.div`
  width: ${Constants.BODY_WIDTH["before_first_breakpoint"]};
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  a:hover {
    text-decoration: none;
  }

  @media screen and (max-width: ${Constants.BREAKPOINTS[0]}) {
    width: ${Constants.BODY_WIDTH["after_first_breakpoint"]};
  }

  @media screen and (max-width: ${Constants.BREAKPOINTS[1]}) {
    display: flex;
    justify-content: space-between;
    /* flex-direction: row-reverse; */
    width: 800px;
  }

  @media screen and (max-width: ${Constants.BREAKPOINTS[2]}) {
    display: none;
    opacity: 0;
    visibility: hidden;
  }
`

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;


  a {
    /* margin: 0 0 0 1rem; */
    padding: 0 0 0 1rem;
    height: 24px;
    position: relative;
  }

  a:before{
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    background: black;
    z-index: -1;
    border-radius: 100%;
    opacity: 0;
    transform: scale(1);
    transition: transform 0.15s cubic-bezier(.17,.67,.26,1.04);
  }

  a:hover:before {
    opacity: 0.1;
    transform: scale(2);
  }
`
export default () => (
  <Inner>
    <Navigation>
      <NavigationUL>
        <NavLink to="/" text="Articles" />
        <NavLink to="/about" text="About" />
        <NavLink to="/about" text="Work" disabled />
        <NavLink to="/about" text="Shop" disabled />
      </NavigationUL>
    </Navigation>
    <Logo />
    <SocialLinks>
      <a href="https://twitter.com/nashvail" target="__blank">
        <TwitterIcon stroke="#3d3d3d" />
      </a>
      <a href="https://instagram.com/nashvail" target="__blank">
        <InstagramIcon stroke="#3d3d3d" />
      </a>
      <a href="https://github.com/nashvail" target="__blank">
        <GitHubIcon stroke="#3d3d3d" />
      </a>
      <a href="https://www.buymeacoffee.com/6WOkNZ4l3" target="__blank">
        <CoffeeIcon stroke="#3d3d3d" />
      </a>
    </SocialLinks>
  </Inner>
)

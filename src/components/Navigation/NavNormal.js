import React from "react"
import styled from "styled-components"

// Components
import NavLink from "./NavLink"
import Logo from "../Logo"
import TwitterIcon from "../../assets/twitter.svg"
import InstagramIcon from "../../assets/instagram.svg"
import CodepenIcon from "../../assets/codepen.svg"
import MediumIcon from "../../assets/medium.svg"
import GitHubIcon from "../../assets/github.svg"

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
    flex-direction: row-reverse;
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

  img{
    margin: 0 0 0 1rem;
    width: 24px;
  }

  a {
    height: 24px;
  }
`

const SocialLink = ({icon, link, desc}) => (
  <a href={link} target="__blank">
    <img src={icon} alt={desc} />
  </a>
);


export default () => (
  <Inner>
    <Navigation>
      <NavigationUL>
        <NavLink to="/" text="Articles" />
        <NavLink to="/about" text="About" disabled />
        <NavLink to="/about" text="Work" disabled />
        <NavLink to="/about" text="Shop" disabled />
      </NavigationUL>
    </Navigation>
    <Logo />
    <SocialLinks>
      <SocialLink icon={TwitterIcon} link="https://twitter.com/NashVail" desc="Twitter"/>
      <SocialLink icon={InstagramIcon} link="https://instagram.com/nashvail" desc="Instagram"/>
      <SocialLink icon={CodepenIcon} link="https://codepen.io/nashvail" desc="Codepen" />
      <SocialLink icon={MediumIcon} link="https://medium.com/@nashvail" desc="Medium"/>
      <SocialLink icon={GitHubIcon} link="https://github.com/nashvail" desc="GitHub"/>
    </SocialLinks>
  </Inner>
)

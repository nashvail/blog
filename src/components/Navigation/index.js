import React from "react"
import Media from "react-media"
import styled from "styled-components"

// Constants
import Constants from '../../utils/Constants';

// Components
import MobileNavigaiton from "./NavMobile"
import NormalNavigation from "./NavNormal"
import Logo from "../Logo"

const MediaQuery = `(max-width:${Constants.BREAKPOINTS[2]})`;

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

// Conditionally render Full Navigation or Mobile navigation

export default () => (
  <Media query={MediaQuery}>
    {matches =>
      matches ? (
        <MobileNavigaiton />
      ) : (
        <Inner>
          <NormalNavigation />
          <Logo />
        </Inner>
      )
    }
  </Media>
)

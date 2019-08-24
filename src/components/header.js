import React from "react"
import styled from "styled-components"
import Media from "react-media";

import Nav from "./Nav"
import Constants from "../utils/constants"
import Logo from "./Logo"
import NavMobile from "./NavMobile";

const Container = styled.header`
  background: white;
  height: ${Constants.HEADER_HEIGHT};
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.05);
  display: grid;
  justify-content: center;
  z-index: 99999;
  top: 0;
  position: sticky;

  @media screen and (max-width: 845px) {
    max-width: 100%;
  }
`

const Inner = styled.div`
  width: ${Constants.BODY_WIDTH["before_first_breakpoint"]};
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: ${Constants.BREAKPOINTS[0]}) {
    width: ${Constants.BODY_WIDTH["after_first_breakpoint"]};
  }

  @media screen and (max-width: ${Constants.BREAKPOINTS[1]}) {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    width: 750px;
  }
`

class Header extends React.Component {
  render() {
    return (
      <Container>
        <Media query="(max-width: 845px)">
          { matches => 
            matches ? (
              <NavMobile/>
            ) : (
              <Inner>
                <Nav />
                <Logo />
              </Inner>
            )
          }
        </Media>
      </Container>
    )
  }
}

export default Header

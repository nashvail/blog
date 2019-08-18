import React from "react"
import styled from "styled-components"

import Nav from "./Nav"
import Constants from "../utils/constants"
import Logo from './Logo';


const Container = styled.header`
  width: 100vw;
  background: white;
  height: ${Constants.HEADER_HEIGHT};
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.05);
  display: grid;
  justify-content: center;
  z-index: 99999;
`;

const Inner = styled.div`
  width: ${Constants.BODY_WIDTH};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

class Header extends React.Component {
  render() {
    return (
      <Container>
        <Inner>
          <Nav />
          <Logo />
        </Inner>
      </Container>
    )
  }
};


export default Header

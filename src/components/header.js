import React from "react"
import styled from "styled-components"

import Navigation from './Navigation';
import Constants from "../utils/Constants"

const Container = styled.header`
  background: white;
  height: ${Constants.HEADER_HEIGHT};
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.05);
  display: grid;
  justify-content: center;
  z-index: 99999;
  top: 0;
  position: sticky;
  overflow: hidden;

  @media screen and (max-width: 845px) {
    width: 100%;
  }
`

class Header extends React.Component {
  render() {
    return (
      <Container>
        <Navigation/>
      </Container>
    )
  }
}

export default Header

import React from "react"
import styled from "styled-components"

import Nav from "./nav"
import Constants from "../utils/constants"

// Import nashvail logo
import LogoImage from "../assets/nv.svg"


// Styled components 

const Container = styled.header`
  width: 100vw;
  background: white;
  height: ${Constants.HEADER_HEIGHT};
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.07);
  display: grid;
  justify-content: center;
`;

const Inner = styled.div`
  width: ${Constants.BODY_WIDTH};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    height: 24px;
    margin: 0;
  }
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
}

const Logo = () => (
  <LogoContainer>
    <img src={LogoImage} />
  </LogoContainer>
)

export default Header

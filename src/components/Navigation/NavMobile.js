import React from "react"
import styled from "styled-components"

// Constants
import Constants from "../../utils/Constants"

// Components
import HamburgerButton from "../HamburgerButton";
import Overlay from "./Overlay";
import Logo from "../Logo"

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding: 0 1.5rem;

  @media screen and (min-width: ${Constants.BREAKPOINTS[2]}) {
    display: none;
    opacity: 0;
    visibility: hidden;
  }
`

export default function MobileNavigation() {

  const [visible, setVisibility] = React.useState(false);

  const setOverlayBodyStyles = () => {
    document.getElementsByTagName("html")[0].classList.add('noscroll');
  }

  const unsetOverlaybodyStyles = () => {
    document.getElementsByTagName("html")[0].classList.remove('noscroll');
  }

  const toggleMenu = () => {
    setVisibility(!visible);

    if (visible) unsetOverlaybodyStyles()
    else setOverlayBodyStyles()
  }

    return (
      <Container>
        <Overlay visible={visible} toggle={toggleMenu} />
        <Logo />
        <HamburgerButton onClick={toggleMenu} active={visible} type="slider"/>
      </Container>
    );
}


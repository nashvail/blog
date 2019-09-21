import React from "react"
import styled from "styled-components"

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
`

export default function MobileNavigation() {

  const [visible, setVisibility] = React.useState(false);

  setOverlayBodyStyles = () => {
    document.getElementsByTagName("html")[0].classList.add('noscroll');
  }

  unsetOverlaybodyStyles = () => {
    document.getElementsByTagName("html")[0].classList.remove('noscroll');
  }

  toggleMenu = () => {
    setVisibility(!visible);

    if (visible) this.unsetOverlaybodyStyles()
    else this.setOverlayBodyStyles()
  }

    return (
      <Container>
        <Overlay visible={visible} toggle={} />
        <Logo />
        <HamburgerButton onClick={this.toggleMenu} active={visible} type="slider"/>
      </Container>
    );
}


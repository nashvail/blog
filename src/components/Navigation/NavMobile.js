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

class MobileNavigation extends React.Component {
  state = {
    expanded: false,
  }

  setOverlayBodyStyles = () => {
    document.getElementsByTagName("html")[0].classList.add('noscroll');
  }

  unsetOverlaybodyStyles = () => {
    document.getElementsByTagName("html")[0].classList.remove('noscroll');
  }

  toggleMenu = () => {
    const { expanded } = this.state
    this.setState({
      expanded: !expanded,
    })

    // Using previous value of expanded so as to not having to access state again
    if (expanded) this.unsetOverlaybodyStyles()
    else this.setOverlayBodyStyles()
  }

  render() {
    const { expanded } = this.state

    return (
      <Container>
        <Overlay visible={expanded} toggle={this.toggleMenu} />
        <Logo />
        <HamburgerButton onClick={this.toggleMenu} active={expanded} type="slider"/>
      </Container>
    )
  }
}

export default MobileNavigation

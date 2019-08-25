import React from "react"
import styled from "styled-components"

// Components
import Logo from "./Logo"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding: 0 1.5rem;
`

const Hamburger = styled.button`
  border: none;
  z-index: 99999; /* cuz */
`

const Overlay = styled.div`
  display: ${ props => props.expanded ? "block" : "none" };
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: white;
`

class MobileNavigation extends React.Component {
  state = {
    expanded: false
  };

  setOverlayBodyStyles = () => {
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";
    // The bug is where the viewport is stretched after this is executed
    // in that case the body doesn't scroll, but who would do that? Will address later
  };

  unsetOverlaybodyStyles = () => {
    document.body.style.removeProperty("height");
    document.body.style.removeProperty("overflow");
  };

  toggleMenu = () => {
    const { expanded } = this.state;
    this.setState({
      expanded: !expanded
    });

    // Using previous value of expanded so as to not having to access state again
    if(expanded) this.unsetOverlaybodyStyles();
    else this.setOverlayBodyStyles();
  }

  render() {
    const { expanded } = this.state;
    return (
      <Container>
        <Overlay expanded={expanded}/>
        <Logo />
        <Hamburger onClick={this.toggleMenu}>Menu</Hamburger>
      </Container>
    )
  }
}

export default MobileNavigation

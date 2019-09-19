import React from "react"
import { Link } from "gatsby"
import styled, { keyframes } from "styled-components"
import { fadeIn } from "../../utils/KeyframeAnimations"

// Hamburger animation
import h_ from "../../utils/hamburgers.module.css"

// Constants
import Constants from "../../utils/Constants"

// Components
import Logo from "../Logo"
import NavLink from "./NavLink"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding: 0 1.5rem;
`

const Hamburger = styled.button`
  border: none;
  cursor: pointer;
  z-index: 99999; /* cuz */
`

const Overlay = styled.div`
  animation: ${fadeIn} 0.1s;
  padding: 1rem;
  background: #fff;
  display: ${props => (props.expanded ? "block" : "none")};
  padding-top: 6rem;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`

class MobileNavigation extends React.Component {
  state = {
    expanded: false,
  }

  setOverlayBodyStyles = () => {
    document.getElementsByTagName("html")[0].style.overflow = "hidden"
  }

  unsetOverlaybodyStyles = () => {
    document.getElementsByTagName("html")[0].style.overflow = "scroll"
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
        <Overlay expanded={expanded}>
          <ul
            css={`
              list-style-type: none;
              margin: 0;
            `}
          >
            <li onClick={this.toggleMenu}>
              <Link to="/">
                <h2>Articles</h2>
              </Link>
            </li>
            <li onClick={this.toggleMenu}>
              <Link to="/about">
                <h2>About</h2>
              </Link>
            </li>
            <li onClick={this.toggleMenu}>
              <Link to="/work">
                <h2>Work</h2>
              </Link>
            </li>
          </ul>
          <br />
          <hr
            css={`
              color: ${Constants.COLORS.BLACK[4]};
            `}
          />
          <h4
            css={`
              color: ${Constants.COLORS.BLACK[3]};
            `}
          >
            Filter articles
          </h4>
          <br />
          <ul
            css={`
              list-style-type: none;
              margin: 0;
            `}
          >
            <li>
              <h4>All</h4>
            </li>
            <li>
              <Link to="/filter/codemath">
                <h4>Code & Math</h4>
              </Link>
            </li>
            <li>
              <h4>Life & Philosophy</h4>
            </li>
            <li>
              <h4>Design</h4>
            </li>
          </ul>
        </Overlay>
        <Logo />
        <Hamburger
          onClick={this.toggleMenu}
          className={h_.hamburger}
          type="button"
        >
          <span className={h_.hamburger_box}>
            <span class={h_.hamburger_inner}></span>
          </span>
        </Hamburger>
      </Container>
    )
  }
}

export default MobileNavigation

import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "gatsby"

// Keyframe animations
import { fadeIn } from "../../utils/KeyframeAnimations"

// Constants
import Constants from "../../utils/Constants"

const Container = styled.div`
  animation: ${fadeIn} 0.25s;
  padding: 1rem;
  background: #fff;
  display: ${props => (props.visible ? "block" : "none")};
  padding-top: 6rem;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: ${Constants.COLORS.BLACK[6]};
  z-index: 999;
`

const MainList = styled.ul`
  list-style-type: none;
  margin: 1rem;

  li {
    margin: 1rem;
    text-align: center;
  }
`

const FilterList = styled.ul`
  list-style-type: none;
  margin: 1.5rem 0 1.5rem 0;
`

const MainLink = ({ to, text }) => (
  <Link to={to}>
    <h2>{text}</h2>
  </Link>
)

const Menu = ({ toggleMenu }) => {
  return (
    <MainList>
      <li onClick={toggleMenu}>
        <MainLink to="/" text="Articles" />
        <FilterList>
          <li><Link to="/">All</Link></li>
          <li><Link to="/filter/codemath">Code & Math</Link></li>
          <li><Link to="/filter/design">Design</Link></li>
          <li><Link to="/filter/misc">Misc.</Link></li>
        </FilterList>
      </li>
      <li>
        <MainLink to="/" text="About" />
      </li>
      <li>
        <MainLink to="/" text="Work" />
      </li>
    </MainList>
  )
}

export default function Overlay({ toggle = () => {}, visible, ...props }) {
  return (
    <Container visible={visible}>
      <Menu toggleMenu={toggle} />
    </Container>
  )
}

Overlay.propTypes = {
  toggle: PropTypes.func,
  visible: PropTypes.bool.isRequired,
}

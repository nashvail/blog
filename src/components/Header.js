import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types";

import NormalNavigation from "./Navigation/NavNormal"
import MobileNavigation from "./Navigation/NavMobile"
import Constants from "../utils/Constants"

const Container = styled.header`
  background: white;
  height: ${Constants.HEADER_HEIGHT};
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.05);
  display: grid;
  justify-content: center;
  z-index: 99999;
  top: 0;
  position: ${props => (props.sticky ? "sticky" : "static")};
  overflow: hidden;
`

export default function Header({ sticky=true }) {
  return (
    <Container sticky={sticky}>
      <NormalNavigation/>
    </Container>
  )
}

Header.propTypes = {
  sticky: PropTypes.bool
}

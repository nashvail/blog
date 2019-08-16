import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

// Local stuff
import Constants from "../utils/constants"

const Navigation = styled.nav`
  position: relative;
  height: ${Constants.FILTER_NAV_HEIGHT};
  background: ${Constants.COLORS.BLACK[6]};
  z-index: -1;
`

class FilterNav extends React.Component {
  render() {
    return (
      <Navigation>
      </Navigation>
    )
  }
}

export default FilterNav

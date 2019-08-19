import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

// Local stuff
import Constants from "../utils/constants"

const Navigation = styled.nav`
  position: relative;
  display: flex;
  justify-content: center;
  height: ${Constants.FILTER_NAV_HEIGHT};
  background: ${Constants.COLORS.BLACK[6]};
  z-index: -1;
`;

const Inner = styled.div`
  width: ${Constants.BODY_WIDTH["before_first_breakpoint"]};
  display: flex;
  align-items: center;
  font-family: 'Roboto';
  font-size: 0.8rem;

  @media screen and (max-width: 1200px) {
    width: ${Constants.BODY_WIDTH["after_first_breakpoint"]}
  }
`;

class FilterNav extends React.Component {
  render() {
    return (
      <Navigation>
        <Inner>
          <span 
            style={{ 
              color: Constants.COLORS.BLACK[3]
            }}
          >Filter Articles</span>
        </Inner>
      </Navigation>
    )
  }
}

export default FilterNav

import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

// Local stuff
import Constants from "../utils/Constants"

const FILTERS = [
  {
    name: "All",
    link: "/"
  },
  { 
    name: "Code & Math",
    link: "/filter/codemath"
  },
  {
    name: "Design",
    link: "/filter/design"
  },
  {
    name: "Life & Philospohy",
    link: "/filter/life-philosophy"
  }
];

const FilterNavigation = styled.nav`
  position: relative;
  display: flex;
  justify-content: center;
  height: ${Constants.FILTER_NAV_HEIGHT};
  background: ${Constants.COLORS.BLACK[6]};
  /* z-index: -1; */
`;

const Inner = styled.div`
  width: ${Constants.BODY_WIDTH["before_first_breakpoint"]};
  display: flex;
  align-items: center;
  font-family: 'Roboto';
  font-size: 0.8rem;

  a:hover {
    text-decoration: none;
  }

  @media screen and (max-width: ${Constants.BREAKPOINTS[0]}) {
    width: ${Constants.BODY_WIDTH["after_first_breakpoint"]}
  }

  @media screen and (max-width: ${Constants.BREAKPOINTS[1]}) {
    width: ${Constants.BODY_WIDTH["after_second_breakpoint"]}
  }

  @media screen and (max-width: ${Constants.BREAKPOINTS[2]}) {
    width: 90%;
  }
`;

const FiltersContainer = styled.ul`
  display: flex;
  list-style-type: none;
  /* height: ${Constants.FILTER_NAV_HEIGHT}; */
  margin: 0;
  padding: 0;
  margin-left: 0.5rem;
  li {
    display: inline-block;
    margin: 0;
    padding: 0;
    margin-left: 1rem;
  }
`;

const Filters = () => (
  <FiltersContainer>
    {
      FILTERS.map(filter => (
        <li><Link to={filter.link}>{ filter.name }</Link></li>
      ))
    }
  </FiltersContainer>
);

class FilterNav extends React.Component {
  render() {
    return (
      <FilterNavigation>
        <Inner>
          <span 
            style={{ 
              color: Constants.COLORS.BLACK[4]
            }}
          >Filter Articles</span>
          <Filters/>
        </Inner>
      </FilterNavigation>
    )
  }
}

export default FilterNav

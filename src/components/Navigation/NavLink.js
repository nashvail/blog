import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import PropTypes from "prop-types";

// Constants
import Constants from "../../utils/Constants"

const ActiveNavLinkStyle = {
  fontWeight: 700,
  color: Constants.COLORS.BLACK[1],
}

const NavigationLI = styled.li`
  margin: 0;
  display: inline-block;
  margin-right: 1rem;
  &:last-of-type {
    margin-right: 0;
  }
  a {
    text-decoration: none;
    color: ${props => (props.disabled ? Constants.COLORS.BLACK[5] : Constants.COLORS.BLACK[3])};
    cursor: ${props => (props.disabled ? "default" : "pointer")};
  }
`

export default function NavLink({ to, text, disabled }) {

  const linkTo = disabled ? " " : to;

  return (
    <NavigationLI disabled={disabled}>
      <Link to={linkTo} activeStyle={ActiveNavLinkStyle}>
        {text}
      </Link>
    </NavigationLI>
  )
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

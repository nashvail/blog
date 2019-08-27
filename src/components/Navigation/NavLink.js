import React from "react";
import styled from "styled-components";
import { Link } from 'gatsby';

// Constants
import Constants from '../../utils/Constants';

const ActiveNavLinkStyle = {
  fontWeight: 700,
  color: Constants.COLORS.BLACK[1]
};

const NavigationLI = styled.li`
  margin: 0;
  display: inline-block;
  margin-right: 1rem;
  &:last-of-type {
    margin-right: 0;
  }
  a {
    text-decoration: none;
    color: #616161;
  }
`;

export default ({ to, text }) => (
  <NavigationLI>
    <Link to={to} activeStyle={ActiveNavLinkStyle}>{text}</Link>
  </NavigationLI>
);

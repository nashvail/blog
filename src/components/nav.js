import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Navigation = styled.nav`
`;

class Nav extends React.Component {
  render() {
    return (
      <Navigation>
        <Link to="/about">About</Link>
      </Navigation>
    );
  }
};

const NavLink = (to) => (
  <Link to={to}>
    {this.children}
  </Link>
);

export default Nav;
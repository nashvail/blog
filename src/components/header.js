import React from "react";
import styled from 'styled-components';

import Nav from './nav';

// Import nashvail logo
import Logo from '../assets/nv.svg';

const Container = styled.header`
  padding: 0.5rem;
  width: 100vw;
  height: 80px;
  background: #FFFFFF;
  box-shadow: 0 2px 6px 0 rgba(0,0,0,0.07);
`;

class Header extends React.Component {
  render() {
    return (
      <Container>
        <center>
          <img src={Logo} height="22"/>
        </center>
        <Nav/>
      </Container>
    );
  }
};

export default Header;
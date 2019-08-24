import React from "react";
import styled from "styled-components";

// Components
import Logo from './Logo';

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  padding: 0 1.5rem;;
`;

export default () => (
  <Container>
    <Logo/>
  </Container>
);

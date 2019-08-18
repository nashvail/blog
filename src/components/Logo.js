import React from "react";
import styled from "styled-components";


// Import nashvail logo
import LogoImage from "../assets/nv.svg"

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    height: 24px;
    margin: 0;
  }
`;


export default () => (
  <LogoContainer>
    <img src={LogoImage} />
  </LogoContainer>
);
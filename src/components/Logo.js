import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

// Import nashvail logo
import LogoImage from "../assets/nv_alter.svg"

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    height: 63px;
    margin: 0;
  }
`

export default () => (
  <LogoContainer>
    <Link to="/" style={{ margin: 0, padding: 0 }}>
      <img src={LogoImage} alt="Nash vail logo" />
    </Link>
  </LogoContainer>
)

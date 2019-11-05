import React from "react"
import Media from "react-media"
import styled from "styled-components"

// Constants
import Constants from '../../utils/Constants';

// Components
import MobileNavigaiton from "./NavMobile"
import NormalNavigation from "./NavNormal"


const MediaQuery = `(max-width:${Constants.BREAKPOINTS[2]})`;

export default () => (
  <Media query={MediaQuery}>
    {matches =>
      matches ? (
        <MobileNavigaiton />
      ) : (
        <NormalNavigation/>
      )
    }
  </Media>
)


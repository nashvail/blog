import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Constants from '../utils/Constants';

// Components
import Pill from './Pill';

// Styled
const Featured = styled.div`
  margin-top: 3rem;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: ${Constants.BREAKPOINTS[0]}){
    flex-direction: column-reverse;
    max-width: ${Constants.BODY_WIDTH["after_first_breakpoint"]};
  }
`;

const FeaturedText = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${Constants.BREAKPOINTS[0]}){
    width: 100%;
    margin-top: 2rem;
  }
`;

const FeaturedHeading = styled.h1`
  margin-bottom: 0.5rem;
  a {
    text-decoration: none;
    color: ${Constants.COLORS.BLACK[1]};

    &:hover {
      text-decoration: underline;
    } 
  }
`;

const FeaturedSpoiler = styled.p`
  font-size: 1.2rem;
`;

const FeaturedCover = styled.div`
  width: 55%;
  /* remove this */
  background-color: cyan;
  img {
    width: 100%;
    max-width: 100%;
    /* and this, once you have a proper cover image*/
    visibility: hidden;
  }

  @media screen and (max-width: ${Constants.BREAKPOINTS[0]}){
    width: 100%;
  }
`;

export default ({ link, title, spoiler, cover }) => (
  <Featured>
    <FeaturedText>
      <Pill type="NEW" />
      <FeaturedHeading>
        <Link to={link}>{title}</Link>
      </FeaturedHeading>
      <FeaturedSpoiler>{spoiler}</FeaturedSpoiler>
    </FeaturedText>
    <FeaturedCover>
      <img src={cover}/>
    </FeaturedCover>
  </Featured>
);
